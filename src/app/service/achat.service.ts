import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchatService {
  api: string = 'http://10.156.93.190:5000/api';
  constructor(private http: HttpClient) { }

  getNombreAchatBovin(){
    return this.http.get(this.api+'/nbreachatbovin/')
  }
}
