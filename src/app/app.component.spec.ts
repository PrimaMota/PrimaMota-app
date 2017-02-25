/* tslint:disable:no-unused-variable */
import { addProviders, TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


describe('App: Angular2FirebaseAuth', () => {

  beforeEach(() => {
/*
     addProviders([AppComponent,
     LoginComponent,
     HomeComponent,
     AboutComponent]);
*/

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AboutComponent
        ],
        imports: [ RouterTestingModule ]
      });
    TestBed.compileComponents();
  });

/*
  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));
*/


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'PrimaMota!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PrimaMota!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('PrimaMota!');
  }));


});
export class AppModule {}

