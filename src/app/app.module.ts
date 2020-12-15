import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHeaderComponent } from './app-layout/app-header/app-header.component';
import { AppBodyComponent } from './app-layout/app-body/app-body.component';
import { AppFooterComponent } from './app-layout/app-footer/app-footer.component';
import { NavbarComponent } from './app-layout/app-header/navbar/navbar.component';
import { HomeComponent } from './web-components/home/home.component';
import { PortfolioComponent } from './web-components/portfolio/portfolio.component';
import { ResumeComponent } from './web-components/resume/resume.component';
import { AboutComponent } from './web-components/about/about.component';
import { BlogComponent } from './web-components/blog/blog.component';
import { ContactUsComponent } from './web-components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppBodyComponent,
    AppFooterComponent,
    NavbarComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    AboutComponent,
    BlogComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
