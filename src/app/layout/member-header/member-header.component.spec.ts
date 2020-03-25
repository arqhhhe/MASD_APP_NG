import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberHeaderComponent } from './member-header.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('MemberHeaderComponent', () => {
  let component: MemberHeaderComponent;
  let fixture: ComponentFixture<MemberHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule
      ],
      declarations: [ MemberHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
