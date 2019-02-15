import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-status",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.css"]
})
export class StatusComponent implements OnInit {
  game: Number = 1;
  players: Array<Object>;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.getAllPlayers();
  }
  getAllPlayers() {
    this.service.getAllPlayers().subscribe(data => {
      this.players = data["players"];
    });
  }
  changeTheGame(num: Number) {
    this.game = num;
  }
}
