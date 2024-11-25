import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Thing {
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: string;
  countActive: number;
}

export interface Area {
  areaId: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  private thingsUrl = 'assets/things.json'; 
  private areasUrl = 'assets/areas.json';

  constructor(private http: HttpClient) { }

  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>(this.thingsUrl);
  }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.areasUrl);
  }
}