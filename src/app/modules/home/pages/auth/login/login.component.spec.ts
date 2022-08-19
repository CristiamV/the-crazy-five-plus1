import { LoginComponent } from './login.component';
import {FormBuilder, Validators} from "@angular/forms";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionStorageService } from '../../../../../core/services/session-storage/session-storage.service';
import { AuthService } from '../../../../../data/services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../../../shared/shared.module';

describe('LoginComponent',()=>{
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let sessionStorageService: SessionStorageService;  
  let authService: AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [        
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        SharedModule
      ],
      providers: [SessionStorageService, AuthService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    sessionStorageService = TestBed.inject(SessionStorageService);
    authService = TestBed.inject(AuthService);    
    fixture.detectChanges();
  });

  it('should create new', ()  => {    
    expect(component).toBeTruthy();
  });

});
