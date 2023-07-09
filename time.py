from datetime import date
today = date.today()

day = int(input('Введите день: '))
month = int(input('Введите месяц: '))
year = int(input('Введите год: '))

age = today.year - year - ((today.month, today.day) < (month, day))

print(f'Ваш возраст: {age}')


