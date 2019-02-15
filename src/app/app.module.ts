import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PlayersComponent } from "./players/players.component";
import { ListComponent } from "./list/list.component";
import { AddPlayerComponent } from "./add-player/add-player.component";
import { StatusComponent } from "./status/status.component";
import { GameComponent } from "./game/game.component";
import { DataService } from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    ListComponent,
    AddPlayerComponent,
    StatusComponent,
    GameComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
