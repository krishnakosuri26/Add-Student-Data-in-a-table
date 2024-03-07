import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'third';

  
  studentName: string = "";
  studentYear: number = 0;
  studentContact: number = 0;
  studentActivity: string = "";
  isDataSubmitted: boolean = false;
  students: any[] = [];


  
  // Add a variable to store the index of the updated row
  updatedRowIndex: number | null = null;
  
  
  display() {
    if (this.updatedRowIndex !== null) {
      // Update existing row
      this.students[this.updatedRowIndex] = {
        name: this.studentName,
        year: this.studentYear,
        contact: this.studentContact,
        activity: this.studentActivity
      };



      // Reset updatedRowIndex after updating
      this.updatedRowIndex = null;
    } else {
      // Add new row
      this.students.unshift({
        name: this.studentName,
        year: this.studentYear,
        contact: this.studentContact,
        activity: this.studentActivity
      });
    }
  
    // Clear input values
    this.studentName = "";
    this.studentYear = 0;
    this.studentContact = 0;
    this.studentActivity = "";
  
    this.isDataSubmitted = true;
  }
  
  // for clear the input values
  erase(){
    this.studentName = "";
    this.studentYear = 0;
    this.studentContact = 0;
    this.studentActivity = "";
  }

  updateRow(i: number) {
    const updatedStudent = { ...this.students[i] };
  
    // Populate input boxes with values of the selected row
    this.studentName = updatedStudent.name;
    this.studentYear = updatedStudent.year;
    this.studentContact = updatedStudent.contact;
    this.studentActivity = updatedStudent.activity;
  
    // Set index of updated row
    this.updatedRowIndex = i;
  }

  
 // Here it take index in 'i' and 1 is for delete only one row
  deleteRow(i: number){
    this.students.splice(i, 1);
  }

}

