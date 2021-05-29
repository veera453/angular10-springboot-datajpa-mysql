import { animate, state, style, transition, trigger } from '@angular/animations';
import { NullTemplateVisitor } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert-banner/alert.service';
import { Student } from '../models/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
  animations: [
    trigger('fadeInOut', [
          state('in', style({ opacity: 100 })),
          transition('* => void', [
                animate(300, style({ opacity: 0 }))
          ])
    ])
]
})
export class StudentFormComponent implements OnInit {
  @Input() text = 'Upload Photo';
  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;
  files  = [];
  MWCodeList: any[] = ["male", "female"];
  studentCourse = [{name:"veera", maths: 40, physics: 60}, {name:"laxmi", social: 60, english:60}, {name:"veera", chemistry: 40, english: 60, telugu: 80}];
  displayedColumns: string[] = ['student_ID', 'student_Name', 'student_Age', 'student_Gender', 'student_Marks', 'student_Contact', 'student_Email', 'student_Photo'];
  //dataSource = ELEMENT_DATA;
  dataSource = [];
  studentForm: FormGroup;
  genders = ['Male', 'Female', 'Other'];
  panelOpenState = false;
  fileToUpload: any;
  imageUrl: any;
  studentCourseTemp: any = [];

  constructor(private formBuilder: FormBuilder, private studentService: StudentService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.getAllStudents();
    this.getStudentCourse();
    this.studentForm = this.formBuilder.group({
      'student_Name': [null, Validators.required],
      'student_Age': [null, Validators.required],
      'student_Marks': [null, Validators.required],
      'student_Contact': [null, Validators.required],
      'student_Gender': [null, Validators.required],
      'student_Email': [null, Validators.required],
      'student_Photo': [null]
    })
  }

  saveStudent(item: any){

    if(this.studentForm.valid){
      console.log(JSON.stringify(item));
      this.studentService.saveStudent(item).subscribe((data: any) => {
        this.getAllStudents();
        this.alertService.success('Student details are successfully saved!', {title: "SUCCESS: ", autoClose: true});
        //this.studentForm.reset();
      },(error: any) => {

      })
    }

  }

  getAllStudents(){
    console.log(this.studentService.fetchAllStudents());
    this.studentService.fetchAllStudents().subscribe((data: any)=>{
      this.dataSource = data;
      if(this.dataSource.length>0){
          this.panelOpenState = true;
      }
    })
  }

  compareByOptionValue(val1, val2) {
    return val1 && val2 && val1.value == val2.value;
  }

  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      //this.uploadFile(file);
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {
    for (let index = 0; index < fileUpload.files.length; index++)
    {
     const file = fileUpload.files[index];
     this.files.push({ data: file, inProgress: false, progress: 0});
    }
      this.uploadFiles();
    };
    fileUpload.click();
}

handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);

  //Show image preview
  let reader = new FileReader();
  reader.onload = (event: any) => {
    this.imageUrl = event.target.result;
  }
  reader.readAsDataURL(this.fileToUpload);
}

getStudentCourse(){
 this.studentCourse.forEach((element, index, array) => {
   console.log(element);
   console.log(index);
   console.log(array);
 })
}


}

