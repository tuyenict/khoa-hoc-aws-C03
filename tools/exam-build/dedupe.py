import json, re, sys
from difflib import SequenceMatcher
qs = json.load(open(sys.argv[1], encoding='utf-8'))
def norm(s): return re.sub(r'[^a-z0-9 ]', '', re.sub(r'\s+', ' ', s.lower())).strip()
def toks(s): return set(norm(s).split())
for q in qs:
    q['_n'] = norm(q['q']); q['_t'] = toks(q['q'] + ' ' + ' '.join(q['options']))
    q['_o'] = set(norm(o) for o in q['options'])
pairs = []
for i in range(len(qs)):
    for j in range(i+1, len(qs)):
        a, b = qs[i], qs[j]
        jac = len(a['_t'] & b['_t']) / max(1, len(a['_t'] | b['_t']))
        if jac < 0.5: continue
        r = SequenceMatcher(None, a['_n'], b['_n']).ratio()
        if r > 0.8 or jac > 0.75:
            pairs.append((i, j, round(r,2), round(jac,2), a['_o']==b['_o'], sorted(a['answer'])==sorted(b['answer'])))
print(len(pairs), 'similar pairs')
for p in pairs: print(p, '|', qs[p[0]]['q'][:90].replace('\n',' '), '||', qs[p[1]]['q'][:90].replace('\n',' '))
