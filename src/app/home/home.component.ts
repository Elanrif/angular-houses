import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { NgFor } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, NgFor],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filtered/>
        <button class="primary" type="button" (click)="filterResults(filtered.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      />
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService);
  
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation) => 
    housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
  );

  }
}
