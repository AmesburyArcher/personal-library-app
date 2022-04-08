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
        let read = getReadValue();

        let book = new Book(title, author, pages, read)
        if(title && author && pages) {
             // takes the property values from book object and displays it on the DOM in a book card    
            const bookHolder = document.querySelector('#book-holder');
            const createCard = document.createElement('div');
            const deleteBtn = document.createElement('p');
            const bookTitle = document.createElement('p');
            const bookTitleWrapper = document.createElement('span');
            const bookAuthor = document.createElement('p');
            const bookTotalPages = document.createElement('p');
            const bookReadStatus = document.createElement('button');
            bookReadStatus.classList.add('book-read-status');

            deleteBtn.classList.add('delete-book');
            deleteBtn.textContent = 'x';
            createCard.classList.add('book-card');
            bookTitle.textContent = "Title: ";
            bookTitleWrapper.textContent = title;
            bookAuthor.textContent = "Author: " + author;
            bookTotalPages.textContent = "Total Pages in Book: " + pages;

            bookHolder.appendChild(createCard);
            createCard.appendChild(deleteBtn);
            createCard.appendChild(bookTitle);
            bookTitle.appendChild(bookTitleWrapper);
            createCard.appendChild(bookAuthor);
            createCard.appendChild(bookTotalPages);
            createCard.appendChild(bookReadStatus);
            if(book.read === false) {
                bookReadStatus.textContent = 'Not Read';
                bookReadStatus.style.backgroundColor = 'red';
            } else {
                bookReadStatus.textContent = 'Read';
                bookReadStatus.style.backgroundColor = 'green';
            }
            bookReadStatus.addEventListener('click', () => {
                book.read = !book.read;
                if(book.read) {
                    bookReadStatus.textContent = 'Read';
                    bookReadStatus.style.backgroundColor = 'green';
                } else {
                    bookReadStatus.textContent = 'Not Read';
                    bookReadStatus.style.backgroundColor = 'red';
                }
            })

            myLibrary.push(book);
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

// check if book is read from input
function getReadValue() {
    if(document.querySelector('input[type=checkbox]:checked')) return true;
    else return false;
};




