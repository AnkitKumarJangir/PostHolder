import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { ReplaySubject, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/photos';
  
  Emp: any[];
  filteredData =[]

    
  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;
  selectedData: { value: any; text: string; };
  constructor(private httpservice:HttpClient,private router:Router) { 
    this.httpservice.get(this.url).subscribe((data : any )=> {
      // this.Emp = data 
      const size = 10
      this.Emp  = data.slice(0, size) 
      console.log(this.Emp);
      
    });
  }
  public searchString: FormControl = new FormControl();
  public selectedValue:FormControl = new FormControl();
  
  ngOnInit(): void {

  }

  selected(event: MatSelectChange) {
    this.selectedData = {
      value: event.value,
      text: event.source.triggerValue
    };
    
    this.filteredData  = this.Emp.filter(s => (s.title).toLowerCase().trim().includes((this.selectedData.text).toLowerCase().trim()));
    this.filteredData .sort((a, b) => a.title.localeCompare(b.title));
    this.Emp =this.filteredData
    console.log(this.filteredData);
    console.log(this.selectedData);
  }
  onChane(event){
    console.log(event.target.value);
    // this.selectedValue = event.target.value
    // this.filteredData = this.Emp.filter(item =>{
      if(event.target.value !== ''){
        this.filteredData  = this.Emp.filter(s => (s.title).toLowerCase().trim().includes((event.target.value).toLowerCase().trim()));
        this.filteredData .sort((a, b) => a.title.localeCompare(b.title));
        this.Emp = this.filteredData
        console.log(this.filteredData);

      }
      else{
        this.httpservice.get(this.url).subscribe((data : any )=> {
          // this.Emp = data 
          const size = 10
          this.Emp  = data.slice(0, size) 
          console.log(this.Emp);
          
        });

      }
    // })
    
  }

}
