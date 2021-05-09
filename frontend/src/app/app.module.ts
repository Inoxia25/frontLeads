import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeadCardComponent } from './lead-card/lead-card.component';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { LeadFormComponent } from './lead-form/lead-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { LeadsServiceService} from './leads-service.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadCardComponent,
    LeadFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    CoolSocialLoginButtonsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
<<<<<<< HEAD
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('626624130121-jhr1s29frb9hmf8kjsms9hv4r09o1pej.apps.googleusercontent.com')
          }
          
        ]
      } as SocialAuthServiceConfig,
    }
  ],
=======
    HttpClientModule,
    
    MatSnackBarModule,
  ],
  providers: [LeadsServiceService],
>>>>>>> b9be3f194a0f2d5ccce5c40ef4849efb4e99062f
  bootstrap: [AppComponent]
})
export class AppModule { }
