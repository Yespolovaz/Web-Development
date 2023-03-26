n = int(input())
for i in range(n):
    a, b = input().split()
    try:
        a = int(a)
        b = int(b)
        print (a//b)
    except ZeroDivisionError as z:
        print ("Error Code:",z)
    except ValueError as v:
        print ("Error Code:",v) 