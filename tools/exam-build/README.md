# Build dữ liệu thi thử (exam.html)

Nguồn:
- `official.json` — 10 câu chép từ [AWS SAA-C03 Sample Exam Questions](https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS-Certified-Solutions-Architect-Associate_Sample-Questions.pdf), kèm giải thích chính thức.
- `raw.json` — 772 câu parse từ README của [Ditectrev SAA-C03](https://github.com/Ditectrev/AWS-Certified-Solutions-Architect-Associate-SAA-C03-Practice-Tests-Exams-Questions-Answers) (`parse.py`).

Các bước:

```sh
# (tuỳ chọn) lấy lại bản mới của Ditectrev
curl -sL -o ditectrev.md https://raw.githubusercontent.com/Ditectrev/AWS-Certified-Solutions-Architect-Associate-SAA-C03-Practice-Tests-Exams-Questions-Answers/main/README.md
python -I parse.py ditectrev.md raw.json
python -I dedupe.py raw.json          # liệt kê cặp câu gần giống → cập nhật DUP_DROP trong build.py
python -I build.py raw.json official.json authored.json ../../assets/syllabus.js ../../assets/exams-data.js
```

- `authored.json` — câu tình huống soạn mới cho các bài mà ngân hàng cộng đồng thiếu; mỗi câu có `d` (domain), `l` (bài học), `exp` (giải thích tiếng Việt).

`build.py` loại câu trùng (`DUP_DROP` + so khớp lại toàn bộ), câu lỗi thời (`OUTDATED`, `DROP`) và câu thuộc lòng / Yes-No / < 4 đáp án
(chỉ giữ câu dạng tình huống như SAA-C03), sửa đáp án sai có ghi lý do (`ANSWER_FIX`), gắn bài học + domain cho từng câu,
rồi chia N đề × 65 câu (N = tổng số câu // 65) với seed cố định. Mỗi đề đúng tỷ lệ domain D1 20 / D2 17 / D3 15 / D4 13 câu
(30/26/24/20%), câu trong mỗi domain xen kẽ theo bài học; có assert kiểm tra tỷ lệ và không câu nào lặp giữa các đề.
