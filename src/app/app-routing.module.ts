import { EditReserveComponent } from './pages/edit-reserve/edit-reserve.component';
import { ReservesComponent } from './pages/reserves/reserves.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AcessoComponent } from './pages/acesso/acesso.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
// import { ProfileComponent } from './pages/profile/profile.component';
import { ReserveComponent } from './pages/reserve/reserve.component';

import { AuthService } from './usuario/auth.service';
import { AuthGuard } from './usuario/auth.guard';


const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'Reserva', component:ReserveComponent},
  {path:'Reservas', component:ReservesComponent},
  {path:'Cardapio',component:MenuComponent},
  {path:'Sobre',component:AboutComponent},
  // {path:'Perfil',component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'Acesso', component:AcessoComponent},
  {path:'Cadastro', component:CadastroComponent},
  {path:'Editar', component:EditReserveComponent},
  {path:'Editar/Reserva/:id', component:EditReserveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
