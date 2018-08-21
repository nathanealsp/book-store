const books = document.querySelector('#book-list ul');
const hideCheck = document.forms['add-book'];
console.log(books.parentElement.parentElement);
console.log(books.children);
console.log(books.nextElementSibling);
console.log(books.previousElementSibling);
// ADD BOOK
// DELETE BOOK
books.addEventListener('click', e => {
  if (e.target.className === 'delete') {
    books.removeChild(e.target.parentElement);
  }
});

// UPDATE BOOK
// HIDE OR SHOW BUTTON
const radioButton = hideCheck.querySelector('input[type="checkbox"]');
const label = hideCheck.querySelector('label');
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
