import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-player",
  templateUrl: "./add-player.component.html",
  styleUrls: ["./add-player.component.css"]
})
export class AddPlayerComponent implements OnInit {
  player: Object = {
    name: "",
    pos: "",
    game1: "un",
    game2: "un",
    game3: "un"
  };
  form: Boolean = true;
  error: String = "";
  constructor(private service: DataService, private router: Router) {}

  ngOnInit() {}

  onAddPlayer() {
    this.service.addPlayer(this.player).subscribe(data => {
      if (data["message"] === "error") {
        this.error = data["error"]["errors"]["name"]["message"];
        return;
      }
      this.error = "";
      this.player["name"] = "";
      this.player["pos"] = "";
      this.router.navigate(["/"]);
    });
  }
}
