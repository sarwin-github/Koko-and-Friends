import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
import { slideIn } from '../../animations/slide-in';
import { scrollAnimation } from '../../animations/slide-from-left';
import { fadeInFrom } from '../../animations/fade-in-from';

@Component({
	selector: 'home-tours',
	animations: [fadeIn, slideIn, scrollAnimation, fadeInFrom],
	templateUrl: './tours.component.html',
	styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

	state = 'hide';
	constructor(public el: ElementRef) { }

	ngOnInit() {
	}

	@HostListener('window:scroll', ['$event'])
	checkScroll() {
		const div = document.getElementById('section-tour').offsetTop;
	  	const componentPosition = this.el.nativeElement.offsetTop;
	  	const scrollPosition = window.pageYOffset;

	  	if (scrollPosition >= div - 500) {
	    	this.state = 'show';
	  	} else {
	    	this.state = 'hide';
	  	}

	}

}
