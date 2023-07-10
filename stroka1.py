my_list = [1, 2, 3, 4, 5]
for i in my_list:
    if i != my_list[len(my_list) - 1]:
        print(f'{i},')
    else:
        print(i)