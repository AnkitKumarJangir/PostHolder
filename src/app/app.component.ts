import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PostHold';
  user:any;
  ngOnInit(): void {
      // this.user = localStorage.getItem("isLogin")
  }

}
