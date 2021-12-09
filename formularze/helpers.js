// form.addEventListener("submit", e => {
//   e.preventDefault();
//   const formErrors = [];
//   //sprawdzamy pola
//   if(bookTitle.value.length < 1) {
//     formErrors.push("tytul ksiazki powienien posaidac min 1 znak");
//
//   }
//   if(authorBook.value.length < 3) {
//     formErrors.push("Autor ksiazki powienien posaidac min 3 znak");
//   }
//   if(readingPriority.value.length < 1 && readingPriority.value.length > 5) {
//     formErrors.push("musisz wybrac od 1 do 5");
//   }
//   if (booksSelect.change) {
//     formErrors.push("Musisz wybrac Ksiazke");
//   }
//   if (formErrors.length) {
//     //bledy
//     messageError.classList.remove("d-none");
//     messageSuccess.classList.add("d-none");
//     messageError.innerHTML = formErrors.join("<br>");
//   } else {
//     messageError.classList.add("d-none");
//     messageSuccess.classList.remove("d-none");
//     messageSuccess.textContent = "Formularz wysłany pozytywnie";
//     //form.submit();
//   }
// })


// html :
//   <div className="error-message d-none">
//   </div>
// <div className="success-message d-none">
// </div>