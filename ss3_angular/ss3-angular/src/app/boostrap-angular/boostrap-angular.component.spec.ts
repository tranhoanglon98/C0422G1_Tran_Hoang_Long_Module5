import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapAngularComponent } from './boostrap-angular.component';

describe('BoostrapAngularComponent', () => {
  let component: BoostrapAngularComponent;
  let fixture: ComponentFixture<BoostrapAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostrapAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostrapAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
