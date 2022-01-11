import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  records = this.recordService.getRecords();

  test_button() {
    window.alert('Alerte sur les enregistrements !');
  }

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
  }

}
