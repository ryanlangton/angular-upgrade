import { AppComponents } from "./../bootstrap";
import { AppProviders } from "./../bootstrap";
import { Component } from "ng-metadata/core";

@Component({
  selector: "my-app",
  templateUrl: "./app/app.component.html",
  directives: [AppComponents],
  providers: [AppProviders]
})
export class AppComponent {
  constructor() {}

  ngOnInit() {
    console.log("hello from AppComponent during OnInit" );
  }
}

