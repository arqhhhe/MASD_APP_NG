import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MockDataService} from '../../../shared/mock-data.service';

@Component({
  selector: 'masd-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private mockData: MockDataService) { }

  ngOnInit() {
    this.mockData.isLogedIn = false;
    this.router.navigate(['/login']);
  }

}
