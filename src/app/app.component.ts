import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'third';

  studentName: string = "";
  studentRollNo: number = 0;
  studentYear: number = 0;
  studentContact: number = 0;
  studentActivity: string = "";
  isDataSubmitted: boolean = false;
  students: any = [];

  display() {
    this.students.push({
      name: this.studentName,
      rollNo: this.studentRollNo,
      year: this.studentYear,
      contact: this.studentContact,
      activity: this.studentActivity
    });

    this.studentName = "";
    this.studentRollNo = 0;
    this.studentYear = 0;
    this.studentContact = 0;
    this.studentActivity = "";

    this.isDataSubmitted = true;
  }

  erase(){
    this.studentName = "";
    this.studentRollNo = 0;
    this.studentYear = 0;
    this.studentContact = 0;
    this.studentActivity = "";
  }



}
