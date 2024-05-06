import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TestComponent } from "./test/test.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "ts", // TODO: use dynamic path for tests
    component: TestComponent,
  },
  {
    path: "home",
    redirectTo: "",
    pathMatch: "full",
  },
];
