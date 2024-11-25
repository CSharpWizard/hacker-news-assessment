import { Component, Input} from '@angular/core';
import News from '../../../core/models/news';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  @Input() news?: News;
}