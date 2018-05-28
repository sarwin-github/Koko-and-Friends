import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import { slideIn } from '../animations/slide-in';
import { scrollAnimation } from '../animations/slide-from-left';
import { fadeInFrom } from '../animations/fade-in-from';

@Component({
  selector: 'app-home',
  animations: [fadeIn, slideIn, scrollAnimation, fadeInFrom],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  state = 'hide';
  navTop = 'hide';
  frameZone: any;

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {

    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset;

    if (scrollPosition <= 250) {
      this.state = 'show';
      this.navTop = 'hide';
    } else {
      this.state = 'hide';
      this.navTop = 'show';
    }

  }

  navigateTop(){
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

}
