import { TestComponent } from './../components/test/test.component';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { StudentsService } from './../services/students.service';

interface Student {
  id?: number;
  name: string;
  grade: number;
  comment: string;
  isProjectDone: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  students: Student[] = [];

  message: string = '';

  constructor(
    private popoverCtrl: PopoverController,
    private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  onClick(index: number) {
    this.message = this.students[index].comment;
  }

  async pop() {
    const popover = await this.popoverCtrl.create({
      component: TestComponent
    });
    return await popover.present();
  }

  onChange(event: any, index: number) {
    let checked = event.target.checked;
    this.students[index].isProjectDone = checked;
    console.log(this.students);
  }

  loadStudents() {
    this.studentsService
      .findAll()
      .pipe(
        switchMap((students: Student[]) => students)
      )
      .subscribe((student: Student) => {
        this.students.push(student);
      });
  }

}
