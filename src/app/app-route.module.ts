import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DataFilterComponent} from "./datafilter/datafilter.component";

const APP_ROUTE: Routes = [
    {path: '', component: DataFilterComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTE)],
  declarations: [],
  entryComponents: []
})
export class AppRoutingModule {
}