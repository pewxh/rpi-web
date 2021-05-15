import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PinCallService } from '../pin-call.service';
import { pinState } from '../pinData';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
})
export class LedComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ELEMENT_DATA: pinState[] = [
    {
      id: 1,
      pin_num: 18,
      color: 'red',
      state: 'off',
    },
    {
      id: 2,
      pin_num: 17,
      color: 'green',
      state: 'off',
    },
    {
      id: 3,
      pin_num: 27,
      color: 'blue',
      state: 'off',
    },
  ];
  displayedColumns: string[] = ['id', 'pin', 'clr', 'state'];
  dataSource = new MatTableDataSource<pinState>(this.ELEMENT_DATA);
  constructor(private service: PinCallService) {}

  ngOnInit(): void {
    // this.getDataCall();
    this.dataSource.paginator = this.paginator;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  public getDataCall() {
    let resp = this.service.getState();
    resp.subscribe((pin) => (this.dataSource.data = pin as pinState[]));
  }
}
