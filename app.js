const books = document.querySelector('#book-list ul');
const addBook = document.forms['add-book'];

console.log(books.parentElement.parentElement);
console.log(books.children);
console.log(books.nextElementSibling);
console.log(books.previousElementSibling);
// ADD BOOK
const input = addBook.querySelector('input[type="text"]');
console.log(input);
addBook.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = input.value;
  input.value = '';
  // NEW ELEMENTS
  const liName = document.createElement('span');
  const liButton = document.createElement('span');
  const li = document.createElement('li');
  liName.classList.add('name');
  liButton.classList.add('delete');
  li.appendChild(liName);
  li.appendChild(liButton);
  liName.textContent = inputValue;
  liButton.textContent = 'delete';
  console.log(inputValue);
  console.log(li);
  books.appendChild(li);
});
// DELETE BOOK
books.addEventListener('click', e => {
  if (e.target.className === 'delete') {
    books.removeChild(e.target.parentElement);
  }
});

// UPDATE BOOK
// HIDE OR SHOW BUTTON
const radioButton = addBook.querySelector('input[type="checkbox"]');
const label = addBook.querySelector('label');
radioButton.addEventListener('change', () => {
  if (radioButton.checked) {
    books.style.display = 'none';
    label.textContent = 'Show all books';
  } else {
    books.style.display = 'block';
    label.textContent = 'Hide all books';
  }
});
console.log(radioButton);
