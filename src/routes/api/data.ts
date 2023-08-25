import { getDatabase } from '$lib/server/notion';

export async function get(request: any) {
    try {
        const data = await getDatabase();
        return { status: 200, body: data };
    } catch (error) {
        return { status: 500, body: { error: 'Server error' } };
    }
}