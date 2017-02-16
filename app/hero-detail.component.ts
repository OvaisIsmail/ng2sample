import {Component, Input,OnInit} from '@angular/core'
import {ActivatedRoute,Params} from '@angular/router'
import {Location} from '@angular/common'
import {HeroService} from './hero.service'
import {Hero} from './hero'
import 'rxjs/add/operator/SwitchMap'

@Component({
   moduleId: module.id,
    selector:'my-hero-detail',
    templateUrl:'./hero-detail.component.html',
    styleUrls:['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
  //@Input()
  hero: Hero;
constructor(
  private heroService:HeroService,
  private route:ActivatedRoute,
  private location:Location){
  }
goBack(): void {
  this.location.back();
}
save():void{
  this.heroService.update(this.hero).then(() => this.goBack());
  console.log("saved");
}
  ngOnInit():void{
      this.route.params.switchMap((params:Params)=>this.heroService.getHero(+params['id'])).subscribe(result => this.hero = result)
  }



}