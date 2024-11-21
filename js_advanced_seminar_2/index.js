// Семинар 2. Продвинутая работа с функциями и классами. Обработка ошибок
// Задание 1
/*Давайте создадим класс для управления банковским счетом. В этом классе будет приватное свойство для хранения текущего баланса, а также методы для внесения и снятия денег со счета.
1. Класс должен содержать приватное свойство #balance, которое инициализируется
значением 0 и представляет собой текущий баланс счета.
2. Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
3. Реализуйте метод deposit(amount), который позволит вносить средства на счет.
Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте
ошибку.
4. Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств; в противном случае выбрасывайте ошибку.
5. Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте
ошибку*/

class BankAccount {
    #balance = 0; // Приватное свойство для хранения баланса
    constructor(balance) { //Конструктор для инициализации начального баланса
        if (balance < 0) {
            throw new Error("Отрицательный баланс для инициализации счета");
        }
        this.#balance = balance;
    }

    get balance() { // Геттер для получения текущего баланса
        return this.#balance;
    };

    /*set balance(balance) { // Сеттер для выставления текущего баланса
        this.#balance = balance; - // с помощью set можно достучаться до this.#balance
    }*/

    deposit(amount) { // Метод для внесения денег на счет
        if (amount <= 0) {
            throw new Error("Сумма депозита должна быть больше нуля");
        }
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) { // Метод для снятия денег со счета
        if (amount <= 0) {
            throw new Error("Сумма для снятия должна быть больше нуля");
        }
        if (this.#balance - amount < 0) {
            throw new Error("Сумма для снятия больше остаток на счете");
        }
        this.#balance -= amount;
        return this.#balance;
    }
}

let account = new BankAccount(500); // Создаем новый банковский счет с начальным балансом 500
console.log(account.balance); //Выводит 500

account.deposit(200);
console.log(account.balance); //Выводит 700

account.withdraw(100);
console.log(account.balance); //Выводит 600

// Задание 2
/*У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум-аккаунте, а некоторые – нет. Ваша задача – создать структуру классов для этих пользователей и функцию для получения информации о
наличии премиум-аккаунта, используя Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
1. Создайте базовый класс User с базовой информацией (например, имя и фамилия).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока
действия), а у RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User и
возвращает информацию о наличии и сроке действия премиум-аккаунта, используя
Опциональную цепочку вызовов методов и оператор нулевого слияния.
4. В функции getAccountInfo используйте instanceof для проверки типа переданного
пользователя и дайте соответствующий ответ. */

class User {
    #name;
    #surname;

    constructor(name, surname) {
        this.#name = name;
        this.#surname = surname;
    }

    get name() {
        return this.#name;
    }

    get surname() {
        return this.#surname;
    };
}

class RegularUser extends User {
    constructor(name, surname) {
        super(name, surname);
    };
}

class PremiumUser extends User {
    constructor(name, surname) {
        super(name, surname);
    };
    premiumAccount = null;
    setPremiumAccount() {
        this.premiumAccount = new Date().setFullYear(new Date().getFullYear) + 1; // Пример: установите срок действия на год вперед
    }
}

// Создать RegularUser 

function getAccountInfo(user) {
    // Премиум-аккаунт действителен до такой-то даты или информация отсутствует
    // Пользователь без премиум-аккаунта
    // Тип пользователя "неопределен"
    if (user instanceof PremiumUser) {
        /*console.log(
            `${new Date(user.premiumAccount).toLocaleDateString()}`?? 'Информация отсутствует', 
            user.name, 
            user.surname
        )*/
        console.log(
            user.premiumAccount ?? 'Информация отсутствует',
            user.name,
            user.surname
        )
    } else if (user instanceof RegularUser) {
        console.log('Пользователь без премиум-аккаунта', user.name, user.surname);
    } else {
        console.log('Тип пользователя неопределен')
    };
}

// Проверка
const regular = new RegularUser('Иван', 'Смирнов');
const premium = new PremiumUser('Алексей', 'Чернышенко');
premium.setPremiumAccount();
const premiumLim = new PremiumUser('Ольга', 'Петрова');

getAccountInfo(regular);
getAccountInfo(premium);
getAccountInfo(premiumLim);

// - задание 2 не работает полнолстью - дата премиум аккуанта не читается


// Задание 3
/*Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру: текстовое поле для ввода числа и кнопку
"Проверить".
2. Добавьте место (например, div) для вывода сообщения пользователю.
3. Напишите функцию, которая будет вызвана при нажатии на кнопку. Эта функция
должна использовать try и catch для проверки вводимого значения*/


/*button.onclick = function checkIsNumber () {
    block.textContent = input.value;
}*/

const comment = document.querySelector('.comment');
const btn = document.querySelector('.btn');
const num = document.querySelector('.num');
btn.addEventListener('click', function (e) {
    try {
        const inputElement = num.value;
        if (isNaN(inputElement)) {
            throw new Error("Это не число");
        }
        comment.textContent = "Молодец!";
    } catch (error) {
        comment.textContent = error.message;
    }
});

/*if (!input.value === Number) {
    try {
        throw new Error('Вы ввели не число');
    }
    catch(err) {
        console.log(err);
    }
}
}*/

