import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './extra/home/home.component';
import { NavComponent } from './layout/nav/nav.component';
import { BodyComponent } from './layout/body/body.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './extra/about/about.component';
import { ServiceComponent } from './extra/service/service.component';
import { RegitrationComponent } from './auth/regitration/regitration.component';
import { UserModule } from './user/user.module';
import { ApiService } from './user/api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    RegitrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
