import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeevoDesafioComponent } from './keevo-desafio.component';

describe('KeevoDesafioComponent', () => {
  let component: KeevoDesafioComponent;
  let fixture: ComponentFixture<KeevoDesafioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeevoDesafioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeevoDesafioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
