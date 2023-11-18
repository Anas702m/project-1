class Book {
  constructor(bookId, title, author, price, quantity) {
    this.bookId = bookId;
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }

  displayInfo() {
    console.log(`Book ID: ${this.bookId}`);
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Price: ${this.price}`);
    console.log(`Quantity: ${this.quantity}`);
  }
}

class Bookstore {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Book with ID ${book.bookId} has been added.`);
  }

  updateBook(bookId, newTitle, newAuthor, newPrice, newQuantity) {
    for (let book of this.books) {
      if (book.bookId === bookId) {
        book.title = newTitle;
        book.author = newAuthor;
        book.price = newPrice;
        book.quantity = newQuantity;
        console.log(`Book with ID ${bookId} has been updated.`);
        return;
      }
    }
    console.log(`Book with ID ${bookId} is not found.`);
  }

  deleteBook(bookId) {
    for (let book of this.books) {
      if (book.bookId === bookId) {
        this.books.splice(this.books.indexOf(book), 1);
        console.log(`Book with ID ${bookId} has been deleted.`);
        return;
      }
    }
    console.log(`Book with ID ${bookId} is not found.`);
  }

  queryBook(keyword) {
    let found = false;
    for (let book of this.books) {
      if (book.title.includes(keyword) || book.author.includes(keyword)) {
        book.displayInfo();
        found = true;
      }
    }
    if (!found) {
      console.log("No matching books found.");
    }
  }

  sellBook(bookId, quantity, balance) {
    for (let book of this.books) {
      if (book.bookId === bookId) {
        if (book.quantity >= quantity) {
          if (balance >= book.price * quantity) {
            book.quantity -= quantity;
            console.log(`${quantity} copies of book with ID ${bookId} have been sold.`);
            return;
          } else {
            console.log("Insufficient balance.");
            return;
          }
        } else {
          console.log(`Insufficient quantity of book with ID ${bookId} in stock.`);
          return;
        }
      }
    }
    console.log(`Book with ID ${bookId} is not found.`);
  }
}

// قم بإنشاء مكتبة جديدة
let myBookstore = new Bookstore();

// إضافة كتابين في المكتبة الجديدة
let book1 = new Book(1, "Book1", "Author1", 10, 5);
myBookstore.addBook(book1);

let book2 = new Book(2, "Book2", "Author2", 20, 10);
myBookstore.addBook(book2);

// عرض تفاصيل الكتب
book1.displayInfo();
book2.displayInfo();

// تحديث معلومات كتاب
myBookstore.updateBook(1, "New Book Title", "New Author", 15, 3);

// حذف كتاب
myBookstore.deleteBook(2);

// البحث عن كتاب باستخدام الكلمة المفتاحية
myBookstore.queryBook("New");

// بيع الكتاب
myBookstore.sellBook(1, 2, 40);