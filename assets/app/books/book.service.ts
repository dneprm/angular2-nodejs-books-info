import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Book } from "./book.model";

@Injectable()
export class BookService {
    private books: Book[] = [];
   

    constructor(private http: Http) {}

    getBooks() {
        return this.http.get('http://localhost:8800/book')
            .map((response: Response) => {
                const books = response.json().obj;

                let transformedBooks: Book[] = [];
                for (let book of books) {
                    transformedBooks.push(new Book(book.author, book.title, book.year));
                }
                this.books = transformedBooks;
                return transformedBooks;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
    
}