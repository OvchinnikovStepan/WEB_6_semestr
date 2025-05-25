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
  heroes$: Observable<Hero[]> = this.heroService.getHeroes().pipe(
    map((heroes: Hero[]) => heroes.slice(1, 5))
      );

  constructor(private heroService: HeroService) {}
}