import date from './modules/date.js';
date();

import Navigation from './modules/navigation.js';
const navigation = new Navigation();
navigation.navigationPage();

import Library from './modules/addBook.js';
const book = new Library();
book.addBook();
book.display();
