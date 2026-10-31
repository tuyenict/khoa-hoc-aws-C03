/* =========================================================
   AWS SAA-C03 – Trò chơi ghi nhớ theo từng bài
   Trang: games/<file bài>.html
     <body data-page="games" data-lesson="1" data-root="..">
     <script> window.DECK = {
       topics: [{ id, name }],                                  // nhóm chủ đề cho flashcard
       cards:  [{ t: topicId, f: "mặt trước", b: "mặt sau", x: "ghi chú (tùy chọn)" }],
       pairs:  [["thuật ngữ", "nghĩa ngắn"]],                     // game ghép cặp
       sorts:  [{ title, desc, buckets: ["Nhóm A", ...],
                  items: [["nội dung", chỉ số nhóm, "lý do (tùy chọn)"]] }],
       tf:     [["mệnh đề", true | false, "giải thích"]],        // Đúng/Sai 60 giây
       map:    { t: "gốc", c: [{ t: "nhánh", icon: "svc/...", c: [{ t: "ý", v: "nội dung cần nhớ", c: [...] }] }] }
     } </script>
   Chuỗi trong DECK được phép chứa HTML đơn giản (<b>, <i>, <code>).
   ========================================================= */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.dataset.page !== "games" || !window.DECK) return;
    const { ROOT, ICON, $, $$, esc, store, toast, renderTopbar } = window.SAA;
    const D = window.DECK;
    const id = Number(document.body.dataset.lesson);
    const L = SYLLABUS.find((x) => x.id === id);
    const M = MODULES.find((m) => m.id === L.module);
    const KEY = "saa-games-" + id;
    const S = Object.assign({ box: {}, best: {}, tab: "flash" }, store.get(KEY, {}));
    const save = () => store.set(KEY, S);
    const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
    const topicName = (t) => (D.topics.find((x) => x.id === t) || {}).name || "";
    const lessonUrl = `${ROOT}/lessons/${L.file}`;

    document.title = `Trò chơi ghi nhớ – Bài ${id} | AWS SAA-C03`;
    renderTopbar(`Module ${M.id} · ${esc(M.vi)} › <a href="${lessonUrl}">Bài ${id}</a> › Trò chơi ghi nhớ`);

    const hero = $("#hero");
    hero.className = "hero g-hero";
    hero.innerHTML = `<div class="wrap">
      <div class="kicker">🎮 Trò chơi ghi nhớ — Bài ${id}/${SYLLABUS.length}</div>
      <h1>${esc(L.title)}</h1>
      <p class="sub">${esc(L.vi)}</p>
      <div class="meta">
        <span class="chip">${D.cards.length} flashcard</span>
        <span class="chip">${D.pairs.length} cặp thuật ngữ</span>
        <span class="chip">${D.sorts.length} bài phân loại</span>
        <span class="chip">${D.tf.length} câu Đúng/Sai</span>
      </div>
      <a class="btn" href="${lessonUrl}" style="text-decoration:none">← Đọc lại bài học</a>
    </div>`;

    /* ---------- tab & điều phối ---------- */
    const GAMES = [
      { k: "map", n: "Bản đồ kiến thức", ic: "🧠", fn: mapGame },
      { k: "flash", n: "Flashcard", ic: "🃏", fn: flashGame },
      { k: "match", n: "Ghép cặp", ic: "🔗", fn: matchGame },
      { k: "sort", n: "Phân loại", ic: "🗂️", fn: sortGame },
      { k: "tf", n: "Đúng/Sai 60 giây", ic: "⚡", fn: tfGame }
    ];
    const tabs = $("#gTabs"), pane = $("#gPane");
    let onKey = null, timers = [];
    tabs.innerHTML = `<span class="g-path">Lộ trình gợi ý: hệ thống hóa → ghi nhớ → vận dụng</span>` +
      GAMES.map((g, i) => `<button class="g-tab" data-k="${g.k}"><span class="n">${i + 1}</span>${g.ic} ${g.n}</button>`).join("");
    tabs.addEventListener("click", (e) => { const b = e.target.closest(".g-tab"); if (b) open(b.dataset.k); });
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.target.closest("input, select, textarea")) return;
      if (onKey) onKey(e);
    });

    function open(k) {
      const g = GAMES.find((x) => x.k === k) || GAMES[1];
      timers.forEach(clearInterval); timers = []; onKey = null;
      S.tab = g.k; save();
      history.replaceState(null, "", "#" + g.k);
      $$(".g-tab", tabs).forEach((b) => b.classList.toggle("on", b.dataset.k === g.k));
      const host = document.createElement("div");   // phần tử mới mỗi lần ⇒ listener của game cũ không còn
      pane.replaceChildren(host);
      g.fn(host);
    }
    const nextTab = (k) => { const i = GAMES.findIndex((g) => g.k === k); return GAMES[(i + 1) % GAMES.length]; };
    const nextBtn = (k) => { const g = nextTab(k); return `<button class="btn ghost" data-go="${g.k}">Tiếp: ${g.ic} ${g.n} →</button>`; };
    pane.addEventListener("click", (e) => { const b = e.target.closest("[data-go]"); if (b) { open(b.dataset.go); scrollTo({ top: tabs.offsetTop - 70, behavior: "smooth" }); } });

    /* =========================================================
       1. BẢN ĐỒ KIẾN THỨC – hệ thống hóa, che ý để tự kiểm tra
       ========================================================= */
    function mapGame(P) {
      const COLORS = ["#147EBA", "#00A4A6", "#ED7100", "#8C4FFF", "#DD344C", "#7AA116", "#01A88D"];
      let quiz = false;
      const total = (function count(n) { return (n.v ? 1 : 0) + (n.c || []).reduce((s, x) => s + count(x), 0); })(D.map);
      const node = (n) => `<li><span class="mm-k">${n.t}</span>${n.v ? `<span class="mm-v" role="button" tabindex="0">${n.v}</span>` : ""}${n.c ? `<ul>${n.c.map(node).join("")}</ul>` : ""}</li>`;
      P.innerHTML = `
        <div class="g-head"><h2>🧠 Bản đồ kiến thức</h2>
          <p>Toàn bộ bài học trên một trang. Đọc lướt để thấy khung kiến thức, rồi bật <b>Tự kiểm tra</b>: các ý được che lại, bạn nhớ lại trước rồi bấm vào để kiểm tra.</p></div>
        <div class="g-tools left">
          <button class="btn sm" id="mmQuiz">🙈 Tự kiểm tra (che ý)</button>
          <button class="btn ghost sm" id="mmAll" hidden>Hiện tất cả</button>
          <span id="mmCount"></span>
        </div>
        <div class="mm">
          <div class="mm-root"><span>${D.map.t}</span></div>
          <div class="mm-grid">${D.map.c.map((b, i) => `
            <section class="mm-branch" style="--bc:${COLORS[i % COLORS.length]}">
              <h3>${b.icon ? `<img src="${ICON(b.icon)}" alt="">` : ""}${b.t}</h3>
              <ul class="mm-tree">${(b.c || []).map(node).join("")}</ul>
            </section>`).join("")}</div>
        </div>
        <div class="g-actions">${nextBtn("map")}</div>`;
      const mm = $(".mm", P), cnt = $("#mmCount", P);
      const paint = () => { cnt.textContent = quiz ? `Đã mở ${$$(".mm-v.shown", P).length}/${total} ý` : `${total} ý cần nhớ`; };
      $("#mmQuiz", P).onclick = () => {
        quiz = !quiz;
        mm.classList.toggle("quiz", quiz);
        $$(".mm-v", P).forEach((v) => v.classList.remove("shown"));
        $("#mmQuiz", P).textContent = quiz ? "👀 Thoát tự kiểm tra" : "🙈 Tự kiểm tra (che ý)";
        $("#mmAll", P).hidden = !quiz;
        paint();
      };
      $("#mmAll", P).onclick = () => { $$(".mm-v", P).forEach((v) => v.classList.add("shown")); paint(); };
      mm.addEventListener("click", (e) => {
        const v = e.target.closest(".mm-v"); if (!v || !quiz) return;
        v.classList.add("shown"); paint();
        if ($$(".mm-v.shown", P).length === total) toast("Bạn đã ôn hết bản đồ kiến thức 🎉");
      });
      onKey = (e) => { if (e.key === "Enter" && e.target.classList.contains("mm-v")) e.target.click(); };
      paint();
    }

    /* =========================================================
       2. FLASHCARD – lật thẻ, chấm Nhớ rồi / Chưa nhớ
          box 0 = mới, 1–2 = đang học, 3 = đã thuộc (lưu localStorage)
          Thẻ mới bấm "Nhớ rồi" ⇒ thuộc ngay; thẻ từng quên cần nhớ đúng 2 lần.
       ========================================================= */
    function flashGame(P) {
      let topic = "all", reverse = false, reviewAll = false, queue = [], cur = null, flipped = false;
      const box = (c) => S.box[c.f] || 0;
      const pool = () => D.cards.filter((c) => topic === "all" || c.t === topic);
      P.innerHTML = `
        <div class="g-head"><h2>🃏 Flashcard</h2>
          <p>Đọc mặt trước, tự trả lời trong đầu rồi lật thẻ. Thành thật chấm <b>Nhớ rồi</b> hoặc <b>Chưa nhớ</b>: thẻ chưa nhớ sẽ quay lại sau vài thẻ cho tới khi bạn thuộc.</p></div>
        <div class="chips" id="fcTopics"></div>
        <div class="fc-stats" id="fcStats"></div>
        <div id="fcStage"></div>
        <div class="g-actions" id="fcAct"></div>
        <div class="g-tools">
          <label><input type="checkbox" id="fcRev"> Đảo mặt (xem đáp án, nhớ câu hỏi)</label>
          <button class="btn ghost sm" id="fcShuf">🔀 Xáo lại</button>
          <button class="btn ghost sm" id="fcReset">Xóa tiến độ</button>
        </div>
        <p class="g-help">Phím tắt: <kbd>Space</kbd> lật thẻ · <kbd>1</kbd> Chưa nhớ · <kbd>2</kbd> Nhớ rồi</p>`;
      const stage = $("#fcStage", P), act = $("#fcAct", P);

      function chips() {
        const all = [{ id: "all", name: "Tất cả" }, ...D.topics];
        $("#fcTopics", P).innerHTML = all.map((t) => {
          const cs = D.cards.filter((c) => t.id === "all" || c.t === t.id);
          const k = cs.filter((c) => box(c) >= 3).length;
          return `<button class="chip-btn ${t.id === topic ? "on" : ""}" data-t="${t.id}">${t.name} <small>${k}/${cs.length}</small></button>`;
        }).join("");
      }
      function stats() {
        const p = pool(), n = p.filter((c) => box(c) === 0).length, k = p.filter((c) => box(c) >= 3).length;
        $("#fcStats", P).innerHTML = `
          <span class="pill new">Mới ${n}</span><span class="pill learn">Đang học ${p.length - n - k}</span><span class="pill know">Đã thuộc ${k}</span>
          <span class="g-prog" title="Đã thuộc ${k}/${p.length}"><i style="width:${p.length ? k / p.length * 100 : 0}%"></i></span>
          <b>${p.length ? Math.round(k / p.length * 100) : 0}%</b>`;
        chips();
      }
      function build() {
        queue = shuffle(pool().filter((c) => reviewAll || box(c) < 3)).sort((a, b) => box(a) - box(b));
        next();
      }
      function next() { cur = queue.shift() || null; show(); stats(); }
      function show() {
        flipped = false;
        if (!cur) {
          const p = pool(), k = p.filter((c) => box(c) >= 3).length;
          stage.innerHTML = `<div class="g-done"><div class="big">🎉</div><h3>Xong lượt này!</h3>
            <p>Bạn đã thuộc <b>${k}/${p.length}</b> thẻ${topic === "all" ? "" : ` trong nhóm “${topicName(topic)}”`}.</p></div>`;
          act.innerHTML = `<button class="btn" id="fcAgain">↻ Ôn lại tất cả thẻ</button>${nextBtn("flash")}`;
          $("#fcAgain", P).onclick = () => { reviewAll = true; build(); };
          return;
        }
        const front = reverse ? cur.b : cur.f, back = reverse ? cur.f : cur.b;
        const b = box(cur), lvl = b === 0 ? "Thẻ mới" : b >= 3 ? "Đã thuộc" : "Đang học";
        stage.innerHTML = `
          <div class="fc" tabindex="0" role="button" aria-label="Lật thẻ">
            <div class="fc-in">
              <div class="fc-face fc-front"><span class="fc-tag">${topicName(cur.t)}</span><span class="fc-lvl">${lvl}</span>
                <div class="fc-txt">${front}</div><span class="fc-hint">Bấm vào thẻ để lật</span></div>
              <div class="fc-face fc-back"><span class="fc-tag">Đáp án</span>
                <div class="fc-txt">${back}</div>${cur.x ? `<div class="fc-x">💡 ${cur.x}</div>` : ""}</div>
            </div>
          </div>
          <div class="fc-left">Còn ${queue.length + 1} thẻ trong lượt này</div>`;
        $(".fc", stage).onclick = flip;
        buttons();
      }
      function buttons() {
        act.innerHTML = flipped
          ? `<button class="btn bad" id="fcNo">↺ Chưa nhớ <kbd>1</kbd></button><button class="btn ok" id="fcYes">✓ Nhớ rồi <kbd>2</kbd></button>`
          : `<button class="btn" id="fcFlip">Lật thẻ <kbd>Space</kbd></button>`;
        if (flipped) { $("#fcNo", P).onclick = () => grade(false); $("#fcYes", P).onclick = () => grade(true); }
        else $("#fcFlip", P).onclick = flip;
      }
      function flip() { if (!cur) return; flipped = !flipped; $(".fc", stage).classList.toggle("flip", flipped); buttons(); }
      function grade(ok) {
        if (!cur || !flipped) return;
        const b = box(cur);
        if (ok) {
          const nb = b === 0 ? 3 : Math.min(3, b + 1);
          S.box[cur.f] = nb;
          if (nb < 3 && !reviewAll) queue.push(cur);
        } else {
          S.box[cur.f] = 1;
          queue.splice(Math.min(3, queue.length), 0, cur);
        }
        save(); next();
      }
      $("#fcTopics", P).addEventListener("click", (e) => { const c = e.target.closest(".chip-btn"); if (c) { topic = c.dataset.t; reviewAll = false; build(); } });
      $("#fcRev", P).onchange = (e) => { reverse = e.target.checked; show(); };
      $("#fcShuf", P).onclick = () => { reviewAll = false; build(); toast("Đã xáo lại bộ thẻ"); };
      $("#fcReset", P).onclick = () => {
        if (!confirm("Xóa toàn bộ tiến độ flashcard của bài này?")) return;
        S.box = {}; save(); reviewAll = false; build();
      };
      onKey = (e) => {
        if (e.code === "Space" || e.key === "Enter") { e.preventDefault(); flip(); }
        else if (e.key === "1" || e.key === "ArrowLeft") grade(false);
        else if (e.key === "2" || e.key === "ArrowRight") grade(true);
      };
      build();
    }

    /* =========================================================
       3. GHÉP CẶP – thuật ngữ ↔ nghĩa, tính giờ
       ========================================================= */
    function matchGame(P) {
      const N = Math.min(6, D.pairs.length);
      let sel = null, done = 0, miss = 0, t0 = 0;
      P.innerHTML = `
        <div class="g-head"><h2>🔗 Ghép cặp</h2>
          <p>Bấm một thuật ngữ bên trái rồi bấm nghĩa đúng bên phải (hoặc ngược lại). Mỗi ván ${N} cặp ngẫu nhiên, ghép càng nhanh, càng ít sai càng tốt.</p></div>
        <div class="mt-top"><span>⏱ <b id="mtTime">0.0</b> giây</span><span>✗ Sai <b id="mtMiss">0</b></span><span>✓ <b id="mtDone">0</b>/${N}</span>
          <span id="mtBest" class="muted"></span></div>
        <div class="mt-grid"><div class="mt-col a" id="mtA"></div><div class="mt-col b" id="mtB"></div></div>
        <div class="g-fb" id="mtFb"></div>
        <div class="g-actions"><button class="btn ghost" id="mtNew">🔀 Ván mới</button>${nextBtn("match")}</div>`;
      const best = () => { const b = S.best.match; $("#mtBest", P).textContent = b ? `Kỷ lục: ${b.t.toFixed(1)} giây, ${b.m} lỗi` : ""; };
      function round() {
        timers.forEach(clearInterval); timers = [];
        const set = shuffle(D.pairs).slice(0, N).map((p, i) => ({ a: p[0], b: p[1], i }));
        sel = null; done = 0; miss = 0; t0 = 0;
        $("#mtA", P).innerHTML = shuffle(set).map((p) => `<button class="mt-tile" data-i="${p.i}" data-s="a">${p.a}</button>`).join("");
        $("#mtB", P).innerHTML = shuffle(set).map((p) => `<button class="mt-tile" data-i="${p.i}" data-s="b">${p.b}</button>`).join("");
        $("#mtTime", P).textContent = "0.0"; $("#mtMiss", P).textContent = "0"; $("#mtDone", P).textContent = "0";
        $("#mtFb", P).className = "g-fb";
        best();
      }
      P.addEventListener("click", (e) => {
        const t = e.target.closest(".mt-tile"); if (!t || t.classList.contains("ok")) return;
        if (!t0) { t0 = Date.now(); timers.push(setInterval(() => { $("#mtTime", P).textContent = ((Date.now() - t0) / 1000).toFixed(1); }, 100)); }
        if (!sel || sel.dataset.s === t.dataset.s) { if (sel) sel.classList.remove("sel"); sel = t === sel ? null : t; if (sel) sel.classList.add("sel"); return; }
        const a = sel; sel = null; a.classList.remove("sel");
        if (a.dataset.i === t.dataset.i) {
          a.classList.add("ok"); t.classList.add("ok");
          $("#mtDone", P).textContent = ++done;
          if (done === N) finish();
        } else {
          miss++; $("#mtMiss", P).textContent = miss;
          [a, t].forEach((x) => { x.classList.remove("bad"); void x.offsetWidth; x.classList.add("bad"); setTimeout(() => x.classList.remove("bad"), 450); });
        }
      });
      function finish() {
        timers.forEach(clearInterval); timers = [];
        const sec = (Date.now() - t0) / 1000, b = S.best.match;
        const record = !b || miss < b.m || (miss === b.m && sec < b.t);
        if (record) { S.best.match = { t: sec, m: miss }; save(); }
        const fb = $("#mtFb", P);
        fb.className = "g-fb show ok";
        fb.innerHTML = `🎉 Hoàn thành trong <b>${sec.toFixed(1)} giây</b> với <b>${miss}</b> lỗi.${record ? " <b>Kỷ lục mới!</b>" : ""} Bấm <b>Ván mới</b> để gặp các cặp khác.`;
        best();
      }
      $("#mtNew", P).onclick = round;
      onKey = (e) => { if (e.key === "n" || e.key === "N") round(); };
      round();
    }

    /* =========================================================
       4. PHÂN LOẠI – xếp từng mục vào đúng nhóm (bấm hoặc kéo-thả)
       ========================================================= */
    function sortGame(P) {
      const COLORS = ["#147EBA", "#ED7100", "#7AA116", "#8C4FFF", "#DD344C", "#00A4A6", "#01A88D"];
      let ex = 0, sel = null, miss = 0, left = 0;
      P.innerHTML = `
        <div class="g-head"><h2>🗂️ Phân loại</h2>
          <p>Bấm chọn một thẻ rồi bấm vào nhóm đúng (trên máy tính có thể kéo-thả). Mỗi lần xếp đều có giải thích, giúp bạn nhìn kiến thức theo từng nhóm.</p></div>
        <div class="chips" id="stEx">${D.sorts.map((s, i) => `<button class="chip-btn" data-x="${i}">${i + 1}. ${s.title}</button>`).join("")}</div>
        <div id="stBody"></div>`;
      function start(i) {
        ex = i; sel = null; miss = 0;
        const X = D.sorts[ex];
        left = X.items.length;
        $$("#stEx .chip-btn", P).forEach((c) => c.classList.toggle("on", Number(c.dataset.x) === ex));
        $("#stBody", P).innerHTML = `
          <p class="st-desc">${X.desc || ""}</p>
          <div class="mt-top"><span>Còn <b id="stLeft">${left}</b> thẻ</span><span>✗ Sai <b id="stMiss">0</b></span></div>
          <div class="st-pool" id="stPool">${shuffle(X.items.map((it, k) => ({ it, k }))).map(({ it, k }) =>
            `<button class="st-item" draggable="true" data-k="${k}">${it[0]}</button>`).join("")}</div>
          <div class="st-buckets">${X.buckets.map((b, j) => `
            <div class="st-bucket" data-b="${j}" style="--bc:${COLORS[j % COLORS.length]}"><h4>${b}</h4><div class="st-in"></div></div>`).join("")}</div>
          <div class="g-fb" id="stFb"></div>
          <div class="g-actions" id="stAct"><button class="btn ghost" id="stRe">↻ Làm lại</button></div>`;
        $("#stRe", P).onclick = () => start(ex);
      }
      function place(k, j) {
        const X = D.sorts[ex], it = X.items[k], chip = $(`.st-item[data-k="${k}"]`, P), fb = $("#stFb", P);
        if (!chip || chip.classList.contains("ok")) return;
        chip.classList.remove("sel"); sel = null;
        const why = it[2] ? ` — ${it[2]}` : "";
        if (it[1] === j) {
          chip.classList.add("ok"); chip.draggable = false;
          $(`.st-bucket[data-b="${j}"] .st-in`, P).appendChild(chip);
          fb.className = "g-fb show ok";
          fb.innerHTML = `✓ <b>${it[0]}</b> → <b>${X.buckets[j]}</b>${why}`;
          $("#stLeft", P).textContent = --left;
          if (!left) {
            fb.innerHTML = `🎉 Hoàn thành “${X.title}” với <b>${miss}</b> lỗi. ${miss ? "Làm lại để đạt 0 lỗi nhé!" : "Tuyệt đối!"}`;
            const nx = ex + 1 < D.sorts.length ? `<button class="btn" id="stNext">Bài phân loại tiếp →</button>` : nextBtn("sort");
            $("#stAct", P).insertAdjacentHTML("beforeend", nx);
            if ($("#stNext", P)) $("#stNext", P).onclick = () => start(ex + 1);
          }
        } else {
          miss++; $("#stMiss", P).textContent = miss;
          chip.classList.remove("bad"); void chip.offsetWidth; chip.classList.add("bad");
          fb.className = "g-fb show bad";
          fb.innerHTML = `✗ <b>${it[0]}</b> không thuộc nhóm <b>${X.buckets[j]}</b>. Thử nhóm khác!`;
        }
      }
      P.addEventListener("click", (e) => {
        const x = e.target.closest("#stEx .chip-btn"); if (x) return start(Number(x.dataset.x));
        const c = e.target.closest(".st-item");
        if (c && !c.classList.contains("ok")) {
          const same = sel === c;
          $$(".st-item.sel", P).forEach((s) => s.classList.remove("sel"));
          sel = same ? null : c; if (sel) sel.classList.add("sel");
          $$(".st-bucket", P).forEach((b) => b.classList.toggle("ready", !!sel));
          return;
        }
        const b = e.target.closest(".st-bucket");
        if (b && sel) { place(Number(sel.dataset.k), Number(b.dataset.b)); $$(".st-bucket", P).forEach((x) => x.classList.remove("ready")); }
      });
      P.addEventListener("dragstart", (e) => { const c = e.target.closest(".st-item"); if (c) e.dataTransfer.setData("text/plain", c.dataset.k); });
      P.addEventListener("dragover", (e) => { const b = e.target.closest(".st-bucket"); if (b) { e.preventDefault(); b.classList.add("over"); } });
      P.addEventListener("dragleave", (e) => { const b = e.target.closest(".st-bucket"); if (b && !b.contains(e.relatedTarget)) b.classList.remove("over"); });
      P.addEventListener("drop", (e) => {
        const b = e.target.closest(".st-bucket"); if (!b) return;
        e.preventDefault(); b.classList.remove("over");
        place(Number(e.dataTransfer.getData("text/plain")), Number(b.dataset.b));
      });
      start(0);
    }

    /* =========================================================
       5. ĐÚNG/SAI 60 GIÂY – phản xạ nhanh, xem lại câu sai
       ========================================================= */
    function tfGame(P) {
      const DUR = 60;
      let order = [], idx = 0, score = 0, streak = 0, maxStreak = 0, wrong = [], endAt = 0, running = false;
      function intro() {
        running = false;
        const b = S.best.tf;
        P.innerHTML = `
          <div class="g-head"><h2>⚡ Đúng/Sai 60 giây</h2>
            <p>Trong 60 giây, trả lời càng nhiều mệnh đề càng tốt. Sau mỗi câu có giải thích ngắn; hết giờ bạn xem lại toàn bộ câu sai.</p></div>
          <div class="g-done"><div class="big">⚡</div>
            <p>${D.tf.length} mệnh đề về bài ${id}. ${b ? `Kỷ lục của bạn: <b>${b} điểm</b>.` : "Chưa có kỷ lục, chơi thử nhé!"}</p>
            <button class="btn" id="tfGo">Bắt đầu <kbd>Enter</kbd></button></div>
          <p class="g-help">Phím tắt: <kbd>←</kbd> hoặc <kbd>1</kbd> = Đúng · <kbd>→</kbd> hoặc <kbd>2</kbd> = Sai</p>`;
        $("#tfGo", P).onclick = start;
      }
      function start() {
        order = shuffle(D.tf); idx = 0; score = 0; streak = 0; maxStreak = 0; wrong = []; running = true;
        endAt = Date.now() + DUR * 1000;
        P.innerHTML = `
          <div class="tf-top"><span>⏱ <b id="tfT">${DUR}</b> giây</span><span>Điểm <b id="tfS">0</b></span><span>Chuỗi 🔥 <b id="tfK">0</b></span></div>
          <div class="tf-bar"><i id="tfBar" style="width:100%"></i></div>
          <div class="tf-q" id="tfQ"></div>
          <div class="tf-btns"><button class="btn ok" id="tfY">✓ Đúng</button><button class="btn bad" id="tfN">✗ Sai</button></div>
          <div class="g-fb" id="tfFb"></div>`;
        $("#tfY", P).onclick = () => answer(true);
        $("#tfN", P).onclick = () => answer(false);
        timers.push(setInterval(tick, 100));
        ask();
      }
      function ask() {
        if (idx && idx % order.length === 0) order = shuffle(D.tf);
        $("#tfQ", P).innerHTML = order[idx % order.length][0];
      }
      function tick() {
        const ms = Math.max(0, endAt - Date.now());
        $("#tfT", P).textContent = Math.ceil(ms / 1000);
        $("#tfBar", P).style.width = (ms / DUR / 10) + "%";
        if (!ms) end();
      }
      function answer(v) {
        if (!running) return;
        const q = order[idx % order.length], ok = v === q[1], fb = $("#tfFb", P);
        if (ok) { score++; streak++; maxStreak = Math.max(maxStreak, streak); }
        else { streak = 0; if (!wrong.includes(q)) wrong.push(q); }
        $("#tfS", P).textContent = score; $("#tfK", P).textContent = streak;
        fb.className = "g-fb show " + (ok ? "ok" : "bad");
        fb.innerHTML = `${ok ? "✓ Chính xác" : "✗ Chưa đúng"}: “${q[0]}” là <b>${q[1] ? "ĐÚNG" : "SAI"}</b>. ${q[2]}`;
        idx++; ask();
      }
      function end() {
        timers.forEach(clearInterval); timers = []; running = false;
        const record = score > (S.best.tf || 0);
        if (record) { S.best.tf = score; save(); }
        P.innerHTML = `
          <div class="g-done"><div class="big">${score >= 15 ? "🏆" : score >= 8 ? "👏" : "💪"}</div>
            <h3>${score} điểm${record ? " · Kỷ lục mới!" : ""}</h3>
            <p>Trả lời ${idx} câu · đúng ${idx ? Math.round(score / idx * 100) : 0}% · chuỗi dài nhất ${maxStreak}</p></div>
          ${wrong.length ? `<h3 class="tf-rh">Xem lại ${wrong.length} câu sai</h3>
            <ul class="tf-review">${wrong.map((q) => `<li><b class="${q[1] ? "yes" : "no"}">${q[1] ? "ĐÚNG" : "SAI"}</b> · ${q[0]}<small>${q[2]}</small></li>`).join("")}</ul>` : ""}
          <div class="g-actions"><button class="btn" id="tfAgain">↻ Chơi lại <kbd>Enter</kbd></button>${nextBtn("tf")}</div>`;
        $("#tfAgain", P).onclick = start;
      }
      onKey = (e) => {
        if (running) {
          if (e.key === "ArrowLeft" || e.key === "1") { e.preventDefault(); answer(true); }
          else if (e.key === "ArrowRight" || e.key === "2") { e.preventDefault(); answer(false); }
        } else if (e.key === "Enter") { e.preventDefault(); start(); }
      };
      intro();
    }

    open(location.hash.slice(1) || S.tab);
  });
})();
