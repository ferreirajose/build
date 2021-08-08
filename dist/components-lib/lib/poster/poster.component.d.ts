import { ComponentsLibService } from "./../components-lib.service";
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export declare class PosterComponent implements OnInit {
    private tvmaze;
    showId: number;
    posterUrl$: Observable<string>;
    constructor(tvmaze: ComponentsLibService);
    ngOnInit(): void;
}
