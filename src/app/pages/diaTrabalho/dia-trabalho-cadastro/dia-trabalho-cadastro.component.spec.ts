import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaTrabalhoCadastroComponent } from './dia-trabalho-cadastro.component';

describe('DiaTrabalhoCadastroComponent', () => {
  let component: DiaTrabalhoCadastroComponent;
  let fixture: ComponentFixture<DiaTrabalhoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaTrabalhoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaTrabalhoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
