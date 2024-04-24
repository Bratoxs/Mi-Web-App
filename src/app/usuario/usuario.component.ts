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
    // Permitir que cierto segmento de codigo se ejecute despues del tiempo indicado
    setTimeout( () => {
      this.visible = true;
    }, 3000); // 3 segundos
  }

  onAgregarUsuario(){
    this.usuarios.push(this.usuarioNombre);
  }
}
