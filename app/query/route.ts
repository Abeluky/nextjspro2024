import { NextResponse } from "next/server";
import { client } from "../lib/db";

async function listInvoices() {
    try {
        // Consulta SQL para obtener facturas con un monto específico y el nombre del cliente
        const query = `
        SELECT invoices.amount, customers.name
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        WHERE invoices.amount = $1;
        `;

                // Ejecuta la consulta con un valor específico
            const result = await client.query(query, [666]);
            return result.rows; // Devuelve las filas de la consulta
        } catch (error) {
                console.error('Error al ejecutar la consulta:', error);
                throw new Error('Database query failed');
            }
        }

    export async function GET() {
        try {
            const invoices = await listInvoices();
            return NextResponse.json(invoices);
        } catch (error) {
            let errorMessage = 'Un error desconocido ocurrio';
        if (error instanceof Error) errorMessage = error.message;
        return NextResponse.json(
            { 
                error: 'No se encontraron las facturas', 
                details: errorMessage 
            },
                { status: 500 }
            );
        }
    }