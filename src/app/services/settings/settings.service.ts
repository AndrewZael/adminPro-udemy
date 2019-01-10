import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes:Ajustes = {
    temaurl: 'assets/css/colors/default-dark.css',
    tema: 'default'
  }
  constructor(@Inject(DOCUMENT) private _document) { 
     this.cargarAjustes()
  }

  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes))
  }
  
  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'))
      this.aplicarTema(this.ajustes.tema)
    }else{
      console.log('valores por defecto')
    }
  }

  aplicarTema(tema:string){
    const url = `assets/css/colors/${tema}.css`
    this._document.getElementById('tema').setAttribute('href', url)
    this.ajustes.tema = tema
    this.ajustes.temaurl = url
    this.guardarAjustes()
  }

}

interface Ajustes {
  temaurl:string
  tema:string
}
