import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {

  student: Student;
  searchForm: FormGroup;

  constructor(private studentService: StudentService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      'student_ID': [null, Validators.required],
     
    })
  }

  searchStudent(student_id: string){

  }

}
