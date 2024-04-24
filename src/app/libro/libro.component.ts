import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})

export class LibroComponent {
  @Input() tituloLibro: string = ''; // Revise datos del padre
  @Output() libroClicked = new EventEmitter(); // Envia al padre el evento del click

  constructor(private librosService: LibrosService){

  }

  onClicked(){
    // this.libroClicked.emit();
    this.librosService.eliminarLibro(this.tituloLibro);
  }
}
