import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Saienni Blanco';

  arriba(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  mostrarBoton: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any) {
    if (window.scrollY > 100) {
      this.mostrarBoton = true;
    } else {
      this.mostrarBoton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
