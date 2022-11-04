import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../service/exam.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IClass} from '../../model/i-class';
import Swal from "sweetalert2";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addFrom: FormGroup;
  classes: IClass[];

  constructor(private examService: ExamService, private router: Router) {
    this.examService.getAllClass().subscribe(classes => {
      this.classes = classes;
    });
    this.addFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('[ a-zA-Z]+')]),
      dateOfBirth: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [Validators.required,
        Validators.pattern('\\+\\(84\\)[0-9]{8}')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      idCard: new FormControl('', Validators.required),
      codeGymClass: new FormGroup({
        id: new FormControl('')
      },Validators.required)
    });
  }

  ngOnInit(): void {
  }

  add() {
    this.examService.add(this.addFrom.value).subscribe(next => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm mới học viên thành công thành công',
        showConfirmButton: false,
        timer: 2000
      });
    },error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: error.error,
        showConfirmButton: false,
        timer: 2000
      });
    })
  }
}

