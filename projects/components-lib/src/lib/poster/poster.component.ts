import { ComponentsLibService } from "./../components-lib.service";
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'tm-poster',
  template: `<img *ngIf="posterUrl$ | async as src" [src]="src" />`,
  styles: [
    `
  :host {
    display: inline-block;
    overflow: hidden;
    border-radius: 4px;
    line-height: 0;
  }
  `
  ]
})
export class PosterComponent implements OnInit {
  @Input() showId: number;
  posterUrl$: Observable<string>;

  constructor(private tvmaze: ComponentsLibService) {}

  ngOnInit() {
    this.posterUrl$ = this.tvmaze
      .getShow(this.showId)
      .pipe(map(show => show.image.medium));
  }
}
