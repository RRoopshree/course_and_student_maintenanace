import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course',

  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  public courseList: any = [];
  public studentList: any = [];
  public courseName: any;
  public showCourseTextBox: boolean = false;
  public showStudentTextbox: boolean = false;
  public showStudentSection: boolean = false;
  public studentName: any;
  public selectedCourseId: any;
  public selectedStudentList: any = [];
  constructor() {}
  ngOnInit() {}
  //function to add course to the list in the dropdown
  addCourse() {
    this.courseList.push({
      course_id: this.courseList.length + 1,
      course_name: this.courseName,
    });
    this.showCourseTextBox = false;
    this.courseName = '';
  }
  //just to hide the course text box
  removeCourse() {
    this.showCourseTextBox = false;
  }
  //to display the course text box
  addNewCourse() {
    this.showCourseTextBox = true;
  }
  //to add new student to the student list
  addNewStudent() {
    this.studentName = '';
    this.showStudentTextbox = true;
  }
  //to return the student name by selecting the course from the course list
  getStudentsByCourse(event: any) {
    this.showStudentSection = true;
    this.selectedCourseId = event.target.value;
    this.getStudentList();
  }
  //to display the students list for a particular course
  getStudentList() {
    this.selectedStudentList = this.studentList.filter(
      (student: { course_id: any }) => {
        return student.course_id == this.selectedCourseId;
      }
    );
  }
  //add student to student list a course
  addStudent() {
    this.studentList.push({
      course_id: this.selectedCourseId,
      student_id: this.studentList.length + 1,
      student_name: this.studentName,
    });
    this.showStudentTextbox = false;
    this.getStudentList();
  }
  // just to hide the student text box
  removeStudent() {
    this.showStudentTextbox = false;
  }
}
