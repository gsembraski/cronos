import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  constructor(private readonly http: HttpClient) {}

  public getServicos(): Observable<any> {
    return this.http.get(`${environment.prefixes.default}/getServices`);
  }

  public getServicesHome(): Observable<any> {
    return this.http.get(
      `${environment.prefixes.default}/getServices?visibleHome=true&_limit=3`
    );
  }
}
