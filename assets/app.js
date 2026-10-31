/* =========================================================
   AWS SAA-C03 – Tài liệu tiếng Việt  |  Script dùng chung
   - Trang chủ:  <body data-page="home" data-root=".">
   - Trang bài:  <body data-page="lesson" data-lesson="5" data-root="..">
   ========================================================= */
(function () {
  "use strict";
  const ROOT = document.body.dataset.root || ".";
  const ICON = (p) => `${ROOT}/assets/icons/${p}`;
  const DONE_KEY = "saa-c03-done";
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const iconName = (p) => p.split("/").pop().replace(".svg", "").replace(/^(Amazon|AWS)-/, (m) => m.replace("-", " ")).replace(/[-_]/g, " ");

  /* ---------- storage an toàn ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const doneSet = () => new Set(store.get(DONE_KEY, []));
  const toggleDone = (id) => { const s = doneSet(); s.has(id) ? s.delete(id) : s.add(id); store.set(DONE_KEY, [...s]); return s.has(id); };

  /* ---------- theme ---------- */
  const savedTheme = store.get("saa-theme", null);
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  function toggleTheme() {
    const cur = document.documentElement.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store.set("saa-theme", next);
  }

  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2200);
  }

  /* ---------- topbar ---------- */
  function renderTopbar(crumb) {
    const bar = document.createElement("header");
    bar.className = "topbar";
    bar.innerHTML = `
      <a class="brand" href="${ROOT}/index.html"><span class="logo">aws</span><span>SAA-C03 <small>· Tiếng Việt</small></span></a>
      <div class="crumb">${crumb || ""}</div>
      <a class="top-link" href="${ROOT}/about.html">Lộ trình chứng chỉ</a>
      <button class="icon-btn" id="themeBtn" title="Đổi giao diện sáng/tối">◐</button>`;
    document.body.prepend(bar);
    $("#themeBtn").onclick = toggleTheme;
  }

  /* =========================================================
     TRANG BÀI HỌC
     ========================================================= */
  function initLesson() {
    const id = Number(document.body.dataset.lesson);
    const L = SYLLABUS.find((x) => x.id === id);
    if (!L) return;
    const M = MODULES.find((m) => m.id === L.module);
    document.title = `Bài ${id}: ${L.vi} | AWS SAA-C03`;
    renderTopbar(`Module ${M.id} · ${esc(M.vi)} › Bài ${id}`);

    const pl = document.createElement("div"); pl.className = "progress-line"; document.body.appendChild(pl);
    addEventListener("scroll", () => {
      const h = document.documentElement; pl.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
    }, { passive: true });

    /* hero */
    const hero = $("#hero");
    if (hero) {
      hero.className = "hero";
      hero.innerHTML = `<div class="wrap">
        <div class="kicker"><img src="${ICON(M.icon)}" width="20" height="20" alt="" style="border-radius:4px"> Module ${M.id} · ${esc(M.en)} — Bài ${id}/${SYLLABUS.length}</div>
        <h1>${esc(L.title)}</h1>
        <p class="sub">${esc(L.vi)}</p>
        <div class="meta">${L.domains.map((d) => `<span class="chip"><span class="dot" style="background:${EXAM.domains[d].color}"></span>${d} · ${esc(EXAM.domains[d].en)}</span>`).join("")}</div>
        <div class="icons">${L.icons.map((p) => `<figure><img src="${ICON(p)}" alt=""><figcaption>${esc(iconName(p))}</figcaption></figure>`).join("")}</div>
      </div>`;
    }

    /* đánh số h2 + mục lục phải */
    const h2s = $$("main.content h2");
    const toc = $("#toc");
    h2s.forEach((h, i) => {
      if (!h.id) h.id = "s" + (i + 1);
      if (!h.querySelector(".num")) h.insertAdjacentHTML("afterbegin", `<span class="num">${i + 1}</span>`);
    });
    if (toc) {
      toc.innerHTML = `<h5>Trong bài này</h5>` + h2s.map((h) => {
        const txt = h.cloneNode(true); $$(".num, img", txt).forEach((n) => n.remove());
        return `<a href="#${h.id}">${esc(txt.textContent.trim())}</a>`;
      }).join("");
      const links = $$("a", toc);
      const io = new IntersectionObserver((ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) { links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)); }
        });
      }, { rootMargin: "-80px 0px -70% 0px" });
      h2s.forEach((h) => io.observe(h));
    }

    /* nguồn tài liệu gốc từ syllabus (thêm vào cuối #sources, không trùng) */
    const src = $("#sources");
    if (src) {
      const have = new Set($$("a", src).map((a) => a.href));
      L.docs.forEach((d) => { if (!have.has(d.u)) src.insertAdjacentHTML("beforeend", `<li><a href="${d.u}" target="_blank" rel="noopener">${esc(d.t)} <small style="color:var(--muted)">— ${esc(new URL(d.u).hostname)}</small></a></li>`); });
      $$("a", src).forEach((a) => { a.target = "_blank"; a.rel = "noopener"; });
    }

    initQuiz();

    /* điều hướng bài trước / sau + đánh dấu đã học */
    const nav = $("#lesson-nav");
    if (nav) {
      const i = SYLLABUS.indexOf(L), prev = SYLLABUS[i - 1], next = SYLLABUS[i + 1];
      const card = (x, cls, label) => x
        ? `<a class="nav-card ${cls} ${x.ready ? "" : "disabled"}" href="${x.file}"><small>${label}${x.ready ? "" : " · chưa gen"}</small>Bài ${x.id}: ${esc(x.vi)}</a>`
        : `<span></span>`;
      nav.className = "lesson-nav";
      nav.innerHTML = card(prev, "prev", "← Bài trước") +
        `<button class="btn done-btn" id="doneBtn"></button>` + card(next, "next", "Bài tiếp →");
      const btn = $("#doneBtn");
      const paint = (d) => { btn.classList.toggle("is-done", d); btn.textContent = d ? "✓ Đã học xong" : "Đánh dấu đã học"; };
      paint(doneSet().has(id));
      btn.onclick = () => { const d = toggleDone(id); paint(d); toast(d ? "Tuyệt! Đã lưu tiến độ 🎉" : "Đã bỏ đánh dấu"); };
    }
  }

  /* ---------- Quiz ----------
     <div class="q" data-answer="B"> hoặc data-answer="A,C" (chọn nhiều)
       <div class="qh">Câu hỏi...</div>
       <ol class="opts"><li data-k="A">...</li>...</ol>
       <div class="explain">Giải thích...</div>
       <div class="trans">                       (hiện sau khi trả lời)
         <div class="tq">Dịch đề...</div>
         <ul class="topts"><li data-k="A"><span class="tv">Dịch phương án</span><span class="why">Đúng/Sai vì...</span></li>...</ul>
       </div>
     </div> */
  function initQuiz() {
    const qs = $$(".q");
    qs.forEach((q, i) => {
      const ans = (q.dataset.answer || "").split(",").map((s) => s.trim()).filter(Boolean);
      const multi = ans.length > 1;
      const qh = $(".qh", q);
      if (qh && !$(".qn", qh)) qh.insertAdjacentHTML("afterbegin", `<span class="qn">Câu ${i + 1}</span>`);
      if (multi && qh && !$(".multi", qh)) qh.insertAdjacentHTML("beforeend", ` <span class="multi">(Chọn ${ans.length})</span>`);
      const opts = $$("ol.opts li", q);
      opts.forEach((li) => li.addEventListener("click", () => {
        if (q.classList.contains("revealed")) return;
        if (!multi) opts.forEach((o) => o.classList.remove("picked"));
        li.classList.toggle("picked");
        if (!multi || $$("li.picked", q).length === ans.length) check();
      }));
      const act = document.createElement("div");
      act.className = "actions";
      act.innerHTML = `<button class="btn ghost">Xem đáp án</button>`;
      $(".explain", q)?.before(act);
      $("button", act).onclick = check;
      function check() {
        q.classList.add("revealed");
        opts.forEach((o) => {
          const k = o.dataset.k;
          if (ans.includes(k)) o.classList.add("correct");
          else if (o.classList.contains("picked")) o.classList.add("wrong");
        });
        const picked = opts.filter((o) => o.classList.contains("picked")).map((o) => o.dataset.k);
        $$(".trans .topts li", q).forEach((t) => {
          const k = t.dataset.k, mine = picked.includes(k);
          t.classList.add(ans.includes(k) ? "correct" : "wrong");
          if (mine && !$(".mine", t)) t.insertAdjacentHTML("afterbegin", `<span class="mine">Bạn chọn</span>`);
        });
        q.dataset.result = picked.length && picked.sort().join() === [...ans].sort().join() ? "ok" : "ko";
        updateScore();
      }
    });
    function updateScore() {
      const el = $("#quiz-score"); if (!el) return;
      const done = qs.filter((q) => q.dataset.result);
      const ok = done.filter((q) => q.dataset.result === "ok").length;
      el.innerHTML = `Kết quả: <span class="score">${ok}/${qs.length}</span> câu đúng` + (done.length === qs.length ? (ok / qs.length >= 0.72 ? " — Đạt mức qua bài thi (≥ 72%) 🎉" : " — Hãy đọc lại các phần còn sai nhé 💪") : "");
    }
    updateScore();
  }

  /* =========================================================
     TRANG MỤC LỤC
     ========================================================= */
  function initHome() {
    renderTopbar("Mục lục khóa học");
    const done = doneSet();
    const ready = SYLLABUS.filter((l) => l.ready).length;

    /* thanh tỉ trọng domain */
    $("#domainBar").innerHTML = Object.values(EXAM.domains).map((d) => `<span style="width:${d.pct}%;background:${d.color}" title="${esc(d.en)} ${d.pct}%"></span>`).join("");
    $("#domainLegend").innerHTML = Object.entries(EXAM.domains).map(([k, d]) => `<div><i style="background:${d.color}"></i><span><b>${k} · ${d.pct}%</b> — ${esc(d.en)} <span style="color:var(--muted)">(${esc(d.vi)})</span></span></div>`).join("");

    const paintProgress = () => {
      const n = doneSet().size;
      $("#progText").textContent = `Đã học ${n}/${SYLLABUS.length} bài · Đã gen ${ready}/${SYLLABUS.length} bài`;
      $("#progBar").style.width = (n / SYLLABUS.length * 100) + "%";
    };
    paintProgress();

    const nextGen = SYLLABUS.find((l) => !l.ready);
    const nextLearn = SYLLABUS.find((l) => l.ready && !done.has(l.id));
    $("#nextHint").innerHTML =
      (nextLearn ? `▶ Học tiếp: <a href="lessons/${nextLearn.file}"><b>Bài ${nextLearn.id} – ${esc(nextLearn.vi)}</b></a>. ` : "") +
      (nextGen ? `Bài tiếp theo cần gen: <code class="cmd-copy" data-cmd="/aws-bai ${nextGen.id}" style="cursor:pointer">/aws-bai ${nextGen.id}</code> (hoặc <code>/aws-bai next</code>)` : "🎉 Đã gen đủ toàn bộ bài học!");

    const box = $("#modules");
    box.innerHTML = MODULES.map((m) => {
      const ls = SYLLABUS.filter((l) => l.module === m.id);
      return `<section class="module" data-module="${m.id}">
        <div class="module-h"><img src="${ICON(m.icon)}" alt=""><h2>Module ${m.id}: ${esc(m.en)}<small>${esc(m.vi)} · ${ls.length} bài</small></h2></div>
        <div class="lessons">${ls.map(cardHTML).join("")}</div></section>`;
    }).join("");

    function cardHTML(l) {
      const isDone = done.has(l.id);
      const badge = isDone ? `<span class="badge done">✓ Đã học</span>` : l.ready ? `<span class="badge ready">Sẵn sàng</span>` : `<span class="badge todo">Chưa gen</span>`;
      const doms = l.domains.map((d) => `<span style="background:${EXAM.domains[d].color}" title="${esc(EXAM.domains[d].en)}">${d}</span>`).join("");
      const inner = `
        <div class="top"><div class="no">${String(l.id).padStart(2, "0")}</div>
          <div><h3>${esc(l.title)}</h3><div class="vi">${esc(l.vi)}</div></div></div>
        <div class="ic">${l.icons.map((p) => `<img src="${ICON(p)}" alt="" title="${esc(iconName(p))}">`).join("")}</div>
        <div class="foot"><div class="doms">${doms}</div>
          ${l.ready ? badge : `<span style="display:flex;gap:6px;align-items:center">${badge}<code class="cmd cmd-copy" data-cmd="/aws-bai ${l.id}" title="Bấm để copy lệnh">/aws-bai ${l.id}</code></span>`}</div>
        ${l.ready ? "" : `<div class="docs">Tài liệu gốc: ${l.docs.map((d, i) => `<a href="${d.u}" target="_blank" rel="noopener" title="${esc(d.t)}">[${i + 1}]</a>`).join("")}</div>`}`;
      const search = esc((l.title + " " + l.vi + " " + l.topics.join(" ")).toLowerCase());
      return l.ready
        ? `<a class="lesson-card" data-s="${search}" href="lessons/${l.file}">${inner}</a>`
        : `<div class="lesson-card locked" data-s="${search}">${inner}</div>`;
    }

    document.addEventListener("click", (e) => {
      const c = e.target.closest(".cmd-copy"); if (!c) return;
      e.preventDefault();
      const txt = c.dataset.cmd;
      (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(
        () => toast(`Đã copy “${txt}” — dán vào Claude Code để gen bài`),
        () => toast(`Gõ trong Claude Code: ${txt}`));
    });

    $("#search").addEventListener("input", (e) => {
      const q = e.target.value.trim().toLowerCase();
      $$(".lesson-card").forEach((c) => { c.style.display = !q || c.dataset.s.includes(q) ? "" : "none"; });
      $$(".module").forEach((m) => { m.style.display = $$(".lesson-card", m).some((c) => c.style.display !== "none") ? "" : "none"; });
    });
    $("#onlyReady").addEventListener("change", (e) => {
      $$(".lesson-card.locked").forEach((c) => c.hidden = e.target.checked);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.dataset.page === "home") initHome();
    else if (document.body.dataset.page === "lesson") initLesson();
    else if (document.body.dataset.page === "about") renderTopbar("Giới thiệu & lộ trình chứng chỉ");
  });
})();
