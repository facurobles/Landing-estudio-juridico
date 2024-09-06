import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EmailService } from './services/email.service';
import { EmailModel } from './model/email-model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  constructor(private emailService: EmailService, private fb: FormBuilder) { }

  contactForm!: FormGroup;

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      numeroTelefono: ['', [Validators.required, this.phoneValidator]]
    })
  }

  // Validador personalizado para el campo numeroTelefono
phoneValidator(control: AbstractControl): ValidationErrors | null {
  const validPhonePattern = /^[0-9-\s]*$/;
  const valid = validPhonePattern.test(control.value);
  return valid ? null : { invalidPhone: true };
}

  onSubmit() {
    const email: EmailModel = new EmailModel(this.contactForm.get('email')?.value, 'Telefono: ' + this.contactForm.get('numeroTelefono')?.value + '\n ' + this.contactForm.get('message')?.value, this.contactForm.get('name')?.value);
    console.log(email)
    this.emailService.sendEmail(email, this.contactForm.get('name')?.value);
  }
}
