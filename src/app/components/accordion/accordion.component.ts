import { Component, OnInit, Input } from '@angular/core';
import { AccordionGroupComponent } from '../accordion-group/accordion-group.component';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
	@Input() title: string;
	active= false;

  constructor(private accrodions: AccordionGroupComponent) { }

  ngOnInit() {
  	this.accrodions.addChildren(this);
  }

  onSelect() {
  	// this.active = true;
  	this.accrodions.open(this);
  }

}
