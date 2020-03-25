import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberBaseLayoutComponent } from './member-base-layout.component';

describe('MemberBaseLayoutComponent', () => {
  let component: MemberBaseLayoutComponent;
  let fixture: ComponentFixture<MemberBaseLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberBaseLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberBaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
