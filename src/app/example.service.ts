import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private http = inject(HttpClient);

  private thingsUrl = '/assets/things.json'; 
  private areasUrl = '/assets/areas.json';


  getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>(this.thingsUrl);
  }

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.areasUrl);
  }
}


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
