# Пояснювальна записка
![Preview](https://github.com/sholotyuk/pinTask/blob/master/docs/images/Logo.jpg)
### Зміст
1. [Вступ](https://github.com/sholotiuk/pinTask/blob/master/docs/README.md#1-%D0%B2%D1%81%D1%82%D1%83%D0%BF)
2. [Технічне завдання](https://github.com/sholotiuk/pinTask/blob/master/docs/README.md#2-%D1%82%D0%B5%D1%85%D0%BD%D1%96%D1%87%D0%BD%D0%B5-%D0%B7%D0%B0%D0%B2%D0%B4%D0%B0%D0%BD%D0%BD%D1%8F)
3. [Проектування](https://github.com/sholotiuk/pinTask/blob/master/docs/README.md#3-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)
4. [Розробка](https://github.com/sholotiuk/pinTask/blob/master/docs/README.md#4-%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0)
5. [Тестування](https://github.com/sholotiuk/pinTask/blob/master/docs/README.md#5-%D1%82%D0%B5%D1%81%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)
6. [Висновки](https://github.com/sholotiuk/pinTask/blob/master/docs/README.md#6-%D0%B2%D0%B8%D1%81%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8)
7. [Джерела інформації](https://github.com/sholotiuk/pinTask/blob/master/docs/README.md#7-%D0%B4%D0%B6%D0%B5%D1%80%D0%B5%D0%BB%D0%B0-%D1%96%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D1%96%D1%97)

## 1. Вступ
Цей документ є пояснювальною запискою до проекту з курсу ІПЗ та містить опис вимог та процесу розробки рекомендаційної системи.

### 1.1 Мета 
Метою пояснювальної записки є визначення основних вимог до функціональності та експлуатаційної придатності, а також визначення бізнес-правил і можливих технологічних обмежень даного предмета розробки. Для реалізації проекту використовувались наступні технології: JavaScript, HTML, CSS, а також MySQL.

### 1.2. Контекст
Вимоги, які зазначені у цьому документі, є основою технічного завдання проекту.

## 2. Технічне завдання
### 2.1. Загальне завдання
Розробити веб-сайт, що надає користувачу можливість додавати певні задачі і регулювати їх виконання.

### Функціональність
- користувач повинен мати можливість додавати нові задачі в зручному форматі.
- користувач повинен мати можливість бачити час додавання задачі.
- користувач повинен мати можливість позначати виконані задачі.
- користувач повинен мати можливість видаляти задачі.
- користувач повинен мати можливість зберігати задачі.

## 3. Проектування
### 3.1. Діаграма юзкейсів
![](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_user.puml)
## 3.2. Сценарії для користувача
**ID:** UC_1

**НАЗВА:** Додавання нової задачі

**УЧАСНИКИ:** Користувач, система

**ПЕРЕДУМОВИ:** Користувач ввів задачу 

**РЕЗУЛЬТАТ:** Система зберегла задачу

**ВИКЛЮЧНІ СИТУАЦІЇ:**

Відсутні

![IMAGE TITLE](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_11.puml)

**ID:** UC_2

**НАЗВА:** Підтвердження виконання задачі

**УЧАСНИКИ:** Користувач, система

**ПЕРЕДУМОВИ:** Користувач виконав задачу

**РЕЗУЛЬТАТ:** Система зафіксувала виконання

**ВИКЛЮЧНІ СИТУАЦІЇ:**

Відсутні

![IMAGE TITLE](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_22.puml)

**ID:** UC_3

**НАЗВА:** Видалення задачі

**УЧАСНИКИ:** Користувач, система

**ПЕРЕДУМОВИ:** Користувач обрав задачу, яка видалятиметься

**РЕЗУЛЬТАТ:** Система видалила задачу зі списку

**ВИКЛЮЧНІ СИТУАЦІЇ:**

Відсутні

![IMAGE TITLE](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_33.puml)

### 3.3 Проєктування бази даних

В рамках проекту розробляється модель бізнес-об'єктів, ER-модель та реляційна схема.*

#### Модель бізнес-об'єктів
![](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/BEM)

#### ER-модель
![](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/ERM)

#### Реляційна схема
![](https://github.com/sholotyuk/PROJECT-4/blob/master/docs/images/Rel%20scheme.png)

### 3.4 Сервер та інтерфейс
![Результат успішного запуску сервера](https://github.com/sholotiuk/pinTask/blob/master/docs/images/server_started.png)
![Головна сторінка веб-сайту](https://github.com/sholotiuk/pinTask/blob/master/docs/images/interface.jpg)

## 4. Розробка

### 4.1. Основна структура проекту
- Клієнтська частина. Інтерфейс

*Виконав: Соболь Денис*

Спочатку був розроблений прототип, який відображав основний функціонал проекту: кнопки, форми, текстові блоки, зображення і т.д. Тобто спрощена версія кінцевого продукту, що наочно демонструє його призначення.

- Клієнтська частина. Основні функції та налаштування

*Виконав: Кушенко Сергій*

- Серверна частина. База даних, обробка запитів, тестова частина.

*Виконала: Шолотюк Ганна*

Розроблена база даних, яка створює нове поле задачі при додаванні певної задачі користувачем, зберігає її в базі даних.

- Серверна частина. Збір і обробка даних, документація.

*Виконала: Бондар Христина*

### 4.2. Документація
За допомогою jsdoc було розроблено документацію коду. Відповідний код наведено у [файлі](https://github.com/sholotiuk/pinTask/blob/master/src/js/Server/.jsdoc.conf.json).

## 5. Тестування
Тести виконано за допомогою jest
Успішність тестування підтверджується скріншотами:

![IMAGE TITLE](https://github.com/sholotiuk/pinTask/blob/master/docs/images/test_1.png)

![IMAGE TITLE](https://github.com/sholotiuk/pinTask/blob/master/docs/images/test_2.png)

## 6. Висновки
В результаті виконання лабораторних робіт з курсу ІПЗ було розроблено веб-сайт, що повністю відповідає технічному завданню.

## 7. Джерела інформації
- https://jace-dev.herokuapp.com/design/js-talks#/
- https://habr.com/ru/company/ruvds/blog/341348/
- https://jestjs.io/docs/expect
- https://github.com/jsdoc/jsdoc
