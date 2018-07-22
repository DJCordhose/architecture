
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTablComponent } from './my-tabl.component';

describe('MyTablComponent', () => {
  let component: MyTablComponent;
  let fixture: ComponentFixture<MyTablComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTablComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
