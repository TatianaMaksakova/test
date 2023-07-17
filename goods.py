# Вывести на экран таблицу из 4 строк:
# три товара и сумма без использования цикла

goods = {
    'гречка': 78,
    'лук': 15,
    'морковка': 40
}

left_col = 10
right_col = 5



summa = 0
print('+' + '-' * left_col + '+' + '-' * right_col + '+')
for tovar in goods:  # Питон перебирает словарь по ключу

    # Двойная подстановка!
    template = '|%%(name)%(size)ss' % {'size': left_col}
#    print('template = ', template)
    print(template % {'name': tovar} + '|', end='')

    template = '%%(price)%(size)si' % {'size': right_col}
    print(template % {'price': goods[tovar]} + '|')
    print('+' + '-' * left_col + '+' + '-' * right_col + '+')
    summa += goods[tovar]




print('| Итог     |' + str(
     summa
    ) + '|')
print('+' + '-' * left_col + '+' + '-' * left_col + '+')
