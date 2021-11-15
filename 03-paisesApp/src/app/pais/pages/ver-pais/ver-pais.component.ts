import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private pasiService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .subscribe(({ id })=> {
        console.log(id);

        this.pasiService.getPaisPorAlpha(id)
          .subscribe( pais => {
            console.log(pais)
          })
      })

  }

}
