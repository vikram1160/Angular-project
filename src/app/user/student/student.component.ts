import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  dummy:any
  constructor(private api:ApiService){}
  ngOnInit(): void {
   this.api.fun().subscribe((res)=>{
    this.dummy=res
    console.log(this.dummy);
    
   }) 
  }

}
