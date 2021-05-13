import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TempApiCallService } from '../temp-api-call.service';
import { DataSET } from '../tempDataSet';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss'],
})
export class TempComponent implements OnInit {
  ELEMENT_DATA: DataSET[];
  displayedColumns: string[] = ['temp', 'time'];
  dataSource = new MatTableDataSource<DataSET>(this.ELEMENT_DATA);
  constructor(private service: TempApiCallService) {}

  ngOnInit(): void {
    this.getDataCall();
  }
  public getDataCall() {
    let resp = this.service.getDataDB();
    resp.subscribe((temp) => (this.dataSource.data = temp as DataSET[]));
  }
}
