import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ControlContainer } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full', title: 'Home'},
  {path: 'home', component: HomeComponent , title: 'Home'},
  {path:'slider', component: SliderComponent,title: 'Slider'},
  {path:'blog', component: BlogComponent, title: 'Blog'},
  {path:'contact', component: ContactComponent, title: 'Contact'},
  {path:'about', component: AboutComponent, title: 'About'},
  {path: 'parent', component: ParentComponent, title: 'Parent'},
  {path:'**', component: NotFoundComponent, title: 'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
