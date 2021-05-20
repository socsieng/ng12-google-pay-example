import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onLoadPaymentData(event: any) {
    console.log('load payment data', event.detail);
  }
}
