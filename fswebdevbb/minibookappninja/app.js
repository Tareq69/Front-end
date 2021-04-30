
// var titles = document.getElementsByClassName('title')
// console.log(titles)

// titlesArr = Array.from(titles)

// titlesArr.forEach(function (item) {
//         console.log(item)
// })

// console.log(Array.isArray(titlesArr))

const books = document.querySelectorAll('#book-list li .name')

console.log(books)

booksArr = Array.from(books)

booksArr.forEach(function (item) {
       //item.textContent += ' (book title)'
})

let booklist = document.querySelector('#book-list')
booklist.innerHTML += "<p>This is how we add an element</p>"