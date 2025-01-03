import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  template: `
    <section class="listing" [routerLink]="['/housing', housingLocation.id]" >
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
    </section>
  `,
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
