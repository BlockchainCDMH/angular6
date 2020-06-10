import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListwishesComponent } from './listwishes.component';

describe('ListwishesComponent', () => {
  let component: ListwishesComponent;
  let fixture: ComponentFixture<ListwishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListwishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListwishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
