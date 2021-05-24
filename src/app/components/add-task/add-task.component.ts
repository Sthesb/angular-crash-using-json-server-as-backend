import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from '../data/Tasks';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  id : any;
  text: any;
  day: any;
  time: any;
  reminder: any;

  showAddTask! : boolean;
  subscription!: Subscription;

  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();

  constructor( private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => (
      this.showAddTask = value
    ));
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a task ");
      return;
    }
    if(!this.day){
      alert("Please add a date ");
      return;
    }
    if(!this.time){
      alert("Please add a time ");
      return;
    }
    if(this.reminder){
      this.reminder = this.reminder
    }else{
      this.reminder = false
    }
    

    const newTask = {
      id: this.id,
      text: this.text,
      day: this.day,
      time: this.time,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);


    this.text = '';
    this.day = '';
    this.time = '';
    this.reminder = false;



  } // end of onSubmit()
    
  



}
