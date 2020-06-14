import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscapadasPage } from './escapadas.page';

describe('EscapadasPage', () => {
  let component: EscapadasPage;
  let fixture: ComponentFixture<EscapadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscapadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
