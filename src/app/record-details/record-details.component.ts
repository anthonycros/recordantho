import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../record';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.css']
})
export class RecordDetailsComponent implements OnInit {

  record: Record | undefined;

  submitted = false;

  constructor(
    private route: ActivatedRoute, 
    private recordService: RecordService,
    private location: Location
    ) { }

  ngOnInit(): void {
    // D'abord on récupère l'id de l'enregistrement depuis la route courante
    const routeParams = this.route.snapshot.paramMap;
    const recordIdFromRoute = routeParams.get('id');

    // Puis on cherche la chaine correspondant à cet id
    this.recordService.getRecords().then(resultat=> 
      { 
        this.record = resultat.find(record => record.id === recordIdFromRoute) 
      })
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() { this.submitted = true; }

}
