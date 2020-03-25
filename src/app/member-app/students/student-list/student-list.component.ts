import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {MockDataService} from '../../../shared/mock-data.service';

@Component({
  selector: 'masd-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students;
  constructor(private mockData: MockDataService, private router: Router) { }

  ngOnInit() {
    this.students = this.mockData.students;
  }

  loadDetail(index) {
    this.router.navigate(['students', index]);
  }

}
