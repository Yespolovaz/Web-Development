def minimun(a, b, c, d):
    return min(min(a, b), min(c, d))

a = list(input().split(' '))
print(minimun(a[0], a[1], a[2], a[3]))