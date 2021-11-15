import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country[];
  badges: string[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )  ),
      tap( console.log )
    )
    .subscribe( pais =>{
      this.pais = pais;
      const {translations} = this.pais[0];
      const elements = Object.values(translations);

      for(let index = 0; index < elements.length; index++){
        this.badges.push(elements[index].common)
      }
    });
  }

}
