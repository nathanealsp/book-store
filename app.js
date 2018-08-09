const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log('WMF', wmf);

const spans = document.querySelectorAll('#book-list li .name');

spans.forEach(span => {
  span.textContent += ' (book-title)';
  span.nextElementSibling.addEventListener('click', () => {
    // alert(span.textContent);
  });
  // console.log(span.textContent);
  // console.log(span.nextElementSibling);
});

// const btns = document.querySelectorAll('#book-list ul li .delete');

// btns.forEach(buton => {
//   buton.addEventListener('click', e => {
//     // console.log(e);

//     const liTobeRemoved = e.target.parentElement;
//     const parent = liTobeRemoved.parentNode;
//     alert(`${liTobeRemoved.textContent} will be deleted`);
//     return parent.removeChild(liTobeRemoved);
//   });
// });

const list = document.querySelector('#book-list ul');

// DELETING
list.addEventListener('click', e => {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    console.log(li);
    list.removeChild(li);
  }
});

// ADD
const addForm = document.forms['add-book'];
console.log(addForm);
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const { value } = addForm.querySelector('input[type="text"]');
  console.log(value);
});

// CHECKBOX

const checker = document.querySelector('#add-book #hide');
const label = document.querySelector('#add-book label');
console.log(label);
checker.addEventListener('change', () => {
  if (checker.checked) {
    list.style.display = 'none';
    label.textContent = 'Uncheck to show all books';
  } else {
    list.style.display = 'block';
    label.textContent = 'Hide all books';
  }
  console.log('hey');
});
console.log(checker);
