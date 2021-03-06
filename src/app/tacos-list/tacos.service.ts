import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Taco } from './taco.model';

const TACOS_API = 'https://tacofancy.blob.core.windows.net/data/data.json';
@Injectable({
  providedIn: 'root'
})
export class TacosService {
  constructor(private http: HttpClient) {}

  getTacos() {
    return this.http.get<Array<Taco>>(`${TACOS_API}`);
  }

  getTaco() {
    return this.http.get<Taco>(`${TACOS_API}`);
  }
}
