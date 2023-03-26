a = set(input().split())
n = int(input())
sups = True

for i in range(n):
    s = set(input().split())
    if not s.issubset(a):
        sups = False
    if len(s) >= len(a):
        sups = False

print(sups)
