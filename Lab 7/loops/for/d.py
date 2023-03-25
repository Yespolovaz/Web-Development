n = int(input())
k = int(input())
fn = 1
fk = 1
fnk = 1

for i in range(1, n+1):
    fn *= i
for i in range(1, k+1):
    fk *= i
for i in range(1, n-k+1):
    fnk *= i

print(int(fn/(fk * fnk)))