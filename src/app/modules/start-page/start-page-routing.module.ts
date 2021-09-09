import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {TitleCardComponent} from "./title-card/title-card/title-card.component";

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent,
    data: {title: 'start'}
  }, {
  path: 'title',
    component: TitleCardComponent,
    data: {title: 'title-card'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartPageRoutingModule {
}
