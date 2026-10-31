// Kiểm tra khối dịch .trans trong phần câu hỏi luyện tập.
// Dùng: node tools/check-trans.js [file.html ...]   (mặc định: mọi bài trong lessons/)
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..", "lessons");
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : fs.readdirSync(dir).filter((f) => /^bai-\d+.*\.html$/.test(f)).map((f) => path.join(dir, f));

let bad = 0;
for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  const blocks = html.split(/<div class="q" data-answer="/).slice(1);
  const errs = [];
  blocks.forEach((b, i) => {
    const n = i + 1;
    const ans = b.slice(0, b.indexOf('"')).split(",").map((s) => s.trim());
    const opts = (b.match(/<ol class="opts">([\s\S]*?)<\/ol>/) || [, ""])[1];
    const optKeys = [...opts.matchAll(/<li data-k="([A-Z])"/g)].map((m) => m[1]);
    const t = b.match(/<div class="trans">([\s\S]*?)<\/ul>\s*<\/div>/);
    if (!t) return errs.push(`Câu ${n}: thiếu <div class="trans">`);
    if (b.indexOf('class="explain"') > b.indexOf('class="trans"')) errs.push(`Câu ${n}: .trans phải nằm sau .explain`);
    if (!/<div class="tq">[^<\s]/.test(t[1])) errs.push(`Câu ${n}: thiếu/trống .tq`);
    const lis = [...t[1].matchAll(/<li data-k="([A-Z])">([\s\S]*?)<\/li>/g)];
    const tKeys = lis.map((m) => m[1]);
    if (tKeys.join() !== optKeys.join()) errs.push(`Câu ${n}: topts [${tKeys}] ≠ opts [${optKeys}]`);
    lis.forEach(([, k, body]) => {
      if (!/<span class="tv">[\s\S]*\S[\s\S]*<\/span>/.test(body)) errs.push(`Câu ${n}${k}: thiếu .tv`);
      const why = (body.match(/<span class="why">\s*(Đúng|Sai):/) || [])[1];
      if (!why) errs.push(`Câu ${n}${k}: .why phải bắt đầu bằng "Đúng:" hoặc "Sai:"`);
      else if ((why === "Đúng") !== ans.includes(k)) errs.push(`Câu ${n}${k}: .why ghi "${why}" nhưng data-answer="${ans}"`);
    });
  });
  if (!blocks.length) errs.push("không tìm thấy câu hỏi");
  const name = path.basename(f);
  if (errs.length) { bad++; console.log(`✗ ${name}\n  - ` + errs.join("\n  - ")); }
  else console.log(`✓ ${name} (${blocks.length} câu)`);
}
console.log(bad ? `\n${bad}/${files.length} file lỗi` : `\nOK ${files.length}/${files.length} file`);
process.exit(bad ? 1 : 0);
