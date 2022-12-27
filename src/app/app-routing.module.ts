import { ReservesComponent } from './pages/reserves/reserves.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AcessoComponent } from './pages/acesso/acesso.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReserveComponent } from './pages/reserve/reserve.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'Reserva',component:ReserveComponent},
  {path:'Reservas', component:ReservesComponent, pathMatch:'full'},
  {path:'Cardapio',component:MenuComponent},
  {path:'Sobre',component:AboutComponent},
  {path:'Perfil',component:ProfileComponent},
  {path:'Acesso', component:AcessoComponent},
  {path:'Cadastro', component:CadastroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
