// Задание 1
/*Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.*/

class Library {

    #books = []; // Приватное свойство для хранения баланса

    /*constructor(listOfBooks) { //Конструктор для инициализации начального баланса
        if (listOfBooks < 0) {
            throw new Error("Представленный массив содержит дубликат");
        }
        this.#books = listOfBooks;
    }*/

    get allBooks() { // геттер возвращает текущий список книг
        return this.#books;
    };
  
    addBook(title) { // Метод позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
        if (!title) {
            throw new Error("Такая книга уже существует в списке книг");
        }
        this.#books += title;
        return this.#books;
    }

    removeBook(title) { // Метод позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
        if (!title) {
            throw new Error("Книги с таким названием нет в списке");
        }
        this.#books-= title;
        return this.#books;
    }

    hasBook(title) { //метод проверяет наличие книги в библиотеке и возвращает true или false в зависимости от того, есть такая книга в списке или нет.
        if (!title) {
            throw new Error("Такая книга уже существует в списке книг");
        }
        return this.#books;
    }

}

let library = new Library; // Создаем новый банковский счет с начальным балансом 500
console.log(library.books); //Выводит 500

library.addBook();
console.log(library.books); //Выводит 700

library.removeBook();
console.log(library.books); //Выводит 600

library.hasBook();
console.log(library.books)

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

