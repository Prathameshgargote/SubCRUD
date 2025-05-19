import { Component, OnInit } from '@angular/core';
import { StdService } from '../../service/std.service';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';
import { Istd } from '../../model/std';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-std-table',
  templateUrl: './std-table.component.html',
  styleUrls: ['./std-table.component.scss'],
})
export class StdTableComponent implements OnInit {
  StdArr!: Istd[];
  constructor(
    private _stdService: StdService,
    private _uuid: UuidService,
    private _snackbar: SnackbarService,
    private _matdailog: MatDialog
  ) {}

  ngOnInit(): void {
    this.StdArr = this._stdService.fetchallStd();
  }

  Onedit(std: Istd) {
    this._stdService.EditSub$.next(std);
  }

  Onremove(std: Istd) {
    let matdailogref = this._matdailog.open(GetconfirmComponent, {
      width: '500px',
      disableClose: true,
      data: 'Are you sure ! You want to delete this  student',
    });

    matdailogref.afterClosed().subscribe((res) => {
      if (res) {
        this._stdService.Removestd(std);
          this._snackbar.opensnackbar(
        `the ${std.fname} is deleted successfully!`
      )
      }
    });
  }
}
