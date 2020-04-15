import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ContextService} from '../../shared/context.service';
import {NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'masd-member-base-layout',
  templateUrl: './member-base-layout.component.html',
  styleUrls: ['./member-base-layout.component.scss']
})
export class MemberBaseLayoutComponent implements OnInit, AfterViewChecked {

  schools;
  currentUrl;


  constructor(
    private context: ContextService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator

        // Present error to user
        console.log(event.error);
      }
      this.currentUrl = this.router.url;
    });
  }

  ngOnInit() {
    console.log('this.router.url', this.router.url);
    this.schools = this.context.schools;
    this.currentUrl = this.router.url;
  }

  isCurrentSchool(schoolId) {
    return schoolId == this.context.meta.current.school.id;
  }

  ngAfterViewChecked() {
    this.changeDetectorRef.detectChanges();
  }

}
