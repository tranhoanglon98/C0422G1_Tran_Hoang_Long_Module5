import {Component, OnInit} from '@angular/core';
import {ExamService} from '../../service/exam.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {IVehicle} from '../../model/i-vehicle';
import {IAddress} from '../../model/i-address';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  vehicles: IVehicle[];
  page = 1;
  size = 4;
  address: IAddress[];
  deleteVehicle: IVehicle;

  constructor(private examService: ExamService, private router: Router) {
    this.examService.getAllAddress().subscribe(next => {
      this.address = next;
    });
  }

  ngOnInit(): void {
    this.examService.getAll().subscribe(data => {
      this.vehicles = data;
    });
  }

  search() {
    this.ngOnInit();
  }

  getInfo(vehicle: IVehicle) {
    this.deleteVehicle = vehicle;
  }

  delete(id: number) {
    this.examService.delete(id).subscribe(next => {
      this.page = 1;
      this.ngOnInit();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Xóa thành công',
        showConfirmButton: false,
        timer: 2000
      });
    });
  }
}
