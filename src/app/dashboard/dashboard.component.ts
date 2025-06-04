import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroService } from '../hero.service';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  // Создание Observable-потока с массивом героев
  // Используем pipe и оператор map для преобразования данных:
  // берем исходный массив героев и получаем подмассив с 1 по 4 элемент (slice(1,5))
  heroes$: Observable<Hero[]> = this.heroService.getHeroes().pipe(
    map((heroes: Hero[]) => heroes.slice(1, 5))
      );

  constructor(private heroService: HeroService) {}
}