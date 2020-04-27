import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UnitConverterUiComponent } from './unit-converter-ui/unit-converter-ui.component';


const routes: Routes = [
  {path: '', component: UnitConverterUiComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
