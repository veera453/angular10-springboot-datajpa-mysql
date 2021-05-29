package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.IStudentDao;
import com.example.demo.model.StudentEntity;

@Service
public class StudentServiceImpl implements IStudentService {
	
	@Autowired
	private IStudentDao studentdao;

	@Override
	public StudentEntity saveStudent(StudentEntity s) {
		return studentdao.save(s);

	}

	@Override
	public List<StudentEntity> getAllStudents() {
		// TODO Auto-generated method stub
		return (List<StudentEntity>) studentdao.findAll();
	}

//	@Override
//	public Optional<StudentEntity> fetchByID(long student_Id) {
//		// TODO Auto-generated method stub
//		return studentdao.findById(student_Id);
//	}

}
