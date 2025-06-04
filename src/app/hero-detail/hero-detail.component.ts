import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable, switchMap, tap } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent {
  // Observable для хранения текущего героя
  hero$: Observable<Hero>;
  // Форма для редактирования героя
  heroForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {
    this.heroForm = this.fb.group({
      name: [''],
      power: [''],
      level: [''],
      health: [''],
      attack: [''],
      defense: ['']
    });

    this.hero$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.heroService.getHero(id).pipe(
          tap(hero => this.messageService.add(`HeroService: fetched hero id=${id}`))
        );
      })
    );

    this.hero$.subscribe(hero => {
      this.heroForm.patchValue({
        name: hero.name,
        power: hero.power || '',
        level: hero.level || '',
        health: hero.health || '',
        attack: hero.attack || '',
        defense: hero.defense || ''
      });
    });
  }

  save(): void {
    this.hero$.pipe(
      switchMap(hero => {
        this.messageService.add(`HeroService: updated hero id=${hero.id}`);
        const updatedHero = { ...hero, ...this.heroForm.value };
        return this.heroService.updateHero(updatedHero);
      })
    ).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}