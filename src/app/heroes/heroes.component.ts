import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from '../message.service';
import { HeroService } from '../hero.service';
import { Observable, Subject } from 'rxjs';
import { switchMap, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent {
  heroes$: Observable<Hero[]>;
  private refresh$ = new Subject<void>();

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
    this.heroes$ = this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.heroService.getHeroes().pipe(
        tap(heroes => this.messageService.add(`HeroService: fetched ${heroes.length} heroes`))
      ))
    );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    
    this.heroService.addHero({ name } as Hero).pipe(
      tap(hero => {
        this.messageService.add(`HeroService: added hero id=${hero.id}`);
        this.refresh$.next();
      })
    ).subscribe();
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero.id).pipe(
      tap(() => {
        this.messageService.add(`HeroService: deleted hero id=${hero.id}`);
        this.refresh$.next();
      })
    ).subscribe();
  }
}