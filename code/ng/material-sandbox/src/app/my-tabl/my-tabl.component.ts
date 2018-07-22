import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyTablDataSource } from './my-tabl-datasource';

@Component({
  selector: 'app-my-tabl',
  templateUrl: './my-tabl.component.html',
  styleUrls: ['./my-tabl.component.css']
})
export class MyTablComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MyTablDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MyTablDataSource(this.paginator, this.sort);
  }
}
