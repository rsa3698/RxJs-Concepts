import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferWhen, tap } from 'rxjs/operators';

@Component({
  selector: 'app-buffer-when-operator',
  templateUrl: './buffer-when-operator.component.html',
  styleUrls: ['./buffer-when-operator.component.css'],
})
export class BufferWhenOperatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    let x = 0;
    interval(500)
      .pipe(
        tap((i) => (x = i)),
        bufferWhen(() => {
          if (x%2==0) {
            return interval(10000);
          }
          return interval(2000);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
