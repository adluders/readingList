/**
 * Goal--User should be able to add book on form submit and remove book on click of x
 * User needs to be able to create a NEW book
 * Created book should come with an event that allows the user to remove it
 *
 * When submitted, create a new li with the usual classes
 * user should see an alert either confirming or informing whether a book was added
 * append that new ul to the booklist div
 */

const booklist = document.getElementsByClassName("booklist");
const bookForm = document.getElementById("book-form");
const removeBtn = document.querySelectorAll(".close-btn");
const alert = document.querySelector(".alert");

removeBtn.forEach((btn) => console.log(btn));
// Hide Alert mssg on load
alert.style.display = "none";

function createBook(e) {
  e.preventDefault();

  // Create a book UL
  const generatedBook = document.createElement("ul");
  generatedBook.classList.add("book-info", "book-detail");

  // Get Inputs
  const titleInput = document.getElementById("title"),
    authorInput = document.getElementById("author"),
    bookID = document.getElementById("book-id");

  // Create a Book Info
  let bookTitle = document.createElement("li");
  let bookAuthor = document.createElement("li");
  let bookIsbn = document.createElement("li");
  let closeBtn = document.createElement("li");
  bookTitle.classList.add("title");
  bookAuthor.classList.add("author");
  bookIsbn.classList.add("isbn");
  closeBtn.classList.add("close-btn");

  // Update Book info ul
  bookTitle.innerHTML = titleInput.value;
  bookAuthor.innerHTML = authorInput.value;
  bookIsbn.innerHTML = bookID.value;
  closeBtn.innerHTML = "X";

  // Store book deatils in array
  const bookInfo = [bookTitle, bookAuthor, bookIsbn, closeBtn];

  // create li node for each book detail
  bookInfo.forEach((info) => generatedBook.appendChild(info));

  // Add each new ul to book list div
  booklist[0].append(generatedBook);

  // Reset inputs value
  titleInput.value = "";
  authorInput.value = "";
  bookID.value = "";

  // Display alert
  alert.style.display = "block";

  // remove Alert
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
}

bookForm.addEventListener("submit", createBook);
