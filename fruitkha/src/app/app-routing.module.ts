import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { TabnewsComponent } from './components/tabnews/tabnews.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: "about", component: AboutComponent, pathMatch:'full'},
  {path: "home", component:HomeComponent,pathMatch:'full'},
  {path: "news", component:TabnewsComponent,pathMatch:'full'},
  {path: "contact", component:ContactComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
