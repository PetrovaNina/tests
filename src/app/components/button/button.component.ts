import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [],
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  @Input() type?: string;
  @Input() label: string = "Button";
  @Input() href?: string;
  @Input() target?: string;
  @Input() buttonClass: string = "btn";

  onClick(): void {}
}
