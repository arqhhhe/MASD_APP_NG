import {Component, OnInit} from '@angular/core';
import {MockDataService} from '../../shared/mock-data.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';

@Component({
    selector: 'masd-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private mockData: MockDataService,
        private router: Router,
        private auth: AuthService
    ) {
    }

    ngOnInit() {
        if (!this.auth.isLogedIn()) {
            this.router.navigate(['/login']);
        }
    }

}
