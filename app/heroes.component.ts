import {Component,OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {HeroService}  from './hero.service'
import {Hero} from './hero'

@Component( {
    selector: 'my-heroes',
    templateUrl:'./app/heroes.component.html',
    styleUrls: ['./app/heroes.component.css'],
    

})

export class HeroesComponent implements OnInit{
 
  heroes: Hero[];;
  selectedHero: Hero;

constructor(
  private router: Router,
  private heroService:HeroService){
  //The constructor itself does nothing. The parameter simultaneously 
  //defines a private heroService property and identifies it as a HeroService injection site.
  //Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent.
  
}
//We write an ngOnInit method with our initialization logic inside 
//and leave it to Angular to call it at the right time. In our case, we initialize by calling getHeroes.
  ngOnInit(): void {
    this.heroService.getHeroes().then(result => this.heroes = result);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail():void{
  this.router.navigate(['/detail', this.selectedHero.id]);
}
add(name:string):void{
name = name.trim();
  if (!name) { return; }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
}
delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
}
}