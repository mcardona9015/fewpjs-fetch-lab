  
  function fetchBooks() {
    fetch('https://anapioficeandfire.com/api/books')
    .then(resp => resp.json())
    .then(json => {renderBooks(json)});
  }

let booksArray
function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })

  booksArray = books
}
// renderBooks(books)

document.addEventListener('DOMContentLoaded', function() {
  

  fetchBooks()
  setTimeout(() => {console.log(booksArray)}, 1000)

  
})


