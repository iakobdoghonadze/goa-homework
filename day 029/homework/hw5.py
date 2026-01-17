import time

def countdown(t):
    while t:
        print(t)
        time.sleep(1)
        t -= 1
    print('0')

t = int(input("Enter the time in seconds: "))
countdown(t)
