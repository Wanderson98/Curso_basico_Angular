import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenerComponent } from "./components/list-rener/list-rener.component";

const routes: Routes = [

    {path:  '', component: FirstComponentComponent},
    {path:  'list', component: ListRenerComponent},

]

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
   