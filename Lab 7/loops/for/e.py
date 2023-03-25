import math

a = int(input())
n = int(input())
s = 0
for i in range(n+1):
    s += pow(a, i)
print(s)