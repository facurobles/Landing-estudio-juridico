import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailModel } from '../model/email-model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = "https://formspree.io/f/mwpekvyv"

  constructor(private http: HttpClient){}


  public sendEmail(email : EmailModel, name:string){
	return this.http.post<any>(this.url, email).subscribe(data => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Recibí tu email, " + name +". \nEn breve me contactaré contigo",
      showConfirmButton: false,
      timer: 3500
    });
  }, err => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Error, intente de nuevo por favor",
      showConfirmButton: false,
      timer: 3500
    });
  }
  )
    }
}
