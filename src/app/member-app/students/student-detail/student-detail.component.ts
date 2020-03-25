import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {MockDataService} from '../../../shared/mock-data.service';

@Component({
  selector: 'masd-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  
  public student;

  constructor(private route: ActivatedRoute, private mockData: MockDataService) {
  }

  ngOnInit() {
    const index = this.route.snapshot.params['id'];
    this.student = this.mockData.parents[index];

    this.route.params.subscribe(
      (params: Params) => {
        const sIndex = params['id'];
        this.student = this.mockData.parents[sIndex];
      }
    );
  }

}
