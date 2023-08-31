import { Client } from "@notionhq/client"
import { NOTION_TOKEN } from "$env/static/private"

const notion = new Client({ auth: NOTION_TOKEN })

export async function GET() {
    const databaseId = "ab20a33f32c4425ea2d94731e0b4b3e3"

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
    })

    let pages = []

    for (const page of response.results) {
        // Retrieve detailed information for each page
        const pageDetail = await notion.pages.retrieve({ page_id: page.id });
        // Fetch the children blocks for each page
        const blockResponse = await notion.blocks.children.list({
            block_id: page.id,
        })
        
        pages.push({
            ...pageDetail,
            blocks: blockResponse.results,
        })
    }

    return new Response(JSON.stringify(pages))
}