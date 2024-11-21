// Задание 1
/*Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.*/

class Library {

    #books = []; // Приватное свойство, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

    constructor(initialBooks = []) { // Конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку
        let uniqueBooks = new Set(initialBooks);
        if (uniqueBooks.size !== initialBooks.length) {
            throw new Error("Представленный массив содержит дубликат");
        }
        this.#books = [...uniqueBooks];
    }

    get allBooks() { // геттер возвращает текущий список книг
        return this.#books;
    };

    addBook(title) { // Метод позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
        if (this.#books.includes(title)) {
            throw new Error(`Такая книга ${title} уже существует в списке книг`);
        }
        this.#books.push(title);
    }

    removeBook(title) { // Метод позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
        if (!this.#books.includes(title)) {
            throw new Error(`Книги с таким названием ${title} нет в списке`);
        }
        this.#books.splice(this.#books.indexOf(title), 1);
    }

    hasBook(title) { //метод проверяет наличие книги в библиотеке и возвращает true или false в зависимости от того, есть такая книга в списке или нет.
        return this.#books.includes(title);
    }
}

// Проверка
let library = new Library(); // Создаем новую библиотеку
console.log(library.allBooks); //Выводим список книг в библиотеке

library.addBook("Варенье из одуванчиков");
library.addBook("Сто лет одиночества");
library.addBook("На западном фронте без перемен");
library.addBook("О, дивный новый мир");
console.log(library.allBooks); //Выводит список добавленных книг

// Добавляем существующую книгу
try {
    library.addBook("О, дивный новый мир");  //Выдает ошибку
} catch (error) {
    console.log(error);
}

// Проверяем наличие книги
console.log(library.hasBook("Воскресенье")); // false
console.log(library.hasBook("Сто лет одиночества")); // true


// Удаляем книгу по названию
library.removeBook("Варенье из одуванчиков");
console.log(library.allBooks); //Выводит список книг без книги, которую мы удалили

// Удаляем несуществующую книгу
try {
    library.removeBook("Ревизор");  // Выдает ошибку, книги не существет
} catch (error) {
    console.log(error);
}


// Задание 2
/*Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.*/

const reviewFormEl = document.getElementById('review-form');
console.log(reviewFormEl);
const errorBoxEl = document.querySelector('.error-box');
console.log(errorBoxEl);
const reviewBoxEl = document.querySelector('.review-box');
console.log(reviewBoxEl);
const buttonEl = document.querySelector('.btn');
console.log(buttonEl);
const inputElement = document.querySelector('input[type="text"]');
console.log(inputElement);

buttonEl.addEventListener('click', function (e) {



    // проверка длины отзыва
    try {
        if (inputElement.length < 50 || inputElement.length > 500) {
            throw new Error("Длина отзыва должна составлять не менее 50 или не более 500 символов!");
        }
        errorBoxEl.textContent = "Молодец! Вы соблюдате правила написания отзыва";
    }
    catch (error) {
        errorBoxEl.textContent = error.message;
    }
});

// добавляем новые отзывы
function addReviews(review) {
    reviews.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('review-container');
        div.innerHTML =
        `
            <p class="review-text>${review.text}</p>
        `;
        reviewBoxEl.appendChild(div);
    });
}





const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

