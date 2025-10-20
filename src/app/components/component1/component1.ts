import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-component1',
  imports: [],
  templateUrl: './component1.html',
  styleUrl: './component1.scss'
})
export class Component1 {  
  mensaje:BehaviorSubject<string>=new BehaviorSubject('Valor inicial');
  mensaje$: Observable<string> = this.mensaje.asObservable();

  miSuscripcion!: Subscription;


  subscribir(){
    console.log('Nos suscribimos. Recibiremos todos los datos que se emitan')
      this.miSuscripcion = this.mensaje$.subscribe({
      next: dato => console.log(dato),
      error: error => console.error(error),
      complete: () => console.log('Observable completado')
    });
  }

  emitir(){
    console.log('Emitimos valores por el observable');
    this.mensaje.next("Valor 1");
    this.mensaje.next("Valor 2");
    this.mensaje.next("Valor n");
  }
  
  completar(){
    this.mensaje.complete()
    console.log('Observable completado. Ya no se emiten mas datos')
  }

  cancelar(){
    this.miSuscripcion.unsubscribe();
    console.log('Cancelacion realizada. No se reciben mas datos');
  }
}
