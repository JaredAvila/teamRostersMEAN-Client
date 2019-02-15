import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"]
})
export class GameComponent implements OnInit {
  @Input() game: Number;
  @Input() players: Array<Object>;
  @Output() emitter = new EventEmitter();
  updatePlayer: Object;

  constructor(private service: DataService) {}

  ngOnInit() {}

  updateStatus(player) {
    this.service.updatePlayer(player).subscribe(data => {
      this.emitter.emit();
    });
  }

  onPlayClick(player: Object) {
    switch (this.game) {
      case 1:
        this.updatePlayer = {
          id: player["_id"],
          game1: "play",
          game2: player["game2"],
          game3: player["game3"]
        };
        this.updateStatus(this.updatePlayer);
        return;
      case 2:
        this.updatePlayer = {
          id: player["_id"],
          game2: "play",
          game3: player["game3"],
          game1: player["game1"]
        };
        this.updateStatus(this.updatePlayer);
        return;
      case 3:
        this.updatePlayer = {
          id: player["_id"],
          game3: "play",
          game1: player["game1"],
          game2: player["game2"]
        };
        this.updateStatus(this.updatePlayer);
        return;
    }
  }
  onNotClick(player: Object) {
    switch (this.game) {
      case 1:
        this.updatePlayer = {
          id: player["_id"],
          game1: "not",
          game2: player["game2"],
          game3: player["game3"]
        };
        this.updateStatus(this.updatePlayer);
        return;
      case 2:
        this.updatePlayer = {
          id: player["_id"],
          game2: "not",
          game3: player["game3"],
          game1: player["game1"]
        };
        this.updateStatus(this.updatePlayer);
        return;
      case 3:
        this.updatePlayer = {
          id: player["_id"],
          game3: "not",
          game1: player["game1"],
          game2: player["game2"]
        };
        this.updateStatus(this.updatePlayer);
        return;
    }
  }
  onUnClick(player) {
    switch (this.game) {
      case 1:
        this.updatePlayer = {
          id: player["_id"],
          game1: "un",
          game2: player["game2"],
          game3: player["game3"]
        };
        this.updateStatus(this.updatePlayer);
        return;
      case 2:
        this.updatePlayer = {
          id: player["_id"],
          game2: "un",
          game3: player["game3"],
          game1: player["game1"]
        };
        this.updateStatus(this.updatePlayer);
        return;
      case 3:
        this.updatePlayer = {
          id: player["_id"],
          game3: "un",
          game1: player["game1"],
          game2: player["game2"]
        };
        this.updateStatus(this.updatePlayer);
        return;
    }
  }
}
