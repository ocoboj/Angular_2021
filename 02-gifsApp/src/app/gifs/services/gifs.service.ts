import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = '5yMxQPxanQWZykp9TsbsccNSRo96QFF6';

  private _historial: string[] = [];

  get historial() {

    return [...this._historial];
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {

      this._historial.unshift(query);
    }

    this._historial = this._historial.splice(0, 10);

    console.log(this._historial);
  }

}
