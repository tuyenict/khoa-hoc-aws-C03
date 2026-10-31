/* =========================================================
   Thi thử SAA-C03 — <body data-page="exam">
   Dữ liệu: assets/exams-data.js (window.EXAMS, window.EXAM_META)
   ========================================================= */
(function () {
  "use strict";
  const { ROOT, $, $$, esc, store, toast } = window.SAA;
  const EXAMS = window.EXAMS || [];
  const META = window.EXAM_META || { minutes: 130, passPct: 72 };
  // v2: bộ đề build lại (chỉ câu tình huống, chia theo domain) — kết quả cũ trỏ tới câu khác nên không dùng lại
  const SES_KEY = "saa-exam-session-v2";
  const HIST_KEY = "saa-exam-history-v2";
  const LAST_KEY = (n) => `saa-exam-last-v2-${n}`;
  const LETTERS = "ABCDEFGH";
  const DOMAINS = (window.EXAM && window.EXAM.domains) || {};
  const LESSON = Object.fromEntries((window.SYLLABUS || []).map((l) => [l.id, l]));
  const SRC = { aws: "AWS chính thức", authored: "Soạn mới" };

  let S = null;          // phiên thi đang làm
  let tick = null;
  let reviewFilter = null; // danh sách chỉ số câu khi "xem lại câu đánh dấu/chưa làm"

  const views = ["vPick", "vExam", "vReview", "vResult"];
  function show(id) {
    views.forEach((v) => ($("#" + v).hidden = v !== id));
    $(".topbar") && ($(".topbar").style.display = id === "vExam" ? "none" : "");
    scrollTo(0, 0);
  }

  const fmt = (sec) => {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    return (h ? h + ":" + String(m).padStart(2, "0") : m) + ":" + String(s).padStart(2, "0");
  };
  const qOf = (i) => EXAMS[S.n][S.order[i]];
  const need = (q) => q.a.length;
  const answered = (i) => (S.ans[i] || []).length > 0;
  const isFlag = (i) => S.flags.includes(i);
  const save = () => store.set(SES_KEY, S);
  const text = (s) => esc(s).replace(/\n/g, "<br>");

  function modal(msg, actions) {
    $("#modalMsg").innerHTML = msg;
    const box = $("#modalAct"); box.innerHTML = "";
    actions.forEach(([label, cls, fn]) => {
      const b = document.createElement("button");
      b.className = "btn " + (cls || ""); b.textContent = label;
      b.onclick = () => { $("#modal").hidden = true; fn && fn(); };
      box.appendChild(b);
    });
    $("#modal").hidden = false;
  }

  /* ---------------- chọn đề ---------------- */
  function renderPick() {
    show("vPick");
    const hist = store.get(HIST_KEY, {});
    $("#examList").innerHTML = EXAMS.map((ex, n) => {
      const h = hist[n] || [];
      const best = h.length ? Math.max(...h.map((x) => x.pct)) : null;
      const last = h[h.length - 1];
      const off = ex.filter((q) => q.src === "aws").length;
      const own = ex.filter((q) => q.src === "authored").length;
      return `<div class="card ex-card">
        <div class="ex-card-h"><b>Đề ${n + 1}</b>${best === null ? '<span class="tag">Chưa làm</span>' :
          `<span class="tag ${best >= META.passPct ? "pass" : "fail"}">Cao nhất ${best}%</span>`}</div>
        <p class="muted">${ex.length} câu · ${off} câu chính thức AWS · ${own} câu soạn mới${last ? `<br>Lần gần nhất: ${last.pct}% · ${new Date(last.date).toLocaleDateString("vi-VN")} · ${h.length} lượt` : ""}</p>
        <div class="ex-card-act">
          <button class="btn" data-start="${n}">Bắt đầu thi</button>
          ${store.get(LAST_KEY(n), null) ? `<button class="btn ghost" data-last="${n}">Xem bài gần nhất</button>` : ""}
        </div></div>`;
    }).join("");
    $$("[data-start]").forEach((b) => (b.onclick = () => confirmStart(+b.dataset.start)));
    $$("[data-last]").forEach((b) => (b.onclick = () => renderResult(store.get(LAST_KEY(+b.dataset.last)))));

    const st = META.stats;
    $("#nExams").textContent = EXAMS.length;
    $("#nUsed").textContent = EXAMS.reduce((s, e) => s + e.length, 0);
    if (st) $("#srcStats").textContent =
      `Quy trình lọc: ${st.raw} câu cộng đồng + ${st.official} câu AWS + ${st.authored} câu soạn mới → loại ${st.dupRemoved} câu trùng lặp, ` +
      `${st.outdatedRemoved} câu lỗi thời (dịch vụ/tính năng đã ngừng hoặc đã thay đổi), ${st.triviaRemoved} câu hỏi thuộc lòng/Yes-No không đúng dạng SAA-C03, ` +
      `sửa ${st.answerFixed} đáp án sai → ${st.exams} đề, ${st.used} câu. Mỗi đề chia đúng tỷ lệ domain ` +
      Object.entries(META.quota || {}).map(([d, k]) => `${d} ${k}`).join(" / ") + ` câu; mỗi câu chỉ xuất hiện ở đúng một đề.`;

    const ses = store.get(SES_KEY, null);
    const box = $("#resumeBox");
    if (ses && ses.endAt > Date.now()) {
      const done = Object.values(ses.ans).filter((a) => a.length).length;
      box.hidden = false;
      box.innerHTML = `<b>Bạn đang làm dở Đề ${ses.n + 1}</b> — ${done}/${ses.order.length} câu, còn ${fmt((ses.endAt - Date.now()) / 1000)}.
        <div class="ex-card-act"><button class="btn" id="btnResume">Tiếp tục làm bài</button>
        <button class="btn ghost" id="btnDrop">Bỏ bài này</button></div>`;
      $("#btnResume").onclick = () => { S = ses; startExam(); };
      $("#btnDrop").onclick = () => modal("Bỏ bài đang làm? Kết quả sẽ không được lưu.", [
        ["Huỷ", "ghost"], ["Bỏ bài", "", () => { store.set(SES_KEY, null); renderPick(); }]]);
    } else if (ses) {
      S = ses; finish(true); // hết giờ khi đang đóng trang → chấm luôn
    } else box.hidden = true;
  }

  function confirmStart(n) {
    const minutes = META.minutes + ($("#optEsl").checked ? 30 : 0);
    const go = () => {
      const order = EXAMS[n].map((_, i) => i);
      if ($("#optShuffle").checked) for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]];
      }
      S = { n, order, ans: {}, flags: [], cur: 0, minutes, startedAt: Date.now(), endAt: Date.now() + minutes * 60000 };
      save(); startExam();
    };
    const ses = store.get(SES_KEY, null);
    const intro = `<b>Đề ${n + 1}</b>: ${EXAMS[n].length} câu trong <b>${minutes} phút</b>.<br>
      Đồng hồ chạy ngay khi bắt đầu và không dừng (kể cả khi đóng trang). Hết giờ bài được nộp tự động.`;
    modal((ses ? "⚠️ Bài đang làm dở sẽ bị huỷ.<br><br>" : "") + intro, [["Huỷ", "ghost"], ["Bắt đầu", "", go]]);
  }

  /* ---------------- làm bài ---------------- */
  function startExam() {
    reviewFilter = null;
    $("#exTitle").textContent = `Đề ${S.n + 1}`;
    show("vExam");
    renderQ();
    clearInterval(tick);
    tick = setInterval(updateTimer, 1000);
    updateTimer();
  }

  function updateTimer() {
    const left = (S.endAt - Date.now()) / 1000;
    const t = fmt(left);
    $("#exTimer").textContent = t;
    $("#revTimer").textContent = t;
    $("#exTimer").classList.toggle("warn", left <= 15 * 60);
    $("#exTimer").classList.toggle("crit", left <= 5 * 60);
    const mark = Math.ceil(left / 60);
    if ((mark === 15 || mark === 5) && S._warned !== mark) { S._warned = mark; toast(`⏰ Còn ${mark} phút`); }
    if (left <= 0) {
      clearInterval(tick);
      $("#modal").hidden = true;
      modal("⏰ Hết giờ! Bài thi đã được nộp tự động.", [["Xem kết quả", "", () => {}]]);
      finish(true);
    }
  }

  function renderQ() {
    const i = S.cur, q = qOf(i), multi = need(q) > 1, sel = S.ans[i] || [];
    $("#exCount").textContent = `Câu ${i + 1} / ${S.order.length}` + (reviewFilter ? " · đang xem lại" : "");
    const done = S.order.filter((_, k) => answered(k)).length;
    $("#exProg").style.width = (done / S.order.length) * 100 + "%";
    $("#qBox").innerHTML = `
      <div class="ex-qnum">Câu ${i + 1}${multi ? ` <span class="tag">Chọn ${need(q)} đáp án</span>` : ""}</div>
      <div class="ex-qtext">${text(q.q)}</div>
      ${q.img ? `<img class="ex-img" src="${ROOT}/assets/exam-img/${esc(q.img.split("/").pop())}" alt="Hình minh hoạ câu hỏi">` : ""}
      <div class="ex-opts-list">${q.o.map((o, k) => `
        <label class="ex-opt ${sel.includes(k) ? "sel" : ""}">
          <input type="${multi ? "checkbox" : "radio"}" name="opt" value="${k}" ${sel.includes(k) ? "checked" : ""}>
          <span class="ex-letter">${LETTERS[k]}</span><span>${text(o)}</span></label>`).join("")}</div>`;
    $$("#qBox input").forEach((inp) => (inp.onchange = () => pick(+inp.value, inp)));
    $("#chkFlag").checked = isFlag(i);
    const pos = reviewFilter ? reviewFilter.indexOf(i) : i;
    const last = reviewFilter ? reviewFilter.length - 1 : S.order.length - 1;
    $("#btnPrev").disabled = pos <= 0;
    $("#btnNext").textContent = pos >= last ? "Xem lại & nộp" : "Câu sau →";
  }

  function pick(k, inp) {
    const i = S.cur, q = qOf(i);
    let sel = S.ans[i] || [];
    if (need(q) === 1) sel = [k];
    else if (inp.checked) {
      if (sel.length >= need(q)) { inp.checked = false; toast(`Câu này chỉ chọn ${need(q)} đáp án — bỏ chọn một đáp án trước`); return; }
      sel = [...sel, k];
    } else sel = sel.filter((x) => x !== k);
    S.ans[i] = sel; save(); renderQ();
  }

  function go(delta) {
    if (reviewFilter) {
      const p = reviewFilter.indexOf(S.cur) + delta;
      if (p < 0) return;
      if (p >= reviewFilter.length) return openReview();
      S.cur = reviewFilter[p];
    } else {
      const p = S.cur + delta;
      if (p < 0) return;
      if (p >= S.order.length) return openReview();
      S.cur = p;
    }
    save(); renderQ(); scrollTo(0, 0);
  }

  function cells(box, onPick) {
    box.innerHTML = S.order.map((_, i) =>
      `<button class="ex-cell ${answered(i) ? "ans" : ""} ${isFlag(i) ? "flag" : ""} ${i === S.cur ? "cur" : ""}" data-i="${i}">${i + 1}</button>`).join("");
    $$(".ex-cell", box).forEach((b) => (b.onclick = () => onPick(+b.dataset.i)));
  }

  function openNav() {
    cells($("#navCells"), (i) => { S.cur = i; reviewFilter = null; save(); $("#navDrawer").hidden = true; renderQ(); });
    $("#navDrawer").hidden = false;
  }

  function openReview() {
    reviewFilter = null;
    show("vReview");
    const un = S.order.filter((_, i) => !answered(i)).length;
    $("#revSummary").innerHTML = `Đã trả lời <b>${S.order.length - un}</b>/${S.order.length} câu · ` +
      `<b>${un}</b> câu chưa trả lời · <b>${S.flags.length}</b> câu đánh dấu. Bấm vào số câu để quay lại câu đó.`;
    cells($("#revCells"), (i) => { S.cur = i; show("vExam"); renderQ(); });
    const startList = (list, empty) => {
      if (!list.length) return toast(empty);
      reviewFilter = list; S.cur = list[0]; show("vExam"); renderQ();
    };
    $("#revAll").onclick = () => { reviewFilter = null; S.cur = 0; show("vExam"); renderQ(); };
    $("#revFlag").onclick = () => startList([...S.flags].sort((a, b) => a - b), "Không có câu nào được đánh dấu");
    $("#revUn").onclick = () => startList(S.order.map((_, i) => i).filter((i) => !answered(i)), "Bạn đã trả lời hết các câu");
    $("#revEnd").onclick = () => modal(
      (un ? `Bạn còn <b>${un}</b> câu chưa trả lời. ` : "") + "Kết thúc bài thi? Sau khi nộp bạn không thể sửa đáp án.",
      [["Quay lại", "ghost"], ["Nộp bài", "", () => finish(false)]]);
  }

  /* ---------------- chấm điểm ---------------- */
  function finish(auto) {
    clearInterval(tick);
    const n = S.n, ex = EXAMS[n];
    let correct = 0;
    const items = S.order.map((qi, i) => {
      const q = ex[qi], mine = (S.ans[i] || []).slice().sort();
      const ok = mine.length === q.a.length && [...q.a].sort().every((x, k) => x === mine[k]);
      if (ok) correct++;
      return { qi, mine, ok, flag: isFlag(i) };
    });
    const used = Math.min(S.minutes * 60, (Math.min(Date.now(), S.endAt) - S.startedAt) / 1000);
    const pct = Math.round((correct / items.length) * 100);
    const res = { n, items, correct, total: items.length, pct, used, minutes: S.minutes, auto, date: Date.now() };
    const hist = store.get(HIST_KEY, {});
    (hist[n] = hist[n] || []).push({ pct, correct, total: items.length, used, date: res.date });
    store.set(HIST_KEY, hist);
    store.set(LAST_KEY(n), res);
    store.set(SES_KEY, null);
    S = null;
    renderResult(res);
  }

  function renderResult(res) {
    if (!res) return renderPick();
    show("vResult");
    const pass = res.pct >= META.passPct;
    const ex = EXAMS[res.n];
    const nWrong = res.items.filter((x) => !x.ok).length;
    $("#resHead").innerHTML = `
      <div class="ex-score-big ${pass ? "pass" : "fail"}">${res.pct}%</div>
      <div><h2 style="margin:0">Đề ${res.n + 1} — ${pass ? "ĐẠT ✅" : "CHƯA ĐẠT ❌"}</h2>
        <p style="margin:6px 0 0">Đúng <b>${res.correct}</b>/${res.total} câu · sai hoặc bỏ trống ${nWrong} câu ·
        thời gian làm ${fmt(res.used)} / ${res.minutes} phút${res.auto ? " · <b>nộp tự động khi hết giờ</b>" : ""}</p>
        <p class="muted" style="margin:4px 0 0">Ngưỡng đạt ước tính ${META.passPct}%. AWS không cho điểm từng phần — câu chọn nhiều đáp án phải đúng đủ mới được tính.</p>
        <div class="ex-dom">${Object.keys(DOMAINS).map((d) => {
          const its = res.items.filter((it) => ex[it.qi].d === d);
          if (!its.length) return "";
          const ok = its.filter((it) => it.ok).length, p = Math.round((ok / its.length) * 100);
          return `<div><span class="ex-dom-h"><b>${d}</b> ${esc(DOMAINS[d].vi)}<span>${ok}/${its.length} · ${p}%</span></span>
            <i class="ex-dom-bar"><i style="width:${p}%;background:${DOMAINS[d].color}"></i></i></div>`;
        }).join("")}</div></div>`;

    const draw = (f) => {
      $("#resList").innerHTML = res.items.map((it, i) => ({ it, i }))
        .filter(({ it }) => f === "all" || (f === "wrong" && !it.ok) || (f === "flag" && it.flag))
        .map(({ it, i }) => {
          const q = ex[it.qi];
          return `<div class="card ex-rq ${it.ok ? "ok" : "bad"}">
            <div class="ex-qnum">Câu ${i + 1} ${it.ok ? '<span class="tag pass">Đúng</span>' : it.mine.length ? '<span class="tag fail">Sai</span>' : '<span class="tag">Bỏ trống</span>'}
              ${it.flag ? '<span class="tag">🚩</span>' : ""}
              <span class="tag src">${SRC[q.src] || "Ditectrev #" + q.id.slice(1)}</span>
              ${q.d ? `<span class="tag src" title="${esc((DOMAINS[q.d] || {}).en || "")}">${q.d}</span>` : ""}
              ${LESSON[q.l] ? `<a class="tag src" href="${ROOT}/lessons/${LESSON[q.l].file}" target="_blank" rel="noopener">📖 Bài ${q.l}</a>` : ""}</div>
            <div class="ex-qtext">${text(q.q)}</div>
            ${q.img ? `<img class="ex-img" src="${ROOT}/assets/exam-img/${esc(q.img.split("/").pop())}" alt="">` : ""}
            <div class="ex-opts-list">${q.o.map((o, k) => {
              const right = q.a.includes(k), mine = it.mine.includes(k);
              return `<div class="ex-opt ${right ? "right" : ""} ${mine && !right ? "wrong" : ""}">
                <span class="ex-letter">${LETTERS[k]}</span><span>${text(o)}</span>
                <span class="ex-mark">${right ? "✓ Đáp án" : ""}${mine ? (right ? " · bạn chọn" : "✗ Bạn chọn") : ""}</span></div>`;
            }).join("")}</div>
            ${q.exp ? `<div class="ex-exp"><b>Giải thích${q.src === "aws" ? " (AWS)" : ""}:</b> ${text(q.exp)}</div>` : ""}
            ${q.fix ? `<div class="ex-exp ex-fix"><b>Đáp án đã sửa so với nguồn:</b> ${text(q.fix)}</div>` : ""}
            ${q.src !== "ditectrev" ? "" : `<p class="ex-lookup"><a href="https://www.google.com/search?q=${encodeURIComponent('"' + q.q.split("\n")[0].slice(0, 110) + '"')}" target="_blank" rel="noopener">🔎 Tra cứu thảo luận về câu này</a></p>`}
          </div>`;
        }).join("") || '<p class="muted">Không có câu nào.</p>';
    };
    $$("#resFilter [data-f]").forEach((b) => (b.onclick = () => {
      $$("#resFilter [data-f]").forEach((x) => x.classList.toggle("on", x === b)); draw(b.dataset.f);
    }));
    $$("#resFilter [data-f]").forEach((x) => x.classList.toggle("on", x.dataset.f === "all"));
    $("#resBack").onclick = renderPick;
    draw("all");
  }

  /* ---------------- sự kiện ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    $("#btnPrev").onclick = () => go(-1);
    $("#btnNext").onclick = () => go(1);
    $("#btnReview").onclick = openReview;
    $("#btnNav").onclick = openNav;
    $("#btnNavClose").onclick = () => ($("#navDrawer").hidden = true);
    $("#navDrawer").onclick = (e) => { if (e.target.id === "navDrawer") $("#navDrawer").hidden = true; };
    $("#chkFlag").onchange = (e) => {
      S.flags = e.target.checked ? [...new Set([...S.flags, S.cur])] : S.flags.filter((x) => x !== S.cur);
      save();
    };
    document.addEventListener("keydown", (e) => {
      if ($("#vExam").hidden || !$("#modal").hidden || !$("#navDrawer").hidden || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key.toLowerCase() === "f") $("#chkFlag").click();
      else {
        const k = LETTERS.indexOf(e.key.toUpperCase());
        const inp = $$("#qBox input")[k];
        if (k >= 0 && inp) inp.click();
      }
    });
    renderPick();
  });
})();
