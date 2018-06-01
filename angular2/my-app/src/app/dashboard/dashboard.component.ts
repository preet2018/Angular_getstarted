import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   tableHeading: String = 'Product Tiltle';
   // tslint:disable-next-line:no-inferrable-types
   showImage: boolean = false;
   listFilter: String = 'cart';
   product: any[] = [{
     'productId' : 2,
     'productName': 'preeti',
     'productCode': 'RTEGTHFYR',
     'productDtae': 'march 18, 2016',
     'discribstion': 'verygood',
     'price': 234,
     'startRating': 4,
     'imgUrl': 'https://www.freepik.com/free-photos-vectors/add-to-cart-button'
       },
       {
      'productId' : 2,
      'productName': 'preeti',
      'productCode': 'RTEGTHFYR',
      'productDtae': 'march 18, 2016',
      'discribstion': 'verygood',
      'price': 234,
      'startRating': 4,
      'imgUrl': 'https://www.freepik.com/free-photos-vectors/add-to-cart-button'
        },
   {
     'productId' : 2,
     'productName': 'preeti',
     'productCode': 'RTEGTHFYR',
     'productDtae': 'march 18, 2016',
     'discribstion': 'verygood',
     'price': 234,
     'startRating': 4,
     'imgUrl': 'https://www.freepik.com/free-photos-vectors/add-to-cart-button'
       },
  {
    'productId' : 2,
    'productName': 'preeti',
    'productCode': 'RTEGTHFYR',
    'productDtae': 'march 18, 2016',
    'discribstion': 'verygood',
    'price': 234,
    'startRating': 4,
    'imgUrl': 'http://img url'
      }
      ];
  constructor() { }

  ngOnInit() {
  }
public toggleImage(): void  {
  this.showImage = !this.showImage ;

}
}
