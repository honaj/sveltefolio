import {Client} from "@notionhq/client"
const notion = new Client({
    auth: "secret_iLN386lngxOrZEAClYauYGqsl0iV3a2WUXssVyT4165",
})
async function fetch() {
    const response = await notion.databases.query({
        database_id: "ab20a33f32c4425ea2d94731e0b4b3e3"
    })

    return response.object
}