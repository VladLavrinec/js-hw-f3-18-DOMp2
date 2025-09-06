// ЗАВДАННЯ 1
// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item. Вийде 'У списку 3 категорії.'.

const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item'); 

console.log(`У списку ${categoryItems.length} категорії.`);

// Для кожного елемента li.item в списку ul#categories, 
// знайде і виведе в консоль текст заголовка елемента 
// (тега h2) і кількість елементів в категорії 
// (всіх вкладених в нього елементів li).

categoryItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul > li').length;
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${elementsCount}`);
});


// ЗАВДАННЯ 2
// Напиши скрипт, 
// який для кожного елемента масиву ingredients 
// створить окремий li, 
// після чого вставить всі li за одну операцію в список ul.ingredients. 
// Для створення DOM-вузлів використовуй document.createElement().

const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];

const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});

ingredientsList.append(...items);

// ЗАВДАННЯ 3
// Використовуй масив об'єктів images для
// створення тегів img 
// вкладених в li. 
// Для створення розмітки використовуй шаблонні 
// рядки і insertAdjacentHTML().

// 1 Всі елементи галереї повинні 
// додаватися в DOM за одну операцію вставки.

// 2 Додай мінімальне оформлення галереї флексбоксами 
// або грід через css-класи.

const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const galleryList = document.querySelector('#gallery');

const galleryMarkup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item"><img src="${url}" alt="${alt}" width="300"></li>`
  )
  .join('');

// Додаємо всі елементи в DOM за одну операцію
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// Додаємо мінімальне оформлення через css-клас
galleryList.style.display = 'flex';
galleryList.style.gap = '16px';
galleryList.style.listStyle = 'none';
galleryList.style.padding = '0';

// Завдання 4

// Лічильник складається зі спана і кнопок, 
// які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue 
// в якій буде зберігається поточне значення лічильника.
// Створи функції increment і decrement для збільшення 
// і зменшення значення лічильника.
// Додай слухачі кліків на кнопки, 
// виклики функцій та оновлення інтерфейсу

let counterValue = 0;
const valueSpan = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueSpan.textContent = counterValue;
});