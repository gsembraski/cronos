import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this.http.get(`${environment.prefixes.default}/getPosts`);
  }

  public getPostsHome(): Observable<any> {
    return this.http.get(
      `${environment.prefixes.default}/getPosts?visibleHome=true&_limit=3`
    );
  }
}
