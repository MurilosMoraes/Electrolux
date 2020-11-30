import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SectionPage } from './section.page';

describe('SectionPage', () => {
  let component: SectionPage;
  let fixture: ComponentFixture<SectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
