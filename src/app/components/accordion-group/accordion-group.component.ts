import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.css']
})
export class AccordionGroupComponent implements OnInit {

	group = [];
	addChildren(child) {
		this.group.push(child);
	}

  constructor() { }

  open(currentChild) {
  	this.group.forEach(child =>{
  		if(child == currentChild) {
  			currentChild.active = true;
  		} else {  			
  			child.active = false;
  		}
  	})
  }

  ngOnInit() {
  }
}
