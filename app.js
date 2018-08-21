const books = document.querySelector('#book-list');
console.log(books.parentElement.parentElement);
console.log(books.children);
console.log(books.nextElementSibling);
console.log(books.previousElementSibling);

const hideCheck = document.forms['add-book'];

const hideChack = hideCheck.querySelector('input[type="checkbox"]');
const label = hideCheck.querySelector('label');
console.log(label);
hideChack.addEventListener('change', e => {
  console.log(e.target.value);
  if (hideChack.checked) {
    books.style.display = 'none';
    label.textContent = 'Show all books';
  } else {
    books.style.display = 'block';
    label.textContent = 'Hide all books';
  }
});
console.log(hideChack);
