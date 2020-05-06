import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { E404Component } from './e404/e404.component';
import { AboutComponent } from './about/about.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [

  // Rota não especificada é redirecionada para a "home"
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Rota para página "Home"
  { path: 'home', component: HomeComponent },

  // Rota para a listagem dos games
  { path: 'list', component: ListComponent, data: { title: 'Lista de Jogos' } },

  // Rota para novo jogo
  { path: 'new', component: NewComponent, data: { title: 'Novo Jogo' } },

  // Rota para página "Sobre"
  { path: 'about', component: AboutComponent, data: { title: 'Sobre o My Games' } },

  // Rota para editar um documento
  { path: 'edit/:id', component: EditComponent, data: { title: 'Editar Jogo' } },

  // Rota desconhecida é redirecionada para o componente "Erro 404"
  { path: '**', component: E404Component, data: { title: 'Página não encontrada' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
