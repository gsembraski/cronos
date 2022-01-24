import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { CompanyService } from 'src/app/@api/company.service';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.scss'],
})
export class SobreNosComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  public textItem: any;
  public employeeList: any;

  constructor(private companyService: CompanyService) {}

  loadTexts(): void {
    this.companyService
      .getTexts()
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.textItem = response || [];
        },
      });
  }

  loadEmployee(): void {
    this.companyService
      .getEmployee()
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.employeeList = response || [];
        },
      });
  }

  ngOnInit(): void {
    this.loadTexts();
    this.loadEmployee();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
