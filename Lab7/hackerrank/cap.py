#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the solve function below.
def solve(s):
    lr = s.split()
    for i in range(len(lr)):
        lr[i] = lr[i].capitalize()

    cap = ' '.join(lr)

    return cap


s = input()

result = solve(s)

print(result)
