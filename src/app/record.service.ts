import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from './record';
//import { writeFileSync, readFileSync } from 'fs';
//import fs from 'fs';

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

  updateJson(record: Record) {
    this.getRecords().then(allRecords=>{
      allRecords[allRecords.findIndex(element=>{
        return element.id == record.id
      })] = record
    })
    //fs.writeFile('/assets/records.json', allRecords)
    
  }
}
