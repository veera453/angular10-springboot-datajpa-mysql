package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.StudentEntity;

public interface IStudentService {
	
	public StudentEntity saveStudent(StudentEntity s);
	public List<StudentEntity> getAllStudents();
	//public StudentEntity fetchByID(long student_Id);

}
