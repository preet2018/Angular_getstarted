import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   tableHeading: String = 'Product Tiltle';
   product: any[] = [{
     'productId' : 2,
     'productName': 'preeti',
     'productCode': 'rhyh234',
     'productDtae': 'march 18, 2016',
     'discribstion': 'verygood',
     'price': 88787,
     'startRating': 4,
     'imgUrl': 'http://img url'
       },
       {
      'productId' : 2,
      'productName': 'preeti',
      'productCode': 'rhyh234',
      'productDtae': 'march 18, 2016',
      'discribstion': 'verygood',
      'price': 88787,
      'startRating': 4,
      'imgUrl': 'http://img url'
        },
   {
     'productId' : 2,
     'productName': 'preeti',
     'productCode': 'rhyh234',
     'productDtae': 'march 18, 2016',
     'discribstion': 'verygood',
     'price': 88787,
     'startRating': 4,
     'imgUrl': 'http://img url'
       },
  {
    'productId' : 2,
    'productName': 'preeti',
    'productCode': 'rhyh234',
    'productDtae': 'march 18, 2016',
    'discribstion': 'verygood',
    'price': 88787,
    'startRating': 4,
    'imgUrl': 'http://img url'
      }
      ];
  constructor() { }

  ngOnInit() {
  }

}
