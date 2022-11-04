import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStudent} from '../model/i-student';
import {IClass} from '../model/i-class';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number, classSearch: string): Observable<IStudent[]> {
    console.log(page);
    return this.httpClient.get<IStudent[]>('http://localhost:8080?page=' + page +'&classSearch=' + classSearch);
  }

  findStudent(id: number): Observable<IStudent> {
    return this.httpClient.get<IStudent>('http://localhost:8080/findById/' + id);
  }

  finish(id: number) {
    return this.httpClient.get<IStudent>('http://localhost:8080/finish/' + id);
  }

  getAllClass(): Observable<IClass[]> {
    return this.httpClient.get<IClass[]>('http://localhost:8080/getClass');

  }

  add(student: any) {
    return this.httpClient.post('http://localhost:8080/add', student);
  }

}
