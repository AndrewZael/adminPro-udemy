import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'

//Routes
import { APP_ROUTES } from './app.routes'
import { RegisterComponent } from './login/register.component'
import { PagesModule } from './pages/pages.module';

//Servicios
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
