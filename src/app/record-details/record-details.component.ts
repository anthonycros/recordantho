import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Record } from '../records';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent implements OnInit {

  record: Record | undefined;

  constructor(private route: ActivatedRoute, private recordService: RecordService) { }

  ngOnInit(): void {
    // D'abord on récupère l'id de l'enregistrement depuis la route courante
    const routeParams = this.route.snapshot.paramMap;
    const recordIdFromRoute = routeParams.get('recordid');

    // Puis on cherche la chaine correspondant à cet id
    this.recordService.getRecords().then(resultat=> { this.record = resultat.find(record => record.id === recordIdFromRoute) })

  }

}