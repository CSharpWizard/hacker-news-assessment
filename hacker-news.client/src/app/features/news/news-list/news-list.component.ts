import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../../core/services/news.service';
import { PageEvent, MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css',
})
export class NewsListComponent implements OnInit{
  newsList: any[] = [];
  searchTerm: string = '';
  page: number = 1;
  pageSize: number = 10;
  totalNews: number = 0;
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Access paginator

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loadStories();
  }

  loadStories(): void {
    this.loading = true;
    this.newsService
      .getStories(this.searchTerm, this.page, this.pageSize)
      .subscribe(
        (response: any) => {
          this.newsList = response.items;
          this.totalNews = response.totalCount || 0;
          this.loading = false;
        },
        (error) => {
          console.log(error); 
          this.loading = false;
        }
      );
  }

  onSearch(): void {
    this.page = 1;
    this.loadStories();
    if (this.paginator) {
      this.paginator.firstPage(); 
    }
  }

  handlePageChange(): void {
    this.loadStories();
  }

  onPageChange(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.handlePageChange();
  }
}