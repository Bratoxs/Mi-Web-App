import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  usuarios: string[] = ['Luis', 'Carlos', 'Marco'];
  usuarioNombre: string = '';
  visible: boolean = false;

  constructor(){
    // Funcion que permitir que cierto segmento de codigo se ejecute despues del tiempo indicado
    setTimeout( () => { // Despues de 3 segundos la variable visible cambia a true
      this.visible = true;
    }, 3000); // 3 segundos
  }

  // Cada vez que se presione el boton se agrega lo que esta en la caja de texto al array
  onAgregarUsuario(){
    this.usuarios.push(this.usuarioNombre);
  }
}
