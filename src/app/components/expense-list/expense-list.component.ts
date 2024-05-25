import { ExpenseService } from 'src/app/services/expense.service';
import { Expense } from './../../models/expense.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {
  expenses: Expense[] = [];
  total: number = 0;

  constructor(
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void{
    this.loadDataInTable();
  }

  deleteExpense(id: number): void {
    this.expenseService.deleteExpense(id).subscribe(response => {
      this.expenses = this.expenses.filter(expense => expense.id !== id);
      this.calculateTotal();
    });
  }

  private loadDataInTable(): void{
    this.expenseService.getExpenses().subscribe(
      (expenses) => {
        this.expenses = expenses;
        this.calculateTotal();
      }
    );
  }

  private calculateTotal(): void {
    this.total = this.expenses.reduce((accumulated, currentValue) => {
      return accumulated + Number(currentValue.cantidad);
    }, 0);
   }
}
