import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JustificationPage } from './justification.page';

describe('JustificationPage', () => {
  let component: JustificationPage;
  let fixture: ComponentFixture<JustificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JustificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
