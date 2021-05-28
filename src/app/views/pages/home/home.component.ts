import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,} from 'swiper/core';// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  preserveWhitespaces: true,
})
export class HomeComponent implements OnInit {
  // homeSliderOptions: OwlOptions = {
  //   animateOut: 'fadeOutLeft',
  //   animateIn: 'fadeIn',
  //   items: 2,
  //   nav: true,
  //   dots: false,
  //   autoplayTimeout: 9000,
  //   autoplaySpeed: 5000,
  //   autoplay: true,
  //   loop: true,
  //   navText: [
  //     "<img src='assets/img/slider/prev-1.png'>",
  //     "<img src='assets/img/slider/next-1.png'>",
  //   ],
  //   mouseDrag: true,
  //   touchDrag: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     480: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 1,
  //     },
  //     750: {
  //       items: 1,
  //     },
  //     1000: {
  //       items: 1,
  //     },
  //     1200: {
  //       items: 1,
  //     },
  //   },
  // };

  slidesStore = [
    {
      id: '1',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_1',
      title: 'Image_1',
    },
    {
      id: '2',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_2',
      title: 'Image_3',
    },
    {
      id: '3',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_3',
      title: 'Image_3',
    },
    {
      id: '4',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_4',
      title: 'Image_4',
    },
    {
      id: '5',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_5',
      title: 'Image_5',
    },
    {
      id: '6',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_6',
      title: 'Image_6',
    },
    {
      id: '7',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_7',
      title: 'Image_7',
    },
    {
      id: '8',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_8',
      title: 'Image_8',
    },
    {
      id: '9',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_9',
      title: 'Image_9',
    },
    {
      id: '10',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_10',
      title: 'Image_10',
    },
    {
      id: '11',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_11',
      title: 'Image_11',
    },
    {
      id: '12',
      src: 'http://via.placeholder.com/265x167',
      alt: 'Image_12',
      title: 'Image_12',
    },
  ];

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  ngOnInit(): void {}
}
