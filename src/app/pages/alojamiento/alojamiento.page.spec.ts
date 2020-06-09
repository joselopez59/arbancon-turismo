import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlojamientoPage } from './alojamiento.page';

describe('AlojamientoPage', () => {
  let component: AlojamientoPage;
  let fixture: ComponentFixture<AlojamientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlojamientoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlojamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
