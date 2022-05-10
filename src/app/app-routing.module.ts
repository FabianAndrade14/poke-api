import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { EighthGenerationComponent } from './pages/generaciones/eighth-generation/eighth-generation.component';
import { FifthGenerationComponent } from './pages/generaciones/fifth-generation/fifth-generation.component';
import { FourthGenerationComponent } from './pages/generaciones/fourth-generation/fourth-generation.component';
import { SecondGenerationComponent } from './pages/generaciones/second-generation/second-generation.component';
import { SeventhGenerationComponent } from './pages/generaciones/seventh-generation/seventh-generation.component';
import { SixthGenerationComponent } from './pages/generaciones/sixth-generation/sixth-generation.component';
import { ThirdGenerationComponent } from './pages/generaciones/third-generation/third-generation.component';

const routes: Routes = [
  { path: 'home', component: PokeTableComponent },
  { path: 'johto', component: SecondGenerationComponent },
  { path: 'hoenn', component: ThirdGenerationComponent },
  { path: 'sinnoh', component: FourthGenerationComponent },
  { path: 'teselia', component: FifthGenerationComponent },
  { path: 'kalos', component: SixthGenerationComponent },
  { path: 'alola', component: SeventhGenerationComponent },
  { path: 'galar', component: EighthGenerationComponent },

  { path: 'pokeDetail/:id', component: PokeDetailComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
