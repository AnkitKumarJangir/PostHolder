import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  Id: number;
  url = 'https://jsonplaceholder.typicode.com/posts';
  Emp: any[];

  constructor(private route: ActivatedRoute,private httpservice:HttpClient) { }

  ngOnInit(): void {
    this.Id = parseInt(this.route.snapshot.queryParamMap.get('id'));
    this.httpservice.get(`${this.url}/${this.Id}`).subscribe((data : any )=> {
      this.Emp = data 
      console.log(this.Emp);
      
    });
  }

}
