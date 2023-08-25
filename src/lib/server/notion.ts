import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env["NOTION_TOKEN"],
});

export async function getDatabase() {
    const response = await notion.databases.query({
        database_id: "your_database_id_here",
    });

    return response.results;
}