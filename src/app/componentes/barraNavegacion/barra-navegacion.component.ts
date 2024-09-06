import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {

  banderaMenu: boolean = false;
  item:string = 'inicio'
  screenWidth: number = window.innerWidth;

  mostrarMenu() {
    this.banderaMenu = !this.banderaMenu;
  } 


  isNavHidden = false;
  prevScrollpos = window.pageYOffset;

  /*capturo el ancho de la pantalla siempre que cambie y la guardo en screenWidth
   cuando es menor a 576 deja de funcionar (con el if del metodo que sigue) el
    efecto de ocultar la barra al scrollear*/
  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
    }

  /*mostrar u ocultar barra al scrollear*/
  /*cuando scrolleo detecta que la posicion es menor o mayor a la posicion anterior
  y en base a eso define si subi o baje, y setea en true o false isNavHidden, segun el valor de
  esta variable se aplica una clase hidden en el html q traslada 100% en Y la barra*/
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const currentScrollPos = window.pageYOffset;

    if(this.screenWidth < 576){  /*esto desactiva el efecto cuando el menu es lateral en pantallas chicas*/
      this.isNavHidden = false;
    }
    else if (this.prevScrollpos > currentScrollPos) {
      // Desplazamiento hacia arriba
      this.isNavHidden = false;
    } else {
      // Desplazamiento hacia abajo
      this.isNavHidden = true;
    }

    this.prevScrollpos = currentScrollPos;
  }


  scrollTo(elementId: string): void {
    this.item = elementId
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
