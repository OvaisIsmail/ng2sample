//for manual triggering of angular detectchnages
import {ComponentFixture,TestBed,async} from '@angular/core/testing'
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
import {DebugElement} from '@angular/core'
import {BannerComponent} from './banner-inline.component'

describe('bannerTest',()=>{
    let comp: BannerComponent;
    let fixture:ComponentFixture<BannerComponent>;
    let de :DebugElement;
    let el:HTMLElement;



//for external templates
    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ BannerComponent ], // declare the test component
         providers: [
                    { provide: ComponentFixtureAutoDetect, useValue: true }
                     ]
  })
  .compileComponents();  // compile template and css
    }));
       
//for inline templates
    beforeEach(() => {
        // TestBed.configureTestingModule({
        //     declarations:[BannerComponent],
        //    providers: [
        //             { provide: ComponentFixtureAutoDetect, useValue: true }
        //              ] });
        fixture = TestBed.createComponent(BannerComponent);
       comp = fixture.componentInstance; //test instance
       //query for title <h1> by css selector
       de  =fixture.debugElement.query(By.css('h1'));
       el = de.nativeElement; 
        
        });

    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual(comp.title);
    });

    it('should display the title',()=>{
       //  fixture.detectChanges(); //calls angular change detection -- triggering data binding and propagation of the title property to the DOM element.
        expect(el.textContent).toContain(comp.title);
    });

    it('should display a different title',()=>{
        comp.title = "Test title";
        fixture.detectChanges(); //here we need to call detectChanges but in above ex not required, auto detect will take care
        expect(el.textContent).toContain("Test title");

    //This behavior (or lack of it) is intentional. It gives the tester an opportunity to inspect 
    //or change the state of the component before Angular initiates data binding or calls lifecycle hooks.
    // it('no title in the DOM until manually call `detectChanges`', () => {
    //     expect(el.textContent).toEqual('');
    // });

    })
});




