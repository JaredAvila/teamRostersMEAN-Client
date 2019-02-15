import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlayersComponent } from "./players/players.component";
import { StatusComponent } from "./status/status.component";
import { ListComponent } from "./list/list.component";
import { AddPlayerComponent } from "./add-player/add-player.component";

const routes: Routes = [
  {
    path: "",
    component: PlayersComponent,
    children: [
      {
        path: "",
        component: ListComponent
      },
      {
        path: "add",
        component: AddPlayerComponent
      }
    ]
  },
  {
    path: "status",
    component: StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
