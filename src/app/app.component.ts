import { Component } from '@angular/core';


import { Accordion } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  cars: any[];
  selectedCar: string;

  accordions: Accordion[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getAccordion();


    // Data Table
     this.cars = [
            {vin: 'Apple', year: '51%', brand: '40%', color: '$54,406.00'},
            {vin: 'Samsung', year: '83%', brand: '96%', color: '$423,132'},
            {vin: 'Microsoft', year: '38%', brand: '5%', color: '$12,321'},
            {vin: 'Philips', year: '49%', brand: '22%', color: '$745,232'},
            {vin: 'Song', year: '17%', brand: '79%', color: '$643,242'},
            {vin: 'LG', year: '52%', brand: ' 65%', color: '$421,132'},
            {vin: 'Sharp', year: '82%', brand: '12%', color: '$131,211'},
            {vin: 'Panasonic', year: '44%', brand: '45%', color: '$66,442'},
            {vin: 'HTC', year: '90%', brand: '56%', color: '$765,442'},
            {vin: 'Toshiba', year: '75%', brand: '54%', color: '$21,212'}
        ];
  }

  getAccordion(): void {
    this.heroService.getAccordion()
    .subscribe(accordions => this.accordions = accordions);
  }

  /* Dialogbox */

    display: boolean = false;

    showDialog() {
        this.display = true;
    }

    /* Data Table */
    parentElement: any;

    
    getParentByTagName(node, tagname) {
      var parent;
      if (node === null || tagname === '') return;
      if(node.tagName.toLowerCase() == "td") {
        parent = node;
      } else {
        parent  = node.parentNode;
        tagname = tagname.toUpperCase();

        while (parent.tagName !== "HTML") {
          if (parent.tagName === tagname) {
            return parent;
          }
          parent = parent.parentNode;
        }
      }

        return parent;
    }

    getCellValue(event) {

      this.parentElement = this.getParentByTagName(event.originalEvent.target ,"td")

      if(document.getElementsByClassName("editElement").length > 0) {
        document.getElementsByClassName("editElement")[0].classList.remove("editElement");
      }
      this.parentElement.className += " editElement";
      this.selectedCar = this.parentElement.textContent.trim();
      this.display = true;
    }

    /* Editor */
    editValue: string;
    getEditorValue(e) {
      // console.log(e.textValue);
      this.editValue = e.htmlValue;
    }

    doneEdit() {
      this.selectedCar =this.editValue;
      document.getElementsByClassName("editElement")[0].children[0].innerHTML = this.editValue;
      this.display = false;
    }
     
}
