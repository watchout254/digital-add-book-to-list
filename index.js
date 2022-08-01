class book{
    constructor(title, author,isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBooktoList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML = '';
        
        <td>${book.title</td>
        <td>${book.author</td>
        <td>${book.isbn</td>
        <td <a> href = "" class = "delete"> X </a> </td>
        
    }
}

document.getElementById(book).addEventListener('submit', function(e) {
    const title = document.getElementById('title').value ;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new book(title, author, isbn);

    const ui = new UI();


    if(title === '' || author === '' || isbn === '') {
        ui.showAlert('Kindly fill in the required fields!!!', 'error');
    }

    else {
        ui.addBooktoList(book);

        ui.showAlert('Book added successfully', 'success');
    }

}