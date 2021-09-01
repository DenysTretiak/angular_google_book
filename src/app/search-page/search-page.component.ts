import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { fromEvent, Observable, of } from 'rxjs';
import { BooksDetailsInterface, BooksInterface } from '../shared/interfaces/books.interface';

@Component({
    selector: 'search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements AfterViewInit{
    public books!: Observable<BooksDetailsInterface[]>;

    @ViewChild('searchInput') searchInput!: ElementRef;

    constructor (
        private httpService: HttpService
    ) {}

    ngAfterViewInit() {
        this.books = fromEvent<any>(this.searchInput.nativeElement, 'keyup')
            .pipe(
                map(event => event.target.value),
                debounceTime(500),
                distinctUntilChanged(),
                switchMap(value => value ? this.httpService.get(value) : of({items: []})),
                map(res => res.items.map((book: BooksInterface) => book.volumeInfo)),
                tap(books => console.log(books))
        )
    }
}
