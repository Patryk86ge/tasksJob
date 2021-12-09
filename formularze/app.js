const form = document.querySelector(".form__Book");
const taskAdd = document.querySelector(".add__task");

const bookTitle = document.querySelector(".book__title")
const bookTitleValidation = document.querySelector(".book__title-validation");

const authorBook = document.querySelector(".author__Book");
const authorBookValidation = document.querySelector(".author__Book-validation");


const readingPriority = document.querySelector(".reading__priority");
const readingPriorityValidation = document.querySelector(".reading__priority-validation");

const booksSelect = document.querySelector(".books__select");
const booksSelectValidation = document.querySelector(".books__select-validation");

const messageError = document.querySelector(".error-message");
const messageSuccess = document.querySelector(".success-message");


bookTitle.addEventListener("keyup", ({target: {value}}) => {
  updateValidation(bookTitle, bookTitleValidation, value)
});

authorBook.addEventListener("keyup", ({target: {value}}) => {
  updateValidation(authorBook, authorBookValidation, value)
});

readingPriority.addEventListener("keyup", ({target: {value}}) => {
  updateValidation(readingPriority, readingPriorityValidation, value)
});

booksSelect.addEventListener("change", ({target: {value}}) => {
  updateValidation(booksSelect, booksSelectValidation, value)
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isBookTitleValid = !!bookTitle.value;
  const isAuthorBookValid = !!authorBook.value;
  const isReadingPriorityValid = !!readingPriority.value;
  const isBooksSelectValid = !!booksSelect.value;

  if (isBookTitleValid && isAuthorBookValid && isReadingPriorityValid && isBooksSelectValid) {
    alert("wysłano");
    const data = {
      bookTitle: bookTitle.value,
      authorBook: authorBook.value,
      readingPriority: readingPriority.value,
      bookSelect: booksSelect.value,
    }
    taskAdd.innerHTML
    taskAdd.innerHTML = bookTitle.value;
    taskAdd.innerHTML = authorBook.value
    taskAdd.innerHTML = readingPriority.value
    taskAdd.innerHTML = booksSelect.value
    console.log(data);
    // const data = new FormData();
    // //
    // data.append("bookTytle",bookTitle.value);
    // data.append("autorBook",authorBook.value);
    // data.append("ReddingBook",readingPriority.value);
    // data.append("BoobkSelecet",booksSelect.value);
    //
    // for(let el of data){
    //   console.log(el);
    // }


    // console.log(data);

    // const better = new FormData(document.forms[0]);
    // for(let entry of better){
    //   console.log(entry);
    // }
  }else {
    updateValidation(bookTitle, bookTitleValidation, bookTitle.value);
    updateValidation(authorBook, authorBookValidation, authorBook.value);
    updateValidation(readingPriority, readingPriorityValidation, readingPriority.value);
    updateValidation(booksSelect, booksSelectValidation, booksSelect.value);
    alert("Niepoprawne dane");
  }
  form.reset();

})

function updateValidation(el, validationEl, value) {
  if (bookTitle.value.length >= 1) {
    el.style.borderColor = "";
    validationEl.classList.add("hidden");

  }
  if (authorBook.value.length >= 3) {
    el.style.borderColor = "";
    validationEl.classList.add("hidden");
  }
  if (typeof readingPriority === "number" && readingPriority.value.length >= 1 && readingPriority.value.length <= 3) {
    el.style.borderColor = "";
    validationEl.classList.add("hidden");
  }
  if (booksSelect.value) {
    el.style.borderColor = "";
    validationEl.classList.add("hidden");
  }
  else {
    el.style.borderColor = "red";
    validationEl.classList.remove("hidden");
  }
  console.log(value);

}








