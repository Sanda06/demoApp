import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { ThingAsyncComponent } from "./module2/thing-async/thing-async.component";
// import { AreaAsyncComponent } from "./module2/area-async/area-async.component";
import { FirstModuleLayoutComponent } from "./module1/first-module-layout/first-module-layout.component";
import { SecondModuleComponent } from "./module2/second-module/second-module.component";

const routes: Routes = [
    {
        path:'',
        component: FirstModuleLayoutComponent
    },
    {
        path:'first-module',
        component: FirstModuleLayoutComponent
    },
    {
        path:'second-module',
        component: SecondModuleComponent
    },
    { path: '', pathMatch: 'full', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}