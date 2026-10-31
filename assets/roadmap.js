/* =========================================================
   AWS SAA-C03 – Tài liệu tiếng Việt  |  Bản đồ chứng chỉ (about.html)
   ========================================================= */
(function () {
  "use strict";
  const COURSE = "SAA"; // chứng chỉ của khóa học này
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  const LEVELS = [
    { k: "f", lv: "Cấp 1", name: "Foundational", vi: "Nền tảng" },
    { k: "a", lv: "Cấp 2", name: "Associate", vi: "Trung cấp" },
    { k: "p", lv: "Cấp 3", name: "Professional", vi: "Chuyên nghiệp" },
    { k: "s", lv: "Chuyên sâu", name: "Specialty", vi: "Một lĩnh vực" }
  ];

  const CERTS = {
    CLF: { lv: "f", c: 2, code: "CLF-C02", name: "Cloud Practitioner", min: 90, q: 65, fee: 100, pass: 700, wk: [2, 3],
      desc: "Hiểu tổng quan về đám mây AWS: dịch vụ cốt lõi, bảo mật, giá cả và hỗ trợ. Không cần kinh nghiệm kỹ thuật.",
      pre: "Không yêu cầu", dom: ["Khái niệm điện toán đám mây", "Bảo mật và mô hình trách nhiệm chung", "Công nghệ và dịch vụ cốt lõi", "Thanh toán, giá và hỗ trợ"] },
    AIF: { lv: "f", c: 4, code: "AIF-C01", name: "AI Practitioner", min: 90, q: 65, fee: 100, pass: 700, wk: [2, 4],
      desc: "Nền tảng về AI, machine learning và AI tạo sinh trên AWS, dành cho cả người không viết code.",
      pre: "Không yêu cầu", dom: ["Khái niệm AI và ML", "AI tạo sinh và foundation model", "Ứng dụng foundation model (Amazon Bedrock)", "AI có trách nhiệm", "Bảo mật và quản trị giải pháp AI"] },
    SAA: { lv: "a", c: 1, code: "SAA-C03", name: "Solutions Architect – Associate", min: 130, q: 65, fee: 150, pass: 720, wk: [6, 10],
      desc: "Thiết kế hệ thống trên AWS an toàn, phục hồi tốt, hiệu năng cao và tối ưu chi phí. Đây là chứng chỉ của khóa học này.",
      pre: "Nên có khoảng 1 năm thực hành AWS", dom: ["Thiết kế kiến trúc bảo mật (30%)", "Kiến trúc có khả năng phục hồi (26%)", "Kiến trúc hiệu năng cao (24%)", "Kiến trúc tối ưu chi phí (20%)"] },
    DVA: { lv: "a", c: 2, code: "DVA-C02", name: "Developer – Associate", min: 130, q: 65, fee: 150, pass: 720, wk: [6, 8],
      desc: "Viết, triển khai và gỡ lỗi ứng dụng cloud-native với Lambda, DynamoDB, API Gateway và công cụ CI/CD.",
      pre: "Biết ít nhất một ngôn ngữ lập trình", dom: ["Phát triển với dịch vụ AWS", "Bảo mật ứng dụng", "Triển khai ứng dụng (CI/CD, SAM)", "Gỡ lỗi và tối ưu"] },
    SOA: { lv: "a", c: 3, code: "SOA-C03", name: "CloudOps Engineer – Associate", min: 130, q: 65, fee: 150, pass: 720, wk: [6, 8],
      desc: "Vận hành, giám sát và tự động hóa hệ thống trên AWS. Tên cũ là SysOps Administrator.",
      pre: "Nên có kinh nghiệm vận hành hệ thống", dom: ["Giám sát, ghi log và khắc phục sự cố", "Độ tin cậy và liên tục kinh doanh", "Triển khai, cấp phát và tự động hóa", "Bảo mật và tuân thủ", "Mạng và phân phối nội dung"] },
    DEA: { lv: "a", c: 4, code: "DEA-C01", name: "Data Engineer – Associate", min: 130, q: 65, fee: 150, pass: 720, wk: [6, 8],
      desc: "Xây pipeline dữ liệu: thu nạp, biến đổi, lưu trữ và quản trị dữ liệu với Glue, Kinesis, Redshift.",
      pre: "Biết SQL và khái niệm ETL", dom: ["Thu nạp và biến đổi dữ liệu", "Quản lý kho dữ liệu", "Vận hành và hỗ trợ dữ liệu", "Bảo mật và quản trị dữ liệu"] },
    MLA: { lv: "a", c: 5, code: "MLA-C01", name: "Machine Learning Engineer – Associate", min: 130, q: 65, fee: 150, pass: 720, wk: [8, 10],
      desc: "Xây dựng, huấn luyện, triển khai và giám sát mô hình ML với Amazon SageMaker.",
      pre: "Biết Python và kiến thức ML cơ bản", dom: ["Chuẩn bị dữ liệu cho ML", "Phát triển mô hình", "Triển khai và điều phối workflow ML", "Giám sát, bảo trì và bảo mật giải pháp ML"] },
    SAP: { lv: "p", c: 1, code: "SAP-C02", name: "Solutions Architect – Professional", min: 180, q: 75, fee: 300, pass: 750, wk: [10, 14],
      desc: "Thiết kế giải pháp phức tạp cho tổ chức lớn: nhiều tài khoản, di chuyển hệ thống cũ, cải tiến liên tục.",
      pre: "Nên có SAA và 2 năm kinh nghiệm trở lên", dom: ["Giải pháp cho tổ chức phức tạp", "Thiết kế giải pháp mới", "Cải tiến liên tục giải pháp hiện có", "Di chuyển và hiện đại hóa workload"] },
    DOP: { lv: "p", c: 2, code: "DOP-C02", name: "DevOps Engineer – Professional", min: 180, q: 75, fee: 300, pass: 750, wk: [10, 12],
      desc: "Tự động hóa vòng đời phần mềm, hạ tầng dạng mã và vận hành hệ thống quy mô lớn.",
      pre: "Nên có DVA hoặc SOA", dom: ["Tự động hóa SDLC", "Cấu hình và hạ tầng dạng mã (IaC)", "Hệ thống có khả năng phục hồi", "Giám sát và ghi log", "Ứng phó sự cố", "Bảo mật và tuân thủ"] },
    AIP: { lv: "p", c: 5, code: "AIP-C01", name: "Generative AI Developer – Professional", min: 180, q: 75, fee: 300, pass: 750, wk: [8, 12], isNew: true,
      desc: "Xây ứng dụng AI tạo sinh dùng được trong sản phẩm thật: RAG, agent, đánh giá và tối ưu với Amazon Bedrock.",
      pre: "Nên có AIF hoặc MLA và kinh nghiệm lập trình", dom: ["Thiết kế giải pháp AI tạo sinh", "Tích hợp foundation model, RAG và agent", "An toàn, bảo mật và quản trị AI", "Đánh giá, giám sát và tối ưu chi phí"] },
    ANS: { lv: "s", c: 1, code: "ANS-C01", name: "Advanced Networking – Specialty", min: 170, q: 65, fee: 300, pass: 750, wk: [8, 12],
      desc: "Thiết kế và vận hành mạng phức tạp: hybrid cloud, VPC quy mô lớn, Direct Connect, Transit Gateway.",
      pre: "Nên có SAA và kiến thức mạng vững", dom: ["Thiết kế mạng", "Triển khai mạng", "Quản lý và vận hành mạng", "Bảo mật, tuân thủ và quản trị mạng"] },
    SCS: { lv: "s", c: 3, code: "SCS-C03", name: "Security – Specialty", min: 170, q: 65, fee: 300, pass: 750, wk: [8, 10],
      desc: "Bảo mật hệ thống AWS: IAM, mã hóa, phát hiện mối đe dọa và ứng phó sự cố.",
      pre: "Nên có một chứng chỉ Associate", dom: ["Phát hiện mối đe dọa và ứng phó sự cố", "Giám sát và ghi log bảo mật", "Bảo mật hạ tầng", "Quản lý danh tính và truy cập (IAM)", "Bảo vệ dữ liệu", "Quản trị bảo mật"] }
  };

  const TRACKS = [
    { id: "architect", name: "Kiến trúc sư giải pháp",
      desc: "Lộ trình của khóa học này. Phù hợp nếu bạn thiết kế hệ thống hoặc muốn làm Cloud Architect.",
      steps: [["CLF", "Có thể bỏ qua nếu bạn đã dùng AWS vài tháng."], ["SAA", "Trọng tâm của lộ trình và của khóa học này. Học kỹ VPC, IAM, S3, EC2, RDS và các mẫu kiến trúc."], ["SAP", "Câu hỏi dài, nhiều tình huống. Luyện đọc nhanh và loại trừ đáp án."]],
      opt: [["ANS", "Thêm vào nếu bạn làm nhiều với mạng hybrid."]] },
    { id: "devops", name: "Developer → DevOps",
      desc: "Cho lập trình viên muốn tự triển khai, vận hành và tự động hóa ứng dụng.",
      steps: [["CLF", "Có thể bỏ qua nếu đã quen AWS."], ["DVA", "Viết code thật với Lambda, DynamoDB và SDK."], ["SOA", "Bổ sung góc nhìn vận hành: giám sát, sao lưu, tự động hóa."], ["DOP", "Gộp kiến thức DVA và SOA ở quy mô lớn."]] },
    { id: "data", name: "Dữ liệu & AI",
      desc: "Cho người làm dữ liệu, ML hoặc muốn xây ứng dụng AI tạo sinh.",
      steps: [["AIF", "Nắm từ vựng AI/ML và Bedrock trước."], ["DEA", "Dữ liệu sạch là nền của mọi mô hình."], ["MLA", "Huấn luyện và triển khai mô hình với SageMaker."], ["AIP", "Đích đến: đưa ứng dụng AI tạo sinh vào sản phẩm."]] },
    { id: "security", name: "Bảo mật",
      desc: "Cho kỹ sư bảo mật hoặc người phụ trách tuân thủ trên AWS.",
      steps: [["CLF", "Có thể bỏ qua nếu đã quen AWS."], ["SAA", "Hiểu kiến trúc trước khi bảo vệ nó. Khóa học này phủ phần này."], ["SOA", "Giám sát và log là nền của phát hiện sự cố."], ["SCS", "Học sâu IAM policy, KMS, GuardDuty, Security Hub."]] },
    { id: "network", name: "Mạng",
      desc: "Cho kỹ sư mạng chuyển sang cloud hoặc làm hạ tầng hybrid.",
      steps: [["CLF", "Có thể bỏ qua nếu đã quen AWS."], ["SAA", "Học thật chắc VPC, Route 53 và CloudFront (Module 4 của khóa học)."], ["ANS", "Một trong những bài thi khó nhất. Cần thực hành nhiều."]] }
  ];

  const STATUS_LABEL = { none: "Chưa học", learn: "Đang học", done: "Đã đạt" };
  const state = {
    track: store.get("aws-cert-track", "architect"),
    sel: store.get("aws-cert-sel", COURSE),
    status: store.get("aws-cert-status", {})
  };
  if (!TRACKS.some((t) => t.id === state.track)) state.track = "architect";
  if (!CERTS[state.sel]) state.sel = COURSE;
  const curTrack = () => TRACKS.find((t) => t.id === state.track);
  const st = (id) => state.status[id] || (id === COURSE ? "learn" : "none");
  const levelOf = (c) => LEVELS.find((l) => l.k === c.lv);

  function init() {
    if (window.SYLLABUS) $("#aboutLessons").textContent = `${SYLLABUS.length} bài`;
    if (window.MODULES) $("#aboutModules").textContent = `${MODULES.length} module`;

    $("#rmTracks").innerHTML = TRACKS.map((t) => {
      const lo = t.steps.reduce((a, [id]) => a + CERTS[id].wk[0], 0);
      const n = t.steps.length + (t.opt || []).length;
      return `<button class="rm-track" id="tr-${t.id}" data-t="${t.id}" aria-pressed="false">
        <span class="nm">${t.name}</span>
        <span class="mt">${t.steps.length} bước · từ ${lo} tuần</span>
        <span class="ln">${"<i></i>".repeat(n)}</span></button>`;
    }).join("");
    $("#rmTracks").addEventListener("click", (e) => {
      const b = e.target.closest(".rm-track"); if (!b) return;
      state.track = b.dataset.t; store.set("aws-cert-track", state.track);
      state.sel = curTrack().steps.at(-1)[0]; store.set("aws-cert-sel", state.sel);
      render();
    });

    const map = $("#rmMap");
    LEVELS.forEach((L) => {
      const ids = Object.keys(CERTS).filter((id) => CERTS[id].lv === L.k);
      map.insertAdjacentHTML("beforeend", `<div class="rm-tier rm-${L.k}">
        <div class="rm-tl-lbl"><span class="lv">${L.lv}</span><b>${L.name}</b><span>${L.vi}</span></div>
        <div class="rm-cells">${ids.map((id) => { const c = CERTS[id]; return `
          <button class="rm-cert rm-${L.k}" id="cert-${id}" data-id="${id}" style="--c:${c.c}">
            <span class="top"><span class="hex">${id}</span><span class="code">${c.code}${c.isNew ? " · mới" : ""}</span></span>
            <span class="nm">${c.name}</span>
            <span class="meta">${c.min} phút · ${c.q} câu · $${c.fee}</span>
            ${id === COURSE ? `<span class="here">Khóa học này</span>` : ""}
          </button>`; }).join("")}</div></div>`);
    });
    map.addEventListener("click", (e) => {
      const c = e.target.closest(".rm-cert"); if (!c) return;
      state.sel = c.dataset.id; store.set("aws-cert-sel", state.sel); render();
      if (innerWidth <= 1020) $("#rmDetail").scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    render();
    new ResizeObserver(drawLines).observe(map);
    document.fonts && document.fonts.ready.then(drawLines);
  }

  /* đường nối giữa các "ga" của lộ trình đang chọn */
  function drawLines() {
    const map = $("#rmMap"), svg = $("#rmLines"), box = map.getBoundingClientRect(), t = curTrack();
    const pt = (id) => { const r = $(`#cert-${id} .hex`).getBoundingClientRect(); return [r.left - box.left + r.width / 2, r.top - box.top + r.height / 2]; };
    const seg = (a, b, cls) => {
      const [x1, y1] = pt(a), [x2, y2] = pt(b), my = (y1 + y2) / 2;
      return `<path class="${cls}" d="M${x1},${y1} C${x1},${my} ${x2},${my} ${x2},${y2}"/>`;
    };
    const ids = t.steps.map((s) => s[0]);
    let out = "";
    for (let i = 0; i < ids.length - 1; i++) out += seg(ids[i], ids[i + 1], "run");
    (t.opt || []).forEach(([id]) => { out += seg(ids[ids.length - 2] ?? ids[0], id, "opt"); });
    svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
    svg.innerHTML = out;
  }

  function renderDetail() {
    const id = state.sel, c = CERTS[id], L = levelOf(c), s = st(id);
    const d = $("#rmDetail");
    d.className = `rm-detail rm-${c.lv}`;
    d.innerHTML = `<span class="lvchip">${L.name} · ${L.vi}</span>
      <h3>${c.name}</h3>
      <div class="code">${c.code}${c.isNew ? " · chứng chỉ mới" : ""}</div>
      <p>${c.desc}</p>
      <div class="rm-stats">
        <div><span>Thời gian</span><b>${c.min}</b> phút</div>
        <div><span>Số câu</span><b>${c.q}</b> câu</div>
        <div><span>Lệ phí</span><b>$${c.fee}</b> USD</div>
        <div><span>Điểm đạt</span><b>${c.pass}</b>/1000</div>
      </div>
      <div class="kv">
        <div><div class="k">Nên có trước</div>${c.pre}</div>
        <div><div class="k">Thời gian ôn gợi ý</div>${c.wk[0]}–${c.wk[1]} tuần</div>
        <div><div class="k">Các phần thi</div><ul class="doms">${c.dom.map((x) => `<li>${x}</li>`).join("")}</ul></div>
      </div>
      ${id === COURSE ? `<a class="btn rm-go" href="index.html">Học SAA-C03 trong khóa này →</a>` : ""}
      <div class="seg" role="group" aria-label="Trạng thái của bạn">
        ${Object.entries(STATUS_LABEL).map(([k, v]) => `<button id="st-${k}" data-s="${k}" aria-pressed="${s === k}">${v}</button>`).join("")}
      </div>
      ${c.isNew ? `<p class="small">Chứng chỉ mới ra mắt, thông số bài thi có thể khác. Kiểm tra lại trên trang AWS.</p>` : ""}`;
    $(".seg", d).onclick = (e) => {
      const b = e.target.closest("button"); if (!b) return;
      state.status[id] = b.dataset.s; store.set("aws-cert-status", state.status); render();
    };
  }

  function renderPlan() {
    const t = curTrack();
    const rows = [...t.steps.map((s) => [...s, false]), ...(t.opt || []).map((s) => [...s, true])];
    let n = 0;
    $("#rmTimeline").innerHTML = rows.map(([id, tip, opt]) => {
      const c = CERTS[id], L = levelOf(c), s = st(id), mark = opt ? "+" : ++n;
      return `<li class="rm-${c.lv} ${opt ? "opt" : ""} ${s === "done" ? "done" : ""}">
        <span class="dot">${s === "done" ? "✓" : mark}</span>
        <div class="body"><div class="hd"><div><div class="tag">${L.name}${opt ? " · tùy chọn" : ""}${id === COURSE ? " · khóa học này" : ""}</div><h4>${c.name}</h4></div>
        <span class="wk">${c.wk[0]}–${c.wk[1]} tuần</span></div>
        <p class="tip">${tip}</p></div></li>`;
    }).join("");
    const sum = (f) => t.steps.reduce((a, [id]) => a + f(CERTS[id]), 0);
    const done = t.steps.filter(([id]) => st(id) === "done").length;
    $("#rmSum").innerHTML = `<h3>${t.name}</h3><p>${t.desc}</p>
      <div class="tot"><div><b>${Math.round(sum((c) => c.wk[0]) / 4.3)}–${Math.round(sum((c) => c.wk[1]) / 4.3)}</b><span>tháng</span></div>
      <div><b>$${sum((c) => c.fee)}</b><span>tổng lệ phí</span></div>
      <div><b>${done}/${t.steps.length}</b><span>đã đạt</span></div></div>`;
  }

  function render() {
    const t = curTrack(), order = t.steps.map((s) => s[0]), opt = (t.opt || []).map((s) => s[0]);
    $$(".rm-track").forEach((b) => b.setAttribute("aria-pressed", b.dataset.t === t.id));
    Object.keys(CERTS).forEach((id) => {
      const el = $("#cert-" + id), i = order.indexOf(id), s = st(id);
      el.classList.toggle("dim", i < 0 && !opt.includes(id));
      el.classList.toggle("sel", id === state.sel);
      $$(".stepn,.status", el).forEach((x) => x.remove());
      if (i >= 0) el.insertAdjacentHTML("beforeend", `<span class="stepn">${i + 1}</span>`);
      else if (opt.includes(id)) el.insertAdjacentHTML("beforeend", `<span class="stepn opt">+</span>`);
      if (s !== "none") el.insertAdjacentHTML("beforeend", `<span class="status ${s}">${STATUS_LABEL[s]}</span>`);
    });
    renderDetail(); renderPlan(); drawLines();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
