import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private _contador:BehaviorSubject<number> = new BehaviorSubject(0);
  public readonly contador$: Observable<number> = this._contador.asObservable();

    incrementar(valor:number){
        this._contador.next(valor);
    }

    complete(){
        this._contador.complete();
    }
}
