import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaTrabalhoPesquisaComponent } from './dia-trabalho-pesquisa.component';

describe('DiaTrabalhoPesquisaComponent', () => {
  let component: DiaTrabalhoPesquisaComponent;
  let fixture: ComponentFixture<DiaTrabalhoPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaTrabalhoPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaTrabalhoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
