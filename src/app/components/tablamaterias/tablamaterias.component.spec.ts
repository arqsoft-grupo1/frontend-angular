import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamateriasComponent } from './tablamaterias.component';

describe('TablamateriasComponent', () => {
  let component: TablamateriasComponent;
  let fixture: ComponentFixture<TablamateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablamateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablamateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
