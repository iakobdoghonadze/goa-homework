def even_odd(num):
    if (num % 2) == 0:
        print("{0} is Even".format(num))
    else:
        print("{0} is Odd".format(num))

num = int(input("Enter a number: "))
even_odd(num)
