import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  taskArrays = [{ taskname: 'brush teeth', isCompleted: false }];
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    
    this.taskArrays.push({
      taskname: form.controls['task'].value,
      isCompleted: false,
    });

    form.reset();
  }

  onDelete(index:number) {
    this.taskArrays.splice(index, 1);

  }
  
  onCheck(index:number){

    this.taskArrays[index].isCompleted=!  this.taskArrays[index].isCompleted

    
    

  }
}

