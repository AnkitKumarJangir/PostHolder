import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  Emp: any[];
  url = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private httpservice:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.httpservice.get(this.url).subscribe((data : any )=> {
      // this.Emp = data 
      const size = 10
      this.Emp  = data.slice(0, size) 
      console.log(this.Emp);
      
    });
  }
  goDetails(id:any){
    this.router.navigate(['postDetail'],{ queryParams: { id}})

  }

}
