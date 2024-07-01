import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { ContentComponent } from './Components/Contents/content/content.component';
import { HeaderComponent } from './Components/Contents/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ContentComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
