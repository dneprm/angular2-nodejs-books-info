import { Component } from '@angular/core';

import { BookService } from "./books/book.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [BookService]
})
export class AppComponent {
}