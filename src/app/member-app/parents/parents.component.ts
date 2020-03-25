import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'masd-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {

  isDetailView = false;
  constructor() { }

  ngOnInit() {
    this.isDetailView = false;
  }

  onDetailLoaded(){
    this.isDetailView = true;
  }

}
