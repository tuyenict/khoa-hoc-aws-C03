// Kiểm tra trang trò chơi ghi nhớ games/<file bài>.html (định dạng DECK: xem assets/games.js).
// Dùng: node tools/check-games.js [games/bai-xx-....html ...]   (mặc định: mọi file trong games/)
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const dir = path.join(root, "games");
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(dir).filter((f) => /^bai-\d+.*\.html$/.test(f)).map((f) => path.join(dir, f));
const MIN = { cards: 40, pairs: 15, sorts: 3, sortItems: 6, tf: 25, branches: 5, mapValues: 25 };

let bad = 0;
for (const f of files) {
  const name = path.basename(f), errs = [];
  const html = fs.readFileSync(f, "utf8");
  const id = Number((html.match(/data-lesson="(\d+)"/) || [])[1]);
  if (!fs.existsSync(path.join(root, "lessons", name))) errs.push(`không có bài học cùng tên lessons/${name}`);
  if (!/data-page="games"/.test(html) || !/data-root="\.\."/.test(html)) errs.push('body phải có data-page="games" data-root=".."');
  for (const s of ["../assets/style.css", "../assets/games.css", "../assets/syllabus.js", "../assets/app.js", "../assets/games.js"])
    if (!html.includes(s)) errs.push(`thiếu ${s}`);
  const m = html.match(/<script>\s*(window\.DECK\s*=[\s\S]*?)<\/script>/);
  let D;
  if (!m) errs.push("không tìm thấy <script> window.DECK = {...} </script>");
  else {
    try { const ctx = { window: {} }; vm.runInNewContext(m[1], ctx); D = ctx.window.DECK; }
    catch (e) { errs.push("lỗi cú pháp DECK: " + e.message); }
  }
  if (D) {
    const topics = new Set((D.topics || []).map((t) => t.id));
    if (!topics.size) errs.push("thiếu topics");
    const cards = D.cards || [];
    if (cards.length < MIN.cards) errs.push(`cards ${cards.length} < ${MIN.cards}`);
    cards.forEach((c, i) => {
      if (!topics.has(c.t)) errs.push(`card ${i + 1}: topic "${c.t}" không có trong topics`);
      if (!c.f || !c.b) errs.push(`card ${i + 1}: thiếu f hoặc b`);
    });
    const fr = cards.map((c) => c.f);
    if (fr.length !== new Set(fr).size) errs.push("có thẻ trùng mặt trước (f) – tiến độ lưu theo f nên phải khác nhau");
    for (const t of topics) if (!cards.some((c) => c.t === t)) errs.push(`topic "${t}" không có thẻ nào`);
    const pairs = D.pairs || [];
    if (pairs.length < MIN.pairs) errs.push(`pairs ${pairs.length} < ${MIN.pairs}`);
    pairs.forEach((p, i) => { if (!Array.isArray(p) || p.length !== 2 || !p[0] || !p[1]) errs.push(`pair ${i + 1} phải là ["thuật ngữ", "nghĩa"]`); });
    const sorts = D.sorts || [];
    if (sorts.length < MIN.sorts) errs.push(`sorts ${sorts.length} < ${MIN.sorts}`);
    sorts.forEach((s, i) => {
      if (!s.title || !Array.isArray(s.buckets) || s.buckets.length < 2) errs.push(`sort ${i + 1}: cần title và ≥ 2 buckets`);
      if ((s.items || []).length < MIN.sortItems) errs.push(`sort ${i + 1}: items < ${MIN.sortItems}`);
      (s.items || []).forEach((it, k) => {
        if (!Number.isInteger(it[1]) || it[1] < 0 || it[1] >= (s.buckets || []).length) errs.push(`sort ${i + 1} item ${k + 1}: chỉ số nhóm ${it[1]} không hợp lệ`);
      });
      (s.buckets || []).forEach((b, j) => { if (!(s.items || []).some((it) => it[1] === j)) errs.push(`sort ${i + 1}: nhóm "${b}" không có thẻ nào`); });
    });
    const tf = D.tf || [];
    if (tf.length < MIN.tf) errs.push(`tf ${tf.length} < ${MIN.tf}`);
    tf.forEach((q, i) => { if (typeof q[1] !== "boolean" || !q[0] || !q[2]) errs.push(`tf ${i + 1} phải là ["mệnh đề", true|false, "giải thích"]`); });
    const nT = tf.filter((q) => q[1] === true).length;
    if (tf.length && (nT < tf.length * 0.3 || nT > tf.length * 0.7)) errs.push(`tf mất cân bằng: ${nT} đúng / ${tf.length - nT} sai (nên 30–70% đúng)`);
    const map = D.map || {};
    if (!map.t || (map.c || []).length < MIN.branches) errs.push(`map cần t và ≥ ${MIN.branches} nhánh`);
    let vals = 0;
    (function walk(n) { if (n.v) vals++; (n.c || []).forEach(walk); })(map);
    if (vals < MIN.mapValues) errs.push(`map có ${vals} ý (v) < ${MIN.mapValues}`);
    (map.c || []).forEach((b) => { if (b.icon && !fs.existsSync(path.join(root, "assets/icons", b.icon))) errs.push(`icon không tồn tại: ${b.icon}`); });
    if (/<\/script/i.test(m[1].slice(0, -1))) errs.push("DECK không được chứa chuỗi </script");
    if (!errs.length) console.log(`✓ ${name} (bài ${id}: ${cards.length} thẻ, ${pairs.length} cặp, ${sorts.length} phân loại, ${tf.length} Đúng/Sai, ${vals} ý bản đồ)`);
  }
  if (errs.length) { bad++; console.log(`✗ ${name}\n  - ` + errs.join("\n  - ")); }
}
console.log(bad ? `\n${bad}/${files.length} file lỗi` : `\nOK ${files.length}/${files.length} file`);
process.exit(bad ? 1 : 0);
