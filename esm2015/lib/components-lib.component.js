import { Component, Input } from '@angular/core';
import { map } from "rxjs/operators";
import { ComponentsLibService } from "./components-lib.service";
export class ComponentsLibComponent {
    constructor(tvmaze) {
        this.tvmaze = tvmaze;
    }
    ngOnInit() {
        this.posterUrl$ = this.tvmaze
            .getShow(this.showId)
            .pipe(map(show => show.image.medium));
    }
}
ComponentsLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'uic-components-lib',
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
ComponentsLibComponent.ctorParameters = () => [
    { type: ComponentsLibService }
];
ComponentsLibComponent.propDecorators = {
    showId: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy1saWIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2pvc2UvZGV2ZWxvcG1lbnQvbXktd29ya3NwYWNlL3Byb2plY3RzL2NvbXBvbmVudHMtbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzLWxpYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBZ0JoRSxNQUFNLE9BQU8sc0JBQXNCO0lBS2pDLFlBQW9CLE1BQTRCO1FBQTVCLFdBQU0sR0FBTixNQUFNLENBQXNCO0lBQUcsQ0FBQztJQUVwRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTTthQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFLHVEQUF1RDt5QkFFL0Q7Ozs7Ozs7R0FPRDthQUVGOzs7WUFmUSxvQkFBb0I7OztxQkFrQjFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBDb21wb25lbnRzTGliU2VydmljZSB9IGZyb20gXCIuL2NvbXBvbmVudHMtbGliLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWljLWNvbXBvbmVudHMtbGliJyxcbiAgdGVtcGxhdGU6IGA8aW1nICpuZ0lmPVwicG9zdGVyVXJsJCB8IGFzeW5jIGFzIHNyY1wiIFtzcmNdPVwic3JjXCIgLz5gLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gIH1cbiAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHNMaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHNob3dJZDogbnVtYmVyO1xuICBwb3N0ZXJVcmwkOiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0dm1hemU6IENvbXBvbmVudHNMaWJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucG9zdGVyVXJsJCA9IHRoaXMudHZtYXplXG4gICAgICAuZ2V0U2hvdyh0aGlzLnNob3dJZClcbiAgICAgIC5waXBlKG1hcChzaG93ID0+IHNob3cuaW1hZ2UubWVkaXVtKSk7XG4gIH1cblxufVxuIl19