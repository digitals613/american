import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  image = [
    {name: "Godric", review :"From booking to delivery, my experience was great! Their enclosed transport price was very reasonable and my car arrived in 2 days. I will DEFINITELY use American Auto Transports in the future!"},
    {name: "Aethelred", review :"American Auto Transports went above and beyond to get my son's new car to him at the military installation he's stationed at. Delivered on time and in perfect condition. A proven winner in my book!"},
    {name: "Wynstan", review :"This is the third time we’ve used American Auto Transports to ship our daughter’s car from Houston to Atlanta and back. We recommend them highly. Pick up and drop off could not be easier!"},
    {name: "Godric", review :"From booking to delivery, my experience was great! Their enclosed transport price was very reasonable and my car arrived in 2 days. I will DEFINITELY use American Auto Transports in the future!"},
    {name: "Aethelred", review :"American Auto Transports went above and beyond to get my son's new car to him at the military installation he's stationed at. Delivered on time and in perfect condition. A proven winner in my book!"},
    {name: "Wynstan", review :"This is the third time we’ve used American Auto Transports to ship our daughter’s car from Houston to Atlanta and back. We recommend them highly. Pick up and drop off could not be easier!"},
  ]
  constructor() { }

  ngOnInit(): void {
    this.CategorySlider();
  }
  // slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};
  public slideConfig :any;
  CategorySlider() {
    this.slideConfig = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };
  }
}
