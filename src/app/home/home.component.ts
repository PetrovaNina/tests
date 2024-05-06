import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ButtonComponent } from "../components/button/button.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  tests = ["TS"]; // TODO: get tests array from DB
}
