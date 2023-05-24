import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/service/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../auth.routing';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;
  let authService: AuthService;
  let cookieService: CookieService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CardModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    authService = TestBed.inject(AuthService);
    cookieService = fixture.debugElement.injector.get(CookieService);
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the login form', () => {
    const submitButton = fixture.nativeElement.querySelector('#submit');
    const registerButton = fixture.nativeElement.querySelector('#register');

    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.get('username')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined();
    expect(submitButton).toBeTruthy();
    expect(registerButton).toBeTruthy();
  });

  it('should call AuthService.login when login is called', () => {
    component.loginForm.patchValue({
      username: 'test2',
      password: 'pass',
    });
    fixture.detectChanges();

    const submitButton = fixture.nativeElement.querySelector('#submit');
    spyOn(authService, 'login').and.callThrough();

    submitButton.click();

    expect(authService.login).toHaveBeenCalled();
  });

  it('should set jwt token', () => {
    spyOn(authService, 'login').and.returnValue(of({ token: 'jwt' }));
    spyOn(sessionStorage, 'setItem');
    const button = fixture.nativeElement.querySelector('#submit');

    component.loginForm.patchValue({
      username: 'test2',
      password: 'pass',
    });
    fixture.detectChanges();

    button.click();

    expect(sessionStorage.setItem).toHaveBeenCalledWith('jwtToken', 'jwt');
  });

  it('should not set jwt token', function () {
    spyOn(authService, 'login').and.returnValue(
      throwError({ error: 'Invalid username or password' })
    );
    spyOn(sessionStorage, 'setItem');
    spyOn(router, 'navigate').and.callThrough();
    const button = fixture.nativeElement.querySelector('#submit');

    component.loginForm.patchValue({
      username: 'test2',
      password: 'pass',
    });
    fixture.detectChanges();

    button.click();

    expect(sessionStorage.setItem).not.toHaveBeenCalled();
  });

  it('should navigate after successfully logged in', function () {
    spyOn(authService, 'login').and.returnValue(of({ token: 'jwt' }));
    spyOn(router, 'navigate').and.callThrough();
    const button = fixture.nativeElement.querySelector('#submit');

    component.loginForm.patchValue({
      username: 'test2',
      password: 'pass',
    });
    fixture.detectChanges();

    button.click();

    expect(router.navigate).toHaveBeenCalledWith(['about']);
  });

  it("shouldn't navigate after fail logg in", function () {
    spyOn(authService, 'login').and.returnValue(
      throwError({ error: 'Invalid username or password' })
    );
    spyOn(router, 'navigate').and.callThrough();
    const button = fixture.nativeElement.querySelector('#submit');

    component.loginForm.patchValue({
      username: 'test2',
      password: 'pass',
    });
    fixture.detectChanges();

    button.click();

    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should submit button be enabled', function () {
    component.loginForm.patchValue({
      username: 'test2',
      password: 'pass',
    });
    const button = fixture.nativeElement.querySelector('#submit');
    fixture.detectChanges();

    expect(button.disabled).toBe(false);
  });

  it('should submit button be disabled', function () {
    const button = fixture.nativeElement.querySelector('#submit');

    expect(button.disabled).toBe(true);
  });
});
