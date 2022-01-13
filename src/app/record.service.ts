import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from './record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }

  getRecords():Promise <Array<Record>> {
    return new Promise((resolve, reject)=>
    { 
      this.http.get<Array<Record>>('/assets/records.json').subscribe(resultat=>{ resolve(resultat) });
     });
  }
}
