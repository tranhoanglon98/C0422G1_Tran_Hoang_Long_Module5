import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../service/exam.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {IType} from '../../model/i-type';
import {IStudent} from '../../model/i-student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  id: number;
  address: IType[];
  vehicleEdit: IStudent;

  constructor(private examService: ExamService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = +paramMap.get('id');
    //   this.examService.findById(this.id).subscribe(next => {
    //     this.getForm(next);
    //   });
    // });
  }

  ngOnInit(): void {
    // this.examService.getAllAddress().subscribe(next => {
    //   this.address = next;
    // });
  }
  //
  // getForm(vehicle: IStudent) {
  //   this.editForm = new FormGroup({
  //     id: new FormControl(vehicle.id),
  //     name: new FormControl(vehicle.name, Validators.required),
  //     numberPalate: new FormControl(vehicle.numberPalate),
  //     type: new FormControl(vehicle.type, Validators.required),
  //     phone: new FormControl(vehicle.phone, [Validators.required, Validators.pattern('^(090|093|097)[0-9]{7}$')]),
  //     email: new FormControl(vehicle.email, [Validators.required, Validators.email]),
  //     startTime: new FormControl(vehicle.startTime, [Validators.required, this.timeCheck]),
  //     endTime: new FormControl(vehicle.endTime, [Validators.required, this.timeCheck]),
  //     from: new FormControl(vehicle.from.id, Validators.required),
  //     to: new FormControl(vehicle.to.id, Validators.required)
  //   });
  // }
  //
  // edit() {
  //   this.vehicleEdit = this.editForm.value;
  //   console.log(this.vehicleEdit);
  //   this.examService.findAddressById(this.editForm.value.from).subscribe(from => {
  //     this.vehicleEdit.from = from;
  //     this.examService.findAddressById(this.editForm.value.to).subscribe(to => {
  //       this.vehicleEdit.to = to;
  //       this.examService.edit(this.vehicleEdit).subscribe(success => {
  //         this.router.navigateByUrl('');
  //         Swal.fire({
  //           position: 'center',
  //           icon: 'success',
  //           title: 'Edit successfully',
  //           showConfirmButton: false,
  //           timer: 2000
  //         });
  //       });
  //     });
  //   });
  // }
  //
  // timeCheck(time: AbstractControl) {
  //   const check: string[] = time.value.split(':');
  //   if (+check[0] < 5 || (+check[0] > 23 && +check[1] > 0) || +check[1] > 23) {
  //     return {timeInvalid: true};
  //   } else {
  //     return null;
  //   }
  // }
}
