import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyComponentComponent } from './copy-component.component';

describe('CopyComponentComponent', () => {
  let component: CopyComponentComponent;
  let fixture: ComponentFixture<CopyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
