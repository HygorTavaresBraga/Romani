import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'Agendamento',component:SchedulingComponent},
  {path:'Sobre',component:AboutComponent},
  {path:'Perfil',component:ProfileComponent},
  {path:'Cardapio',component:MenuComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
