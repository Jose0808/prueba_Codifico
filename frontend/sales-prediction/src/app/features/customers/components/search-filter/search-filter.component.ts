import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-filter',
    templateUrl: './search-filter.component.html'
})
export class SearchFilterComponent {
    @Output() search = new EventEmitter<string>();

    onSearch(event: Event) {
        const target = event.target as HTMLInputElement;
        this.search.emit(target.value);
    }

}
