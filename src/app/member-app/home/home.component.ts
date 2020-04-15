import {Component, OnInit} from '@angular/core';
import {MockDataService} from '../../shared/mock-data.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';
import {ContextService} from '../../shared/context.service';

@Component({
  selector: 'masd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private context: ContextService
  ) {
  }

  ngOnInit() {
    if (!this.auth.isLogedIn()) {
      this.router.navigate(['/login']);
    } else {
      if (!this.context.isContextExist()) {

      }
    }

    console.log('this.route.snapshot.params', this.route.snapshot.params);

    if ('schoolId' in this.route.snapshot.params) {
      const schoolId = this.route.snapshot.params['schoolId'];
      const refererUrl = this.route.snapshot.params['url'];
      this.context.setCurrentSchool(schoolId);
      this.router.navigateByUrl(refererUrl);

      // this.route.params.subscribe(
      //   (params: Params) => {
      //     const schoolId = params['schoolId'];
      //     const refererUrl = this.route.snapshot.params['url'];
      //     this.context.setCurrentSchool(schoolId);
      //     this.router.navigateByUrl(refererUrl);
      //   }
      // );
    }
  }

}
