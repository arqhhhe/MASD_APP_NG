import { Component, OnInit } from '@angular/core';
import {ContextService} from '../../shared/context.service';

@Component({
  selector: 'masd-member-base-layout',
  templateUrl: './member-base-layout.component.html',
  styleUrls: ['./member-base-layout.component.scss']
})
export class MemberBaseLayoutComponent implements OnInit {

  schools;

  constructor(private context: ContextService) { }

  ngOnInit() {
    this.schools = this.context.schools;
  }

}
