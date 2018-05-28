import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	state = 'hide';
  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {

  	const componentPosition = this.el.nativeElement.offsetTop
  	const scrollPosition = window.pageYOffset;

  	if (scrollPosition <= 250) {
  		this.state = 'show';
  	} else {
  		this.state = 'hide';
  	}

  }

}
