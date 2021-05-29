import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url_path = "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  saveStudent(student): Observable<Student[]>{
    console.log(JSON.stringify(student));
    return this.http.post<Student[]>(this.url_path+'save', student);
  }

  fetchAllStudents(){
    return this.http.get(this.url_path+'getAllStudents');
  }

  findByStudent(student_id: string){
    return this.http.get(this.url_path+'student_id');
  }
}
