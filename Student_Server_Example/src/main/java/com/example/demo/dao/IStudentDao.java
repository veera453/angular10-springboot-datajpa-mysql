package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.StudentEntity;

public interface IStudentDao extends CrudRepository<StudentEntity, Long> {

}
