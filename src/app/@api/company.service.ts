import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private readonly http: HttpClient) {}

  public getTexts(): Observable<any> {
    return this.http.get(`${environment.prefixes.default}/GetTextAboutUs`);
  }

  public getFolders(): Observable<any> {
    return this.http.get(`${environment.prefixes.default}/getFolderHome`);
  }

  public getEmployee(): Observable<any> {
    return this.http.get(`${environment.prefixes.default}/getEmployee`);
  }
}
