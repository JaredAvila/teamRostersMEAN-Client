import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  players: any;
  confirm: Boolean = false;
  currentPlayer: Object;

  constructor(private service: DataService) {}

  ngOnInit() {
    this.getPlayers();
  }
  getPlayers() {
    this.service.getAllPlayers().subscribe(data => {
      this.players = data["players"];
    });
  }
  onDeleteClick(player: Object) {
    this.confirm = true;
    this.currentPlayer = player;
  }
  confirmDelete(id: String) {
    this.confirm = false;
    this.service.deletePlayer(id).subscribe(data => {
      this.getPlayers();
    });
  }
  noDelete() {
    this.confirm = false;
  }
}
