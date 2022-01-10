import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Record, records } from '../records';


@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent implements OnInit {

  record: Record | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // D'abord on récupère l'id de l'enregistrement depuis la route courante
    const routeParams = this.route.snapshot.paramMap;
    const recordIdFromRoute = Number(routeParams.get('recordId'));

    // Puis on cherche la chaine correspondant à cet id
    this.record = records.find(record => record.id === recordIdFromRoute);

  }

}
