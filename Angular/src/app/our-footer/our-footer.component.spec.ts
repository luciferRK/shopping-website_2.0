import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFooterComponent } from './our-footer.component';

describe('OurFooterComponent', () => {
  let component: OurFooterComponent;
  let fixture: ComponentFixture<OurFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
