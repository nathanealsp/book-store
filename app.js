const books = document.querySelector('#book-list ul');
const addBook = document.forms['add-book'];

// ADD BOOK
const input = addBook.querySelector('input[type="text"]');
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
  // APPENDING CHILD
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

// TABBED CONTENT
const panels = document.querySelectorAll('.panel');
const tabs = document.querySelector('.tabs');
tabs.addEventListener('click', e => {
  const targetPanel = document.querySelector(e.target.dataset.target);
  if (e.target.tagName === 'LI') {
    panels.forEach(panel => {
      if (panel === targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }
});

// SEARCH INPUT
const searchForm = document.forms['search-books'];
const searchInput = searchForm.querySelector('input');
const searchBooks = document.querySelectorAll('#book-list li');

searchInput.addEventListener('keyup', e => {
  const needle = e.target.value.toLowerCase();
  searchBooks.forEach(book => {
    const bookTitle = book.querySelector('.name').textContent.toLowerCase();
    if (bookTitle.indexOf(needle) !== -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});
