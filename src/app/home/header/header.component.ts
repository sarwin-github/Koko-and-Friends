import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
import { slideIn } from '../../animations/slide-in';
import { scrollAnimation } from '../../animations/slide-from-left';
import { fadeInFrom } from '../../animations/fade-in-from';


@Component({
	selector: 'home-header',
	animations: [fadeIn, slideIn, scrollAnimation, fadeInFrom],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	state = 'show';
	constructor(public el: ElementRef) { }

	ngOnInit() {
	}

	@HostListener('window:scroll', ['$event'])
	checkScroll() {

	  const componentPosition = this.el.nativeElement.offsetTop
	  const scrollPosition = window.pageYOffset;

	  if (scrollPosition <= 500) {
	    this.state = 'show';
	  } else {
	    this.state = 'hide';
	  }

	}

}
