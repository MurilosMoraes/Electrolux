import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextPage } from './text.page';

describe('TextPage', () => {
  let component: TextPage;
  let fixture: ComponentFixture<TextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
