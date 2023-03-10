import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icons } from 'src/assets/icons';
import { MatExpansionModule } from '@angular/material/expansion'

@Component({
  selector: 'dtheme-details-accordion',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatExpansionModule
  ],
  templateUrl: './details-accordion.component.html',
  styleUrls: ['./details-accordion.component.scss']
})
export class DetailsAccordionComponent {

  icons=icons;

  @Input() title = '';
  @Input() details = '';

}
