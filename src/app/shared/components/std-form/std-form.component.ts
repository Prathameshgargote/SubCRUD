import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flatMap } from 'rxjs';
import { Istd } from '../../model/std';
import { StdService } from '../../service/std.service';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss'],
})
export class StdFormComponent implements OnInit {
  stdform!: FormGroup;
  Iseditmode: boolean = false;
  EditObj!: Istd;
  constructor(
    private _stdService: StdService,
    private _uuid: UuidService,
    private _snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.creatform();
    this.patchstd();
  }

  patchstd() {
    this._stdService.EditSub$.subscribe((res) => {
      this.Iseditmode = true;
      console.log(res);
      this.EditObj = res;
      this.stdform.patchValue(res);
    });
  }

  creatform() {
    this.stdform = new FormGroup({
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'),
      ]),
      contact: new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    });
  }

  OnSubmit() {
    if (this.stdform.valid) {
      if (this.Iseditmode) {
        let updateObj: Istd = { ...this.stdform.value, Id: this.EditObj.Id };
        this._stdService.updtarstd(updateObj);
        this.Iseditmode = false;
        this._snackbar.opensnackbar(
          `the ${updateObj.fname} is Update successfully!`
        );
      } else {
        console.log(this.stdform.value);
        let newstd: Istd = {
          ...this.stdform.value,
          Id: this._uuid.generateUuid(),
        };
        this._stdService.Addstd(newstd);
        this.stdform.reset();
        this._snackbar.opensnackbar(
          `the ${newstd.fname} is Added successfully!`
        );
      }
    }
  }

  get f() {
    return this.stdform.controls;
  }
}
