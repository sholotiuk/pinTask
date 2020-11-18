# Модель прецедентів

## ФУНКЦІОНАЛЬНІСТЬ
Система керування проектами сталої якості.
Основні процеси.
 ![](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_8.puml)
 
 ## Сценарій створення плану проекту
 
**Package:** UCD_1.0

**ID:** UC_1

**Назва:** Створення проекту

**Учасники:** Менеджер, Система

**Передумови:** План проекту не створений

**Результат:** План проекту створений

**Виключні ситуації:** Відсутні

**Основний сценарій:**

![IMAGE TITLE](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_1.puml)
 
### Сценарій запуску проекту

**Package:** UCD_1.0

**ID:** UC_2

**Назва:** Запуск проекту

**Учасники:** Менеджер, Система

**Передумови:** Проект не ініціалізовано

**Результат:** Генерація завдань та їх збереження

**Виключні ситуації:** Відсутні

**Основний сценарій:**

![IMAGE TITLE](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_2.puml)

### Сценарій отримання завдання

**Package:** UCD_1.0

**ID:** UC_3

**Назва:** Отримання задачі

**Учасники:** Робітник, Система

**Передумови:** Робітник не мав задачі

**Результат:** Робітник має задачу

**Виключні ситуації:** Відсутні

**Основний сценарій:**

 ![](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_3.puml)
 
### Сценарій передачі результату роботи

**Package:** UCD_1.0

**ID:** UC_4

**Назва:** Передача результату роботи проекту

**Учасники:** Робітник, Система

**Передумови:** Виконана задача робітником

**Результат:** Подальша перевірка

**Виключні ситуації:** Відсутні

**Основний сценарій:**

 ![](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_4.puml)
 
### Сценарій виконання завдання

**Package:** UCD_1.0

**ID:** UC_5

**Назва:** Виконання задачі

**Учасники:** Тестувальник, Система

**Передумови:** Виконання задачі

**Результат:** Перевірка виконання пройдена

**Виключні ситуації:** EX_1 Обробка помилок

**Основний сценарій:**

 ![](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_5.puml)
 
### Сценарії обробки помилок

**Package:** UCD_1.0

**ID:** UC_6

**Назва:** Обробка помилок

**Учасники:** Тестувальник, Система

**Передумови:** Виникли помилки

**Результат:** Помилки усунено

**Виключні ситуації:** EX_2 Інший сценарій вирішення

**Основний сценарій:**

 ![](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_6.puml)
 
**Package:** UCD_1.0

**ID:** UC_7

**Назва:** Обробка помилок

**Учасники:** Менеджер, Система

**Передумови:** Виникли помилки

**Результат:** Помилки усунено

**Виключні ситуації:** Відсутні

**Основний сценарій:**

 ![](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/sholotyuk/pinTask/master/src/uml/UC_7.puml)





