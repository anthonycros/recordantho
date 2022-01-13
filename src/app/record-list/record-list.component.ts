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
    window.alert(`Appeler la fonction delete sur l'enregistrement dont l'id est : ${record.id}`);  
  }

}
