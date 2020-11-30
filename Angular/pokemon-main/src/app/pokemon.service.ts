import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(public http: HttpClient) { 

  }
  public pokemonInfo: any;
  public url="https://pokeapi.co/api/v2/pokemon/";
  getpokemon(name:string){
    console.log(name); 
   return this.http.get(this.url + name)
    console.log(this.pokemonInfo);
    
  }
}
