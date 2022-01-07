import { Component } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies = [
    { title: 'Os Vingadores', rating: 5 },
    { title: 'Joias Brutas', rating: 3 },
    { title: 'Parasita', rating: 5 },
    { title: 'O Irlandês', rating: 4 },
    { title: 'Pantera Negra', rating: 4 },
  ];

  series = [
    { title: 'Entre Laços', rating: 4 },
    { title: 'DOM', rating: 2 },
    { title: 'Cidade Invisível', rating: 5 },
    { title: 'Them', rating: 1 },
    { title: 'Estação Onze', rating: 3 },
  ];
}
