let myLibrary = [];

const modal = document.querySelector('#modal');

const addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', addBookInfo);

function addBookInfo() {
    modal.classList.add('active');  
}

const closeModal = document.querySelector('.close-modal')
closeModal.addEventListener('click', function() {
    modal.classList.remove('active')
});

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

const submitBookBtn = document.querySelector('.submit-book');
submitBookBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(ev) {
    ev.preventDefault();
        let title = document.querySelector('#title-name').value;
        let author = document.querySelector('#author-name').value;
        let pages = document.querySelector('#num-pages').value;
        let read = document.querySelector('#num-pages-read').value

        let book = new Book(title, author, pages, read)
        myLibrary.push(book);
        console.log(myLibrary);

};

