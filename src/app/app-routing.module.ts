import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';


const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    ScrollingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
