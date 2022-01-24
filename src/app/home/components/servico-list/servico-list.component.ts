import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ServicoService } from 'src/app/@api/servicos.service';

@Component({
  selector: 'app-servico-list',
  templateUrl: './servico-list.component.html',
  styleUrls: ['./servico-list.component.scss'],
})
export class ServicoListComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  public servicos: any;

  constructor(private servicoService: ServicoService) {}

  loadServicos(): void {
    this.servicoService
      .getServicesHome()
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.servicos = response || [];
        },
      });
  }

  ngOnInit(): void {
    this.loadServicos();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
