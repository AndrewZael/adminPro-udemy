import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy{

  suscription: Subscription

  constructor() {
    this.suscription = this.regresarObs().pipe(retry(1))
.subscribe(
      numero => console.log('Sub ', numero),
      error => console.error('Error en el obs', error),
      () => console.log('Obs termino')
    )

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('Me voy de la pagina')
    this.suscription.unsubscribe()
  }

  regresarObs(): Observable<any>{
    return new Observable( (observer: Subscriber<any> ) => {
      let contador = 0
      const intervalo = setInterval( () => {
         contador++

        const salida = {
          valor: contador
        }

         observer.next(salida)
         
         /*if(contador === 5){
           clearInterval(intervalo)
           observer.complete()
         }*/

         /*if( contador === 2 ){
           clearInterval(intervalo)
           observer.error('Super error')
         }*/

      }, 1000)
   }).pipe(
     map(res => res.valor),
     filter( (value, index) => {
       if( (value % 2) === 1 ){
         return true
       }else{
         return false
       }
     })
   )

  }

}
