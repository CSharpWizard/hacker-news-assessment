import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsListComponent } from './news-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsListComponent],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        FormsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve stories from the server', () => {
    const mockResponse = {
      items: [
        { id: 1, title: 'Story 1', url: 'url 1' },
        { id: 2, title: 'Story 2', url: 'url 2' },
      ],
      totalCount: 2,
    };

    const req = httpMock.expectOne(
      `/api/news/stories?search=&page=1&pageSize=10`
    );

    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
    expect(component.newsList).toEqual(mockResponse.items);
  });
});