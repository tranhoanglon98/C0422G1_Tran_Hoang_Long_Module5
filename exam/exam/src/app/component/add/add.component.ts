import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../service/exam.service';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ICustomerType} from '../../model/i-customer-type';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {date} from '../../service/dayValidate';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addFrom: FormGroup;
  customerTypes: ICustomerType[];

  constructor(private examService: ExamService, private router: Router) {
    this.examService.getAllCustomerType().subscribe(types => {
      this.customerTypes = types;
    });

    this.addFrom = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      dayOfBirth: new FormControl('', [date]),
      customerType: new FormControl(0)
    });
  }

  ngOnInit(): void {
  }

  add() {
    this.examService.add(this.addFrom.value).subscribe(next => {
      this.router.navigateByUrl('');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Add successfully',
        showConfirmButton: false,
        timer: 2000
      });
    });
  }
}
