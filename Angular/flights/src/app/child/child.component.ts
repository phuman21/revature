import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() button = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public data = JSON.parse(`{
    "from": [
      {
        "name": "Seattle",
        "to": [
          { "name": "Los Angeles", "price": 200 },
    { "name": "Houston", "price": 239 },
          { "name": "St. Louis", "price": 178 }
        ]
      },
      {
        "name": "Los Angeles",
        "to": [
          { "name": "Seattle", "price": 200 },
    { "name": "Houston", "price": 211 },
    { "name": "St. Louis", "price": 148 }
        ]
      },
      {
        "name": "St. Louis",
        "to": [
    { "name": "Seattle", "price": 199 },
    { "name": "Los Angeles", "price": 219 },
    { "name": "New York", "price": 215 },
    { "name": "Houston", "price": 201 },
    { "name": "Tampa", "price": 298 }
        ]
      },
      {
        "name": "Houston",
        "to": [
    { "name": "Seattle", "price": 197 },
          { "name": "Los Angeles", "price": 215 },
    { "name": "New York", "price": 220 },
    { "name": "St. Louis", "price": 211 },
    { "name": "Tampa", "price": 310 }
        ]
      },
      {
        "name": "New York",
        "to": [
    { "name": "Houston", "price": 208 },
    { "name": "St. Louis", "price": 178 },
    { "name": "Tampa", "price": 240 }
        ]
      },
      {
        "name": "Tampa",
        "to": [
    { "name": "New York", "price": 200 },
    { "name": "St. Louis", "price": 199 },
    { "name": "Houston", "price": 250 }
        ] 
      }
    ]
  }`);

  public images2: any[] = [{name: 'Seattle', url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fplaces%2Fseattle-wa_416x416.jpg"},
  {name: 'Los Angeles', url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/280px-Los_Angeles_with_Mount_Baldy.jpg"},
  {name: 'St Louis', url:"https://upload.wikimedia.org/wikipedia/commons/9/98/Gateway_Arch%2C_St._Louis%2C_Missouri%2C_U.S.A.jpg"},
  {name: 'Houston', url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/1200px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg"},
  {name: 'New York', url:"https://lp-cms-production.imgix.net/2019-06/GettyImages-122180577_high.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312"},
  {name: 'Tampa', url:"https://specials-images.forbesimg.com/imageserve/5dded44fea103f0006539387/960x0.jpg?fit=scale"},
];

  public images: string[] = ['https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fi.forbesimg.com%2Fmedia%2Flists%2Fplaces%2Fseattle-wa_416x416.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/280px-Los_Angeles_with_Mount_Baldy.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/98/Gateway_Arch%2C_St._Louis%2C_Missouri%2C_U.S.A.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/1200px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg',
  'https://lp-cms-production.imgix.net/2019-06/GettyImages-122180577_high.jpg?auto=format&fit=crop&ixlib=react-8.6.4&h=520&w=1312',
  'https://specials-images.forbesimg.com/imageserve/5dded44fea103f0006539387/960x0.jpg?fit=scale'
];

  public fromCity: string = "";
  public toCity: string = "";
  public fromIndex: number = 0;
  public toIndex: number = 0;
  public imageLink: string = "";

  seattle: boolean = false;
  losangeles: boolean = false;
  stlouis: boolean = false;
  houston: boolean = false;
  newyork: boolean = false;
  tampa: boolean = false;

  public connectedCities: string[];
  public price: number;

  buttonClicked() {
    this.button.emit("Button Clicked!");
  }


  chooseFlight(name, index) {

    if(name == 'Seattle'){
      this.seattle = !this.seattle;
      this.losangeles = false;
      this.stlouis = false;
      this.houston =  false;
      this.newyork = false;
      this.tampa = false;
    }
    else if(name == 'Los Angeles'){
      this.losangeles = !this.losangeles;
      this.seattle = false;
      this.stlouis = false;
      this.houston =  false;
      this.newyork = false;
      this.tampa = false;
    }
    else if(name == 'St. Louis'){
      this.stlouis = !this.stlouis;
      this.losangeles = false;
      this.seattle = false;
      this.houston =  false;
      this.newyork = false;
      this.tampa = false;
    }
    else if(name == 'Houston'){
      this.houston = !this.houston;
      this.losangeles = false;
      this.stlouis = false;
      this.seattle =  false;
      this.newyork = false;
      this.tampa = false;
    }
    else if(name == 'New York'){
      this.newyork = !this.newyork;
      this.losangeles = false;
      this.stlouis = false;
      this.houston =  false;
      this.seattle = false;
      this.tampa = false;
    }
    else if(name == 'Tampa'){
      this.tampa = !this.tampa;
      this.losangeles = false;
      this.stlouis = false;
      this.houston =  false;
      this.newyork = false;
      this.seattle = false;
    }

    this.button.emit(name);
    this.button.emit(index);

    this.fromCity = name;

    this.fromIndex = index;


    this.connectedCities = this.data.from[index].to;

    // for(let i = 0; i < this.connectedCities.length; i++){
    //   console.log(name + " to " + this.data.from[index].to[i].name + " costs " + this.data.from[index].to[i].price);
    // }

  }

  flightTo(name, index) {

    this.toCity = name;
    this.toIndex = index;
    this.price = this.data.from[this.fromIndex].to[index].price;

    // console.log(this.price);
  }

  findImage(name){
    console.log(name);
    for(let city in this.images2){
      if(name == city) {
        this.imageLink = this.images2[city];
      }
    }

    return this.imageLink;
  }

}