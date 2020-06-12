import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastronomiaDetailPage } from './gastronomia-detail.page';

describe('GastronomiaDetailPage', () => {
  let component: GastronomiaDetailPage;
  let fixture: ComponentFixture<GastronomiaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastronomiaDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastronomiaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
