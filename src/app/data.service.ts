import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}
  addPlayer(player: Object) {
    return this.http.post("/api/player", player);
  }
  getAllPlayers() {
    return this.http.get("/api/players");
  }
  deletePlayer(id: String) {
    return this.http.delete(`/api/player/${id}`);
  }
  updatePlayer(player:Object){
    return this.http.put("/api/player", player);
  }
}
