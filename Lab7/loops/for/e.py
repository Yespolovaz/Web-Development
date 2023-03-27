x = int(input())
n = str(x)
s = 0

for i in range(len(n)+1):
    t = x%10
    s += t
    x //= 10
print(s)