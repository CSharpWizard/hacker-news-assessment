import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getStories(
    search: string = '',
    page: number = 1,
    pageSize: number = 10
  ): Observable<any> {
    const params = { search, page, pageSize: pageSize.toString() };
    return this.http.get(`/api/news/stories`, { params });
  }
}