import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;
  heroForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      power: [''],
      level: ['', [Validators.min(1), Validators.max(100)]],
      health: ['', [Validators.min(0), Validators.max(1000)]],
      attack: ['', [Validators.min(0), Validators.max(100)]],
      defense: ['', [Validators.min(0), Validators.max(100)]],
    });
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
      this.heroForm.patchValue({
        name: hero.name,
        power: hero.power || '',
        level: hero.level || '',
        health: hero.health || '',
        attack: hero.attack || '',
        defense: hero.defense || '',
      });
    });
  }

  save(): void {
    if (this.hero && this.heroForm.valid) {
      const updatedHero = {
        ...this.hero,
        ...this.heroForm.value,
      };
      this.heroService.updateHero(updatedHero).subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }
}
