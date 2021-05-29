package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.IStudentDao;
import com.example.demo.model.StudentEntity;
import com.example.demo.service.IStudentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestController {
	
	@Autowired
	private IStudentService studentService;
	
	@Autowired
	private IStudentDao iStudentDao;
	
	@PostMapping(path="/save")
	public ResponseEntity<StudentEntity> saveStudentDetails(@RequestBody StudentEntity student){
		System.out.println(student.toString());
		return new ResponseEntity<StudentEntity>(studentService.saveStudent(student), HttpStatus.OK);
	}
	
	@GetMapping(path="/getAllStudents")
	public ResponseEntity<List<StudentEntity>> getAllStudents(){
		List<StudentEntity> slist= new ArrayList<StudentEntity>();
		slist = studentService.getAllStudents();
		return new ResponseEntity<List<StudentEntity>>(slist, HttpStatus.OK);
	}
	
//	@GetMapping(path="/findByStudentId/{student_ID}")
//	public StudentEntity findByStudentId(@PathVariable("student_ID") long student_id){
//		//List<StudentEntity> slist= new ArrayList<StudentEntity>();
//		StudentEntity se = iStudentDao.findById(student_id);
//		return new ResponseEntity<StudentEntity>(HttpStatus.OK);
//	}
}
