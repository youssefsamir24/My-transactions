import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { AmdinsearchPipe } from './amdinsearch.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent } from './charts/charts.component';
// import { ChartModule } from '@syncfusion/ej2-angular-charts';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NavbarComponent,
    NotFoundComponent,
    SearchPipe,
    AmdinsearchPipe,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
