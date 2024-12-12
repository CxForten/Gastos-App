import { Expense } from './../models/expense.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private readonly API_URL = 'http://127.0.0.1:8080/api'

  constructor(
    private http: HttpClient
  ) { }

  getExpenses(): Observable<Expense[]>{
    return this.http.get<Expense[]>(`${this.API_URL}/expenses`);
  }

  getExpense(id: number): Observable<Expense>{
    return this.http.get<Expense>(`${this.API_URL}/expenses/${id}`);
  }

  createExpense(expense: Expense): Observable<Expense>{
    return this.http.post<Expense>(`${this.API_URL}/expenses`, expense);
  }

  updateExpense(id: number, expense: Expense): Observable<Expense>{
    return this.http.put<Expense>(`${this.API_URL}/expenses/${id}`, expense);
  }

  deleteExpense(id: number): Observable<any>{
    return this.http.delete<any>(`${this.API_URL}/expenses/${id}`);
  }

}
