import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { fromEvent, of } from 'rxjs';
import { BooksInterface } from '../shared/interfaces/books.interface';

@Component({
    selector: 'search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements AfterViewInit{
    public books: any[] = [];

    @ViewChild('searchInput') searchInput!: ElementRef;

    constructor (
        private httpService: HttpService
    ) {}

    ngAfterViewInit() {
        fromEvent<any>(this.searchInput.nativeElement, 'keyup')
            .pipe(
                map(event => event.target.value),
                debounceTime(500),
                distinctUntilChanged(),
                switchMap(value => value ? this.httpService.get(value) : of({items: []}))
        )
            .subscribe(res => {
                this.books = res.items.map((book: BooksInterface) => book.volumeInfo)
        })
    }
}
