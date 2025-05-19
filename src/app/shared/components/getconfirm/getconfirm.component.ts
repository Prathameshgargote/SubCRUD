import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss'],
})
export class GetconfirmComponent implements OnInit {
  msg!: string;
  constructor(
    private _matdailogref: MatDialogRef<GetconfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public getmsg: string
  ) {
    this.msg = this.getmsg;
  }

  ngOnInit(): void {}

  OnRemove(flag: boolean) {
    this._matdailogref.close(flag);
  }
}
