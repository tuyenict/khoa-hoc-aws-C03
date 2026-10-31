import re, json, sys
src = open(sys.argv[1], encoding='utf-8').read()
start = src.index('\n### ', src.index('| 772 |'))
blocks = re.split(r'\n### ', src[start:])
qs, bad = [], []
for i, b in enumerate(blocks):
    b = b.strip()
    if not b: continue
    lines = b.split('\n')
    title = lines[0].strip()
    body, opts, img = [], [], None
    for ln in lines[1:]:
        m = re.match(r'^- \[([ xX])\] (.*)$', ln)
        if m: opts.append((m.group(2).strip(), m.group(1).lower()=='x')); continue
        if ln.startswith('**[⬆') : continue
        mi = re.match(r'!\[.*?\]\((.*?)\)', ln.strip())
        if mi: img = mi.group(1); continue
        if not opts and ln.strip(): body.append(ln.strip())
    text = title + ('\n' + '\n'.join(body) if body else '')
    if len(opts) < 2 or not any(c for _, c in opts):
        bad.append(title[:80]); continue
    qs.append({'q': text, 'options': [o for o,_ in opts], 'answer': [k for k,(_,c) in enumerate(opts) if c], 'img': img})
print(len(qs), 'parsed;', len(bad), 'bad', file=sys.stderr)
for t in bad: print('  BAD:', t, file=sys.stderr)
json.dump(qs, open(sys.argv[2], 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
