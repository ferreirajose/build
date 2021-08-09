import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ComponentsLibService {
    constructor(http) {
        this.http = http;
        this.apiRoot = 'https://api.tvmaze.com';
    }
    getShow(id) {
        const url = `${this.apiRoot}/shows/${id}`;
        return this.http.get(url);
    }
}
ComponentsLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ComponentsLibService_Factory() { return new ComponentsLibService(i0.ɵɵinject(i1.HttpClient)); }, token: ComponentsLibService, providedIn: "root" });
ComponentsLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
ComponentsLibService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qb3NlL2RldmVsb3BtZW50L215LXdvcmtzcGFjZS9wcm9qZWN0cy9jb21wb25lbnRzLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUTNDLE1BQU0sT0FBTyxvQkFBb0I7SUFJL0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUZuQixZQUFPLEdBQUcsd0JBQXdCLENBQUM7SUFFYixDQUFDO0lBRXhDLE9BQU8sQ0FBQyxFQUFVO1FBQ2hCLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sVUFBVSxFQUFFLEVBQUUsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7WUFaRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQVJRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBTaG93IH0gZnJvbSBcIi4vaW50ZXJmYWNlL3Nob3cuaW50ZXJmYWNlXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNMaWJTZXJ2aWNlIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IGFwaVJvb3QgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbSc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldFNob3coaWQ6IG51bWJlcik6IE9ic2VydmFibGU8U2hvdz4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYXBpUm9vdH0vc2hvd3MvJHtpZH1gO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFNob3c+KHVybCk7XG4gIH1cbn1cbiJdfQ==