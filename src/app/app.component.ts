import { Component, OnInit } from "@angular/core"
// import { KeycloakService } from "keycloak-angular"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  // isLoggedIn = false
  title = "AngularApp"

  // constructor(private keycloak: KeycloakService) { }
  constructor() { }

  // async keycloakLogin() {
  //   this.keycloak.login({
  //     redirectUri: window.location.origin,
  //   })
  // }

  // async keycloakLogout() {
  //   this.keycloak.logout(window.location.origin)
  // }

  async ngOnInit() {
    // this.isLoggedIn = await this.keycloak.isLoggedIn()
  }
}
