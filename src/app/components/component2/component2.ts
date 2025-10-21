import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ContadorService } from '../../services/contador-service';

@Component({
  selector: 'app-component2',
  imports: [],
  templateUrl: './component2.html',
  styleUrl: './component2.scss'
})
export class Component2 {  
  private contadorService = inject(ContadorService);
  private miSuscripcion!: Subscription;

  con: number = 0;

  ngOnInit(): void{
    console.log('Nos suscribimos. Recibiremos todos los datos que se emitan')
    this.miSuscripcion = this.subscribeToContador();
  }

  subscribeToContador(){
    this.cancelarSuscripcion(); 
    return this.contadorService.contador$.subscribe({
        next: dato => this.con = dato,
        error: error => console.error(error),
        complete: () => console.log('Observable completado')
      });
};

  ngOnDestroy(): void{
    if(this.miSuscripcion){
      this.cancelarSuscripcion();
    }
  }

  incrementar(){
    console.log('Emitimos valores por el observable');
    this.contadorService.incrementar(this.con + 1);
  }
  
  completarObservable(){
    this.contadorService.complete()
    console.log('Observable completado. Ya no se emiten mas datos')
  }

  cancelarSuscripcion(){
    if(this.miSuscripcion){
      this.miSuscripcion.unsubscribe();
    }
    console.log('Cancelacion realizada. No se reciben mas datos');
  }
}
