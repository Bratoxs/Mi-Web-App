import { Component, OnDestroy, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit, OnDestroy {
  libros: string[] = [];
  private libroSubscription!: Subscription;

  // Inyeccion de Dependencias (Consumir es Servicio)
  constructor(private librosService: LibrosService) {

  }

  ngOnInit(): void {
    this.libros = this.librosService.obtenerLibros();
    // Recibe evento del subject y ejecuta lo que se encuentra dentro la funcion (Muestra nuevamente la lista)
    this.libroSubscription = this.librosService.librosSubject.subscribe( () => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(): void {
    this.libroSubscription.unsubscribe(); // Se debe unsubscribe o  dar de baja para evitar errores
  }

  eliminarLibro(libro: string) {}

  guardarLibro(f: any) {
    if (f.valid) { // Si la caja de texto tiene un valor
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }
}
