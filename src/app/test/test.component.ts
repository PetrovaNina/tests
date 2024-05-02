import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Questions } from "../../types";
import { tsTest } from "../mock-data/ts-questions";
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { ButtonComponent } from "../components/button/button.component";

@Component({
  selector: "app-test",
  standalone: true,
  imports: [ButtonComponent, CommonModule, ReactiveFormsModule],
  templateUrl: "./test.component.html",
  styleUrl: "./test.component.scss",
})
export class TestComponent {
  @Input() test: Questions = tsTest;

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
    this.createFormControls();
  }

  private createFormControls(): void {
    this.test.questions.forEach((question, questionIndex) => {
      const formArray = this.formBuilder.array(
        question.options.map(() => this.formBuilder.control(null)) // Initialize with null
      );
      this.formGroup.addControl(questionIndex.toString(), formArray);
    });
  }

  onCheckChange(event: any) {
    const formArrayName = event.target.name as string;
    const formArray = this.formGroup.get(formArrayName) as FormArray;
    const optionIndex = event.target.getAttribute("ng-reflect-name");

    if (event.target.type === "radio") {
      formArray.controls.forEach((control, index) => {
        const isChecked = index.toString() === optionIndex;
        control.patchValue(isChecked, { emitEvent: false });
      });
    } else {
      formArray.controls[optionIndex].patchValue(event.target.checked, {
        emitEvent: false,
      });
    }
  }

  submitForm(): void {
    const submittedAnswers = this.formGroup.value;

    this.test.questions.forEach(({ options }, index) => {
      const submittedOptions = submittedAnswers[index];

      let isCorrect: boolean = false;
      for (let i = 0; i < options.length; i++) {
        if (options[i].correct !== submittedOptions[i]) {
          isCorrect = false;
          break;
        } else {
          isCorrect = true;
        }
      }
      console.log(
        `Question ${index + 1}: ${isCorrect ? "Correct" : "Incorrect"}`
      );
    });
  }
}
