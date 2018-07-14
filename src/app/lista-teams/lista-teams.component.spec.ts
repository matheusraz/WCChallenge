import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTeamsComponent } from './lista-teams.component';

describe('ListaTeamsComponent', () => {
  let component: ListaTeamsComponent;
  let fixture: ComponentFixture<ListaTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
