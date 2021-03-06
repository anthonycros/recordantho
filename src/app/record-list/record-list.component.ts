import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  records = this.recordService.getRecords();

  constructor(private recordService: RecordService) { }

  ngOnInit(): void {
  }

  delete(record: Record) {
    if (record) {
      this.recordService.deleteRecord(record.id).subscribe(() => this.recordService.reloadComponent());
    }  
  }
}
