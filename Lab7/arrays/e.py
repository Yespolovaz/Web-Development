a = list(input().split(' '))

for i in range(len(a) - 1):
    if int(a[i]) * int(a[i+1]) > 0:
        print(a[i], a[i+1])
        break