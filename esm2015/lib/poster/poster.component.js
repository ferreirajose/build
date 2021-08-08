import { ComponentsLibService } from "./../components-lib.service";
import { Component, Input } from '@angular/core';
import { map } from 'rxjs/operators';
export class PosterComponent {
    constructor(tvmaze) {
        this.tvmaze = tvmaze;
    }
    ngOnInit() {
        this.posterUrl$ = this.tvmaze
            .getShow(this.showId)
            .pipe(map(show => show.image.medium));
    }
}
PosterComponent.decorators = [
    { type: Component, args: [{
                selector: 'tm-poster',
                template: `<img *ngIf="posterUrl$ | async as src" [src]="src" />`,
                styles: [`
  :host {
    display: inline-block;
    overflow: hidden;
    border-radius: 4px;
    line-height: 0;
  }
  `]
            },] }
];
PosterComponent.ctorParameters = () => [
    { type: ComponentsLibService }
];
PosterComponent.propDecorators = {
    showId: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9qb3NlL2RldmVsb3BtZW50L215LXdvcmtzcGFjZS9wcm9qZWN0cy9jb21wb25lbnRzLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvcG9zdGVyL3Bvc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBZ0JyQyxNQUFNLE9BQU8sZUFBZTtJQUkxQixZQUFvQixNQUE0QjtRQUE1QixXQUFNLEdBQU4sTUFBTSxDQUFzQjtJQUFHLENBQUM7SUFFcEQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU07YUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsdURBQXVEO3lCQUUvRDs7Ozs7OztHQU9EO2FBRUY7OztZQWxCUSxvQkFBb0I7OztxQkFvQjFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRzTGliU2VydmljZSB9IGZyb20gXCIuLy4uL2NvbXBvbmVudHMtbGliLnNlcnZpY2VcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0bS1wb3N0ZXInLFxuICB0ZW1wbGF0ZTogYDxpbWcgKm5nSWY9XCJwb3N0ZXJVcmwkIHwgYXN5bmMgYXMgc3JjXCIgW3NyY109XCJzcmNcIiAvPmAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgfVxuICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUG9zdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2hvd0lkOiBudW1iZXI7XG4gIHBvc3RlclVybCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHR2bWF6ZTogQ29tcG9uZW50c0xpYlNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wb3N0ZXJVcmwkID0gdGhpcy50dm1hemVcbiAgICAgIC5nZXRTaG93KHRoaXMuc2hvd0lkKVxuICAgICAgLnBpcGUobWFwKHNob3cgPT4gc2hvdy5pbWFnZS5tZWRpdW0pKTtcbiAgfVxufVxuIl19