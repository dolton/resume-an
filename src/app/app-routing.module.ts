import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web-components/home/home.component';
import { ContactUsComponent } from './web-components/contact-us/contact-us.component';
import { ResumeComponent } from './web-components/resume/resume.component';
import { PortfolioComponent } from './web-components/portfolio/portfolio.component';
import { BlogComponent } from './web-components/blog/blog.component';
import { AboutComponent } from './web-components/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
