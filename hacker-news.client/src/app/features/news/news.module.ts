import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [NewsListComponent, NewsCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NewsRoutingModule,
    MaterialModule
  ],
})

export class NewsModule {}