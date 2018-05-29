import { Component, OnInit } from "@angular/core";
import { GreetingService } from "./greeting.service";
import { Observable } from "rxjs";
import { Message } from "./greeting.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private greetingService: GreetingService) {}

  title = "Hello";
  remoteGreeting: string;

  get chars() {
    const arr = [];
    for (const c of this.title) {
      arr.push(c);
    }
    return arr;
    // return ["H", "e", "l", "l", "o"];
  }

  ngOnInit(): void {
    this.remote();
  }

  remote() {
    this.greetingService
      .requestGreeting(this.title)
      .subscribe(data => (this.remoteGreeting = data.message));
}
