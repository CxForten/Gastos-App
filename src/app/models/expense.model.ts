export interface Expense{
    id : number;
    tipo : string;
    cantidad : number;
    descripcion : string;
    gastos_fecha: string;
    created_at?: string;
    updated_at?: string;
}