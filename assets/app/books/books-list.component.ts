import { Component, OnInit, Input } from "@angular/core";

import { Book } from "./book.model";
import { BookService } from "./book.service";
import { SearchPipe } from "./search.pipe";
import { SortPipe } from "./sort-by-asc.pipe";

@Component({
    selector: 'app-books-list',
    template: `
        <div class="form-group">
            <input #input placeholder="Search by book author or title"  class="form-control" [ngModel]="searchInput" (input)="searchInput=$event.target.value">
        </div>
       
        <div class="table-responsive">
            <table class="table">
                <thead>
                  <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Edition</th>
                  </tr>
                </thead>
                <tbody>
                    <app-book
                   [book]="book"
                
                    *ngFor="let book of books | search:searchInput | sort:['+author']" class="table-raw">
                    </app-book>

                </tbody>
            </table>
        </div>
    `,
    styles: [`
        .table-raw {
            display: table-row;
        }
    `]
})
export class BooksListComponent implements OnInit {

    books: Book[];
    
    constructor(private bookService: BookService) {}

    ngOnInit() {
        this.bookService.getBooks()
            .subscribe(
                (books: Book[]) => {
                    this.books = books;
                 

                }
            );


    }

}
