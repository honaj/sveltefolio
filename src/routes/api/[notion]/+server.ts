import { Client, APIErrorCode } from "@notionhq/client";
import { NOTION_TOKEN } from "$env/static/private";

const notion = new Client({ auth:NOTION_TOKEN });

export async function GET() {
    const databaseId = 'ab20a33f32c4425ea2d94731e0b4b3e3';

    const response = await notion.databases.query({ 
        database_id: databaseId,
        filter: {
            or: [
                {
                    property: "Tags", 
                    multi_select: {
                        contains: "Published",
                    },
                },
            ],
        },
    });
    return new Response(JSON.stringify(response))
}