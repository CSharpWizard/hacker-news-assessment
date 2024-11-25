import { TestBed } from '@angular/core/testing';
import { NewsService } from './news.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NewsService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => httpMock.verify());
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should retrieve stories from server', () => {
    const mockResponse = {
      items: [
        { id: 1, title: 'Story 1', url: 'url 1' },
        { id: 2, title: 'Story 2', url: 'url 2' },
      ],
      totalCount: 2,
    };
    service.getStories().subscribe((response) => {
      expect(response.items.length).toBe(2);
      expect(response.items).toEqual(mockResponse.items);
    });
    const req = httpMock.expectOne(
      `/api/news/stories?search=&page=1&pageSize=10`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});