import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
  data: any;

isChecked:boolean=false;
  constructor(private http:HttpService){}
  ngOnInit(): void {
this.getData();
}

toggleCheckbox(item: any): void {
  item.selected = !item.selected;
}
getData(){
  this.http.getDataFromServer("").subscribe(response=>{
    this.data=response;
    console.log(response);
  });
}

} 
