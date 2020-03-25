import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAuthLayoutComponent } from './member-auth-layout.component';

describe('MemberAuthLayoutComponent', () => {
  let component: MemberAuthLayoutComponent;
  let fixture: ComponentFixture<MemberAuthLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAuthLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
