def swap_case(s):
    swapped = ''
    for i in s:
        if i.isupper():
            swapped += i.lower()
        elif i.islower():
            swapped += i.upper()
        else:
            swapped += i
    return swapped

s = input()
result = swap_case(s)
print(result)