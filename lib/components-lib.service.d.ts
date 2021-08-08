import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Show } from "./interface/show.interface";
export declare class ComponentsLibService {
    private http;
    private readonly apiRoot;
    constructor(http: HttpClient);
    getShow(id: number): Observable<Show>;
}
