import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QurlComponent} from "./qurl/qurl.component";

const routes: Routes = [
  {path: ':stamp', component: QurlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
