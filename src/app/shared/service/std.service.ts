import { Injectable } from '@angular/core';
import { Istd } from '../model/std';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StdService {
  StdArr: Array<Istd> = localStorage.getItem('StdArr')
    ? JSON.parse(localStorage.getItem('StdArr')!)
    : [];

  EditSub$: Subject<Istd> = new Subject();
  constructor() {}

  Addstd(std: Istd) {
    this.StdArr.push(std);
    localStorage.setItem('StdArr', JSON.stringify(this.StdArr));
  }
  fetchallStd() {
    return this.StdArr;
  }

  updtarstd(std: Istd) {
    let getindex = this.StdArr.findIndex((r) => r.Id === std.Id);
    this.StdArr[getindex] = std;
    localStorage.setItem('StdArr', JSON.stringify(this.StdArr));
  }
  Removestd(std: Istd) {
    let getindex = this.StdArr.findIndex((r) => r.Id === std.Id);
    this.StdArr.splice(getindex, 1);
    localStorage.setItem('StdArr', JSON.stringify(this.StdArr));
  }
}
