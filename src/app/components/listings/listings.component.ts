import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../../services/listings/listings.service';
import { Listing } from '../../models/listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})

export class ListingsComponent {
  public listings: Listing[] = [];
  clickMessage: string;
  searchString: string;

  // this.queriedListings = this.queryString ? this.queryString : this.listings;

  constructor(
    private listingService: ListingsService
  ) { }

  onKey(event: any) {
    this.searchString = event.target.value;
  }

  onSearchClick() {
    this.clickMessage = 'You clicked search!';
    console.log(this.clickMessage);
    this.searchString = this.searchString.replace(/[ ]/g, '%20');
    console.log(this.searchString);

    this.listingService.getListings(this.searchString)
      .subscribe(listings => {
        this.listings = listings;
      });
    this.listingService.resetListingsUrl();
  }

  // ngOnInit(): void {
  //   this.listingService.getListings()
  //     .subscribe(listings => {
  //       this.listings = listings;
  //     });
  // }

}
