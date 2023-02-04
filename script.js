"use strict"
class Book {
    constructor(title, year, author) {
        this.title = title;
        this.year = year;
        this.author = author
    }
}

const books = [
  new Book("Joko Sulistyo Pramono", 27, 100000),
  new Book("Siti Maemunah", 32, 300000),
  new Book("Budi Harjo Santoso", 26, 999999),
]

function getAvgYear(books) {
    let sum = 0;
    for (const book of books) {
        sum += book.year;
    }
    return sum / books.length;
}

function getAvgSangu(books) {
    let sum = 0;
    for (const book of books) {
        sum += book.author;
    }
    return sum / books.length;
}

window.addEventListener("load", (event) => {

    console.log("page is fully loaded");
    const submitButton = document.getElementById("submit-button")
    const tableData = document.getElementById("table-data")
    const resumeUmur = document.getElementById("resume-umur")
    const resumeSangu = document.getElementById("resume-sangu")
    populateData(tableData)
    resumeUmur.innerHTML = `Rata rata umur ${getAvgYear(books).toFixed(2)}`;
    resumeSangu.innerHTML = `Rata rata Uang Sangu ${getAvgSangu(books).toFixed(2)}`;

    const titleElement = document.getElementById("input-title")
    const yearElement = document.getElementById("input-year")
    const authorElement = document.getElementById("input-author")
    submitButton.addEventListener("click", (e) => {
        e.preventDefault();
        const title = titleElement.value;
        const year = +(yearElement.value);
        const author = +(authorElement.value);
        
        const {isValid, message} = inputValidation(title, year, author)

        if(isValid) {
            const newBook = new Book(title, year, author)
            
            books.push(newBook)
            
            // Reset table data and populate
    
            tableData.innerHTML = ""
            populateData(tableData)
            resumeUmur.innerHTML = `Rata rata umur ${getAvgYear(books).toFixed(2)}`;
            resumeSangu.innerHTML = `Rata rata Uang Sangu ${getAvgSangu(books).toFixed(2)}`;
            
        } else {
            alert(message)
        }
        
    })
});

function inputValidation(title, year, author) {
    let isValid = true;
    let message = "";


    if (author < 100000 || author > 1000000) {
        isValid = false;
        message = "minimal 100000 dan maksimal 1000000"
    }

    if(year < 25) {
        isValid = false;
        message = "kurang 25"
    }

    if(!title || title.length < 10) {
        isValid = false;
        message = "Kurang 10"
    }

    return {
        isValid,
        message
    }
}

function populateData(tableData) {
    for (let i = 0; i < books.length; i++) {
        let row = tableData.insertRow(i);

        row.insertCell(0).innerHTML = `${i+1}`
        row.insertCell(1).innerHTML = `${books[i].title}`
        row.insertCell(2).innerHTML = `${books[i].year}`
        row.insertCell(3).innerHTML = `${books[i].author}`
    }
}


// PROMISE SYNTAX ES6

// ASYNC AWAIT SYNTAX 2017 (ES8)