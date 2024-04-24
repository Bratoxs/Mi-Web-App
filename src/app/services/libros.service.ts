import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  librosSubject = new Subject();
  private libros: string[] = ['La Casa de Dragones','Tecnologia Innovadora', 'El Comercio'];

  constructor() { }

  agregarLibro(libroNombre: string){
    this.libros.push(libroNombre);
    this.librosSubject.next(null); // Al agregar un nuevo libro, el subject detecta ese cambio y emite un evento
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter(x => x !== libroNombre); // Se crea un nuevo arreglo de libros, sin el libro que paso por parametro
    this.librosSubject.next(null);
  }

  obtenerLibros(){
    return [...this.libros]; // Devuelve los libros existentes y los nuevos que se agrege al Array
  }
}
