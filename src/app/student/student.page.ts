import { StudentsService } from './../services/students.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Student {
  id?: number;
  name: string;
  grade: number;
  comment: string;
  isProjectDone: boolean;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  studentId: number = 0;
  student: Student = {
    id: 0,
    name: '',
    grade: 0,
    comment: '',
    isProjectDone: false,
  };

  constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap
    .subscribe(params => {
      this.studentId = parseInt(params.get('id'));
    });

    this.loadStudent(this.studentId);
  }

  loadStudent(studentId: number) {
    this.studentsService
      .findById(studentId)
      .subscribe((student: Student) => {
        this.student = student;
      });
  }

}
