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

    get textInput(): any {
        return this.form.controls.textInput;
    }

    constructor() { }

    public ngOnInit(): void {
        this.initForm();
    }

    public clearInput(): void {
        this.textInput.reset();
    }

    public toggleInput(event: any): void {
        if (event.checked) {
            this.textInput.enable();
        } else {
            this.textInput.reset();
            this.textInput.disable();
        }
    }

    private initForm(): void {
        const {required, minLength} = Validators;
        this.form = new FormGroup({
            textInput: new FormControl('', [required, minLength(5)]),
        });
    }
}
