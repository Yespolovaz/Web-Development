n = int(input())
p = 1
i = 1
while p <= n:
    print(p, end = ' ')
    p = 2 ** i
    i += 1