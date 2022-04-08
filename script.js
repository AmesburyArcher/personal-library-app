let myLibrary = [];

//Modal functionality
const modal = document.querySelector('#modal');

const addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', addBookInfo);

function addBookInfo() {
    modal.classList.add('active');  
}

const closeModalBtn = document.querySelector('.close-modal')
closeModalBtn.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('active')
};

//Constructor function
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

//Book submition functionality
const submitBookBtn = document.querySelector('.submit-book');
submitBookBtn.addEventListener('click', addBookToLibrary);


function addBookToLibrary(ev) {
    ev.preventDefault();
    // takes in input from users to create a new book object that gets stored in myLibrary array
        let title = document.querySelector('#title-name').value;
        let author = document.querySelector('#author-name').value;
        let pages = document.querySelector('#num-pages').value;
        let read = document.querySelector('#num-pages-read').value

        let book = new Book(title, author, pages, read)
        if(title && author && pages && read) {
            myLibrary.push(book);
             // takes the property values from book object and displays it on the DOM in a book card    
            const bookHolder = document.querySelector('#book-holder');
            const createCard = document.createElement('div');
            const deleteBtn = document.createElement('p');
            const bookTitle = document.createElement('p');
            const bookTitleWrapper = document.createElement('span');
            const bookAuthor = document.createElement('p');
            const bookTotalPages = document.createElement('p');
            const bookPagesRead = document.createElement('p');

            deleteBtn.classList.add('delete-book');
            deleteBtn.textContent = 'x';
            createCard.classList.add('book-card');
            bookTitle.textContent = "Title: ";
            bookTitleWrapper.textContent = title;
            bookAuthor.textContent = "Author: " + author;
            bookTotalPages.textContent = "Total Pages in Book: " + pages;
            bookPagesRead.textContent = "Total Pages Read: " + read;

            bookHolder.appendChild(createCard);
            createCard.appendChild(deleteBtn);
            createCard.appendChild(bookTitle);
            bookTitle.appendChild(bookTitleWrapper);
            createCard.appendChild(bookAuthor);
            createCard.appendChild(bookTotalPages);
            createCard.appendChild(bookPagesRead);

            console.log(myLibrary);
            document.querySelector('.book-info').reset();
            closeModal();
        } else {
            alert('You must enter all fields');
        }

};

// delete book from DOM and myLibrary Array
const libraryDisplay = document.querySelector('#main');
libraryDisplay.addEventListener('click', deleteBook);

function deleteBook(e) {
    if(e.target.matches('.delete-book')) {
        let delBook = e.target.parentNode;
        delBook.remove();
        let bookTitle = e.target.parentNode.children.item(1).children.item(0).textContent;
        let i = myLibrary.map(a => a.title).indexOf(bookTitle);
        myLibrary.splice(i, 1);
    }
}





