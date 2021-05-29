import { Component } from '@angular/core';
import { Student } from './models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StudentExample';
  MWCodeList: any[] = [ { "text": "9 - TRT909", "value": "9" }, { "text": "B - BRIDGE", "value": "B" }, { "text": "C - CURVE GANG", "value": "C" }, { "text": "D - DETECTOR", "value": "D" }, { "text": "F - SURFACE", "value": "F" }, { "text": "G - RAIL GRINDER", "value": "G" }, { "text": "H - INSPECT TRACK", "value": "H" }, { "text": "I - TIE GANG", "value": "I" }, { "text": "O - OTHER", "value": "O" }, { "text": "R - RAIL GANG", "value": "R" }, { "text": "S - SIGNAL", "value": "S" }, { "text": "T - TAMPER", "value": "T" }, { "text": "U - UNDERCUTTER", "value": "U" }, { "text": "W - WELDER", "value": "W" } ];
  studentModel: Student;

  constructor(public router: Router){}

  ngOnInit(){
    this.studentModel = new Student();
    this.studentModel.student_Gender = 'B';
  }

  compareByOptionValue(val1, val2) {
    return val1 && val2 && val1.value == val2.value;
  }

  alert(){
    var x = event.bubbles;
    console.log(x);
  }


  logout(){
      this.router.navigate(['']);
  }
}
