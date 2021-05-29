package com.example.demo.model;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Student")
public class StudentEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "sid")
	private long student_ID;
	
	@Column(name="sname", nullable = false)
	private String student_Name;
	
	@Column(name="sage", nullable = false)
	private String student_Age;
	
	@Column(name="sgender", nullable = false)
	private String student_Gender;
	
	@Column(name="smarks", nullable = false)
	private int student_Marks;
	
	@Column(name="scontact", nullable = false)
	private String student_Contact;
	
	@Column(name="semail", nullable = false)
	private String student_Email;
	
	@Column(name="sphoto")
	private byte[] student_Photo;
	
	public StudentEntity() {}

	public StudentEntity(int student_ID, String student_Name, String student_Age, String student_Gender,
			int student_Marks, String student_Contact, String student_Email, byte[] student_Photo) {
		super();
		this.student_ID = student_ID;
		this.student_Name = student_Name;
		this.student_Age = student_Age;
		this.student_Gender = student_Gender;
		this.student_Marks = student_Marks;
		this.student_Contact = student_Contact;
		this.student_Email = student_Email;
		this.student_Photo = student_Photo;
	}


	public long getStudent_ID() {
		return student_ID;
	}

	public void setStudent_ID(int student_ID) {
		this.student_ID = student_ID;
	}

	public String getStudent_Name() {
		return student_Name;
	}

	public void setStudent_Name(String student_Name) {
		this.student_Name = student_Name;
	}

	public String getStudent_Age() {
		return student_Age;
	}

	public void setStudent_Age(String student_Age) {
		this.student_Age = student_Age;
	}

	public int getStudent_Marks() {
		return student_Marks;
	}

	public void setStudent_Marks(int student_Marks) {
		this.student_Marks = student_Marks;
	}

	public String getStudent_Contact() {
		return student_Contact;
	}

	public void setStudent_Contact(String student_Contact) {
		this.student_Contact = student_Contact;
	}

	public String getStudent_Gender() {
		return student_Gender;
	}

	public void setStudent_Gender(String student_Gender) {
		this.student_Gender = student_Gender;
	}

	public String getStudent_Email() {
		return student_Email;
	}

	public void getStudent_Email(String student_Email) {
		this.student_Email = student_Email;
	}

	public byte[] getStudent_Photo() {
		return student_Photo;
	}

	public void setStudent_Photo(byte[] student_Photo) {
		this.student_Photo = student_Photo;
	}

	@Override
	public String toString() {
		return "StudentEntity [student_ID=" + student_ID + ", student_Name=" + student_Name + ", student_Age="
				+ student_Age + ", student_Gender=" + student_Gender + ", student_Marks=" + student_Marks
				+ ", student_Contact=" + student_Contact + ", student_Email=" + student_Email + ", student_Photo="
				+ Arrays.toString(student_Photo) + "]";
	}
	
	
}
