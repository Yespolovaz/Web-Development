x = int(input())
n = str(x)
rev = ''

for i in range(len(n)):
    t = x%10
    if t != 0 or len(rev) > 0:
        rev += str(t)
    x //= 10

print(rev)