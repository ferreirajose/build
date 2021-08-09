import { OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ComponentsLibService } from "./components-lib.service";
export declare class ComponentsLibComponent implements OnInit {
    private tvmaze;
    showId: number;
    posterUrl$: Observable<string>;
    constructor(tvmaze: ComponentsLibService);
    ngOnInit(): void;
}
