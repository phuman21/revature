import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public pokemon: PokemonService) { }
  public randomPokemon:any;
  public PokemonName:string="";
  ngOnInit(): void {

  }
  public pokemonInfo: any;
  public pokemonAbility: any[] = [];
  public pokemonMove: any[] = [];
  public pokemonSprites: any;
  public searched: boolean = false;
  public showAbility:boolean = false;
  public showMoves:boolean = false;
  public showSprites:boolean = false;
  public searcherror: boolean = false;
  public errors: any;

  getPokemon(){
    this.pokemon.getpokemon(this.PokemonName).subscribe(
      response=> {this.pokemonInfo = response
        this.searched = true;
        this.searcherror = false;
        this.pokemonAbility = this.pokemonInfo.abilities;
        this.pokemonMove = this.pokemonInfo.moves;
        this.pokemonSprites = this.pokemonInfo.sprites;
      // console.log(this.PokemonName)
        console.log(this.pokemonSprites.back_default);
    },
    error => {
      this.searched = false;
      this.searcherror = true;
      this.errors = error;
      console.log(this.errors);
    }
    );
    
  }
  changeAbility(){
    this.showAbility=true;
    this.showMoves=false;
    this.showSprites=false;
  }
  changeMoves(){
    this.showAbility=false;
    this.showMoves=true;
    this.showSprites=false;
  }
  changeSprites(){
    this.showAbility=false;
    this.showMoves=false;
    this.showSprites=true;
  }
}
