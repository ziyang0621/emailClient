import { Component, OnInit } from '@angular/core';
import { Email } from '../email';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css'],
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email;

  constructor(
    private authSerivce: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${authSerivce.username}@angular-email.com`,
    };
  }

  ngOnInit(): void {}

  onSubmit(email: Email) {
    // Send the email off via the email serivce
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
