import { Client } from "@vercel/postgres";

export const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

client.connect();

export async function disconnectClient(){
    await client.end();
}