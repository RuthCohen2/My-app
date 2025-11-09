import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tascks } from './tascks';

describe('Tascks', () => {
  let component: Tascks;
  let fixture: ComponentFixture<Tascks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tascks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tascks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
