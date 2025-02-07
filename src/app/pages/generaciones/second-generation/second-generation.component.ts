import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-second-generation',
  templateUrl: './second-generation.component.html',
  styleUrls: ['./second-generation.component.scss'],
})
export class SecondGenerationComponent implements OnInit {
  displayedColumns: string[] = ['position', 'image', 'name'];

  data: any[] = [];

  dataSource = new MatTableDataSource<any>(this.data);

  pokemons = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | any;

  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemonSecGen();
  }

  getPokemonSecGen() {
    const requests = [];

    for (let i = 152; i <= 251; i++) {
      requests.push(
        this.pokeService
          .getPokemons(i)
          .toPromise()
          .then((res) => ({
            position: i,
            image: res.sprites.front_default,
            name: res.name,
          }))
      );
    }

    Promise.all(requests)
      .then((pokemonList) => {
        this.data = pokemonList.sort((a, b) => a.position - b.position);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
      })
      .catch((err) => console.log(err));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Obtener los datos del pokémon
  getRow(row: any) {
    this.router.navigateByUrl(`pokeDetail/${row.position}`);
  }
}
