import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFooterComponent } from './member-footer.component';

describe('MemberFooterComponent', () => {
  let component: MemberFooterComponent;
  let fixture: ComponentFixture<MemberFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
