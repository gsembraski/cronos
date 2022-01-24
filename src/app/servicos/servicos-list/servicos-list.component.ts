import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { ServicoService } from 'src/app/@api/servicos.service';

@Component({
  selector: 'app-servicos-list',
  templateUrl: './servicos-list.component.html',
  styleUrls: ['./servicos-list.component.scss'],
})
export class ServicosListComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  public servicos: any;

  constructor(private servicoService: ServicoService) {}

  loadServicos(): void {
    this.servicoService
      .getServicos()
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
