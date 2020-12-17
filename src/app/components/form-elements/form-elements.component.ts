import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-elements',
    templateUrl: './form-elements.component.html',
    styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {

    public text = '';
    public form: FormGroup;
    public showCalendar = false;

    get textInput(): any { return this.form.controls.textInput; }

    constructor() { }

    ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void {
        this.form = new FormGroup({
            textInput: new FormControl('', [Validators.required, Validators.minLength(5)]),
        });
    }

    clearInput(): void {
        this.textInput.reset();
    }

    toggleInput(event: any): void {
        if (event.checked) {
            this.textInput.enable();
        } else {
            this.textInput.reset();
            this.textInput.disable();
        }
    }

}
