import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContentComponent } from './app-content/app-content.component';
import { LoginComponent } from './root/pages/login/login.component';
import { HeaderComponent } from './app-content/header/header.component';
import { LeftSidebarComponent } from './app-content/left-sidebar/left-sidebar.component';
import { ContentComponent } from './app-content/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContentComponent,
    LoginComponent,
    HeaderComponent,
    LeftSidebarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
