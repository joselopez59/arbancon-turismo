import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlojamientoDetailPage } from './alojamiento-detail.page';

describe('AlojamientoDetailPage', () => {
  let component: AlojamientoDetailPage;
  let fixture: ComponentFixture<AlojamientoDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlojamientoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlojamientoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
