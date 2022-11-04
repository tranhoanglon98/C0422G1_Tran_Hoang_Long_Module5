import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../service/exam.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {IStudent} from '../../model/i-student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: IStudent[];
  page = 0;
  studentDetail: IStudent;
  totalPage = 0;
  classSearch: string = "";

  constructor(private examService: ExamService, private router: Router) {
  }

  ngOnInit(): void {
    this.examService.getAll(this.page,this.classSearch).subscribe(data => {
      // @ts-ignore
      this.students = data.content;
      // @ts-ignore
      this.totalPage = data.totalPages
    });
  }

  next() {
    this.page = this.page + 1;
    this.examService.getAll(this.page,this.classSearch).subscribe(data => {
      // @ts-ignore
      this.students = data.content;
      // @ts-ignore
      this.totalPage = data.totalPages
    });
  }

  previous() {
    this.page = this.page - 1;
    this.examService.getAll(this.page,this.classSearch).subscribe(data => {
      // @ts-ignore
      this.students = data.content;
      // @ts-ignore
      this.totalPage = data.totalPages
    });
  }

  findStudent(id: number) {
    this.examService.findStudent(id).subscribe(student => {
      this.studentDetail = student;
    })
  }

  finish(id: number) {
    this.examService.finish(id).subscribe(ok => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cập nhật thông tin thành công',
        showConfirmButton: false,
        timer: 2000
      });
    })
  }

  searchClass() {
    this.page = 0;
    alert(this.classSearch);
    this.examService.getAll(this.page,this.classSearch).subscribe(students => {
      // @ts-ignore
      this.students = students.content
      // @ts-ignore
      this.totalPage = data.totalPages
    })
  }
}
