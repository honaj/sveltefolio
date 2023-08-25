<script context="module" lang="ts">
    export async function load({ params }: { params: { slug: string } }) {
        const { slug } = params;

        // Continue to fetch your data using the slug as needed...
        const res = await fetch(`https://api.example.com/post/${slug}`);

        if (res.ok) {
            const post = await res.json();

            return {
                props: {
                    post
                }
            };
        }

        return {
            status: 500,
            error: 'Could not load post'
        };
    }
</script>

<script lang="ts">
    export let post: {title: string, content: string, thumbnail: string};
</script>

<!-- Use your "post" data here -->
<h1>{post.title}</h1>
<p>{post.content}</p>