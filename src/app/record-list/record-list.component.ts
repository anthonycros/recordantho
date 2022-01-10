import { Component, OnInit } from '@angular/core';

import { records } from '../records';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  records = records;

  test_alert() {
    window.alert('Alerte sur les enregistrements !');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
