import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../../services/listings/listings.service';
import { Listing } from '../../models/listing';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})

export class ListingsComponent implements OnInit {
  // public queryString: string = 'albert%20lee%20hh';
  public listings: Listing[] = [];
  // public queriedListings = this.queryString ? this.queryString : this.listings;

  constructor(
    private listingService: ListingsService
  ) { }

  ngOnInit(): void {
    this.listingService.getListings()
      .subscribe(listings => {
        this.listings = listings;
        // this.queriedListings = this.listings;
      });
  }


}
