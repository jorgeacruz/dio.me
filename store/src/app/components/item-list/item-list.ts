import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollDirective } from '../../directives/infinite-scroll';
//import { DataService } from '../../services/data.service'; // Substitua pelo seu serviço

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, InfiniteScrollDirective],
  providers: [],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: string[] = []; // Substitua 'string' pelo seu tipo de dado (ex: IUser, IProduct)
  currentPage = 1;
  isLoading = false;
  hasMoreData = true;

  //constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadMoreItems();
  }

  loadMoreItems(): void {
    if (this.isLoading || !this.hasMoreData) return;

    this.isLoading = true;
    
    // Supondo que seu serviço tenha um método que retorna uma página de dados
    this.dataService.getItems(this.currentPage).subscribe({
      next: (newItems: string[]) => {
        if (newItems.length === 0) {
          this.hasMoreData = false;
        } else {
          this.items = [...this.items, ...newItems];
          this.currentPage++;
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar dados', error);
        this.isLoading = false;
      }
    });
  }
}
