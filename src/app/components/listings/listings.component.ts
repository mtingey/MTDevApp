import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../../services/listings/listings.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})

export class ListingsComponent implements OnInit {

  constructor(
    listingService: ListingsService
  ) { }

  ngOnInit() {
  }

  public getListings(): void {
    
  }

}
