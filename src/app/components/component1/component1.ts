import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-component1',
  imports: [],
  templateUrl: './component1.html',
  styleUrl: './component1.scss'
})
export class Component1 {  
  _contador:BehaviorSubject<number> = new BehaviorSubject(0);
  contador$: Observable<number> = this._contador.asObservable();

  miSuscripcion!: Subscription;

  
  ngOnInit(): void{
    console.log('Nos suscribimos. Recibiremos todos los datos que se emitan')
      this.miSuscripcion = this.contador$.subscribe({
      next: dato => console.log(dato),
      error: error => console.error(error),
      complete: () => console.log('Observable completado')
    });
  }

  ngOnDestroy(): void{
    this.cancelar();
  }

  emitir(){
    console.log('Emitimos valores por el observable');
    this._contador.next(this._contador.value + 1);
  }
  
  completar(){
    this._contador.complete()
    console.log('Observable completado. Ya no se emiten mas datos')
  }

  cancelar(){
    this.miSuscripcion.unsubscribe();
    console.log('Cancelacion realizada. No se reciben mas datos');
  }
}
