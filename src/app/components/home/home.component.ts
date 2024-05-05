import { Component } from '@angular/core';
import { CardsComponent } from '../../shared/componentes/cards/cards.component';
import { BannerComponent } from '../../shared/componentes/banner/banner.component';
import { ContentComponent } from '../../shared/componentes/content/content.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, CardsComponent, ContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
