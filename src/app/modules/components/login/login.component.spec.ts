/* tslint:disable:no-unused-variable */
import {TestBed, getTestBed} from '@angular/core/testing';
import {LoginComponent} from "./login.component";
import {RouterTestingModule} from "@angular/router/testing";

describe(`LoginComponent`, () => {

  let component: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent
      ],
      imports: [ RouterTestingModule ]
    });
    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

});
