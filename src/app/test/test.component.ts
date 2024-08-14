import { Component, Input, OnInit } from "@angular/core";
import { Question, Questions } from "../../types";
import { tsTest } from "../mock-data/ts-questions";
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { ButtonComponent } from "../components/button/button.component";

interface FormQuestion extends Question {
  isMultiple: boolean;
}

@Component({
  selector: "app-test",
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: "./test.component.html",
  styleUrl: "./test.component.scss",
})
export class TestComponent implements OnInit {
  @Input() test: Questions = tsTest;
  quiz: FormQuestion[] = [];
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  ngOnInit() {
    this.quiz = this.preprocessQuestions(this.test.questions);
    this.createFormControls();
  }

  private createFormControls(): void {
    this.quiz.forEach((question, questionIndex) => {
      const formArray = this.formBuilder.array(
        question.options.map(() => this.formBuilder.control(false))
      );
      this.formGroup.addControl(questionIndex.toString(), formArray);
    });
  }

  private preprocessQuestions(questions: Question[]): FormQuestion[] {
    return questions.map((question) => ({
      ...question,
      isMultiple:
        question.options.filter((option) => option.correct).length > 1,
    }));
  }

  onCheckChange(event: Event, optionIndex: number) {
    const { name, type, checked } = event.target as HTMLInputElement;
    const formArray = this.formGroup.get(name) as FormArray;

    if (type === "radio") {
      formArray.controls.forEach((control, index) => {
        const isChecked = index === optionIndex;
        control.patchValue(isChecked, { emitEvent: false });
      });
    } else {
      formArray.controls[optionIndex].patchValue(checked, { emitEvent: false });
    }
  }

  submitForm(): void {
    const submittedAnswers = this.formGroup.value;

    this.quiz.forEach(({ options }, index) => {
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
