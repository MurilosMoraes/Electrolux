import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreliminaryPage } from './preliminary.page';

describe('PreliminaryPage', () => {
  let component: PreliminaryPage;
  let fixture: ComponentFixture<PreliminaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreliminaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreliminaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
