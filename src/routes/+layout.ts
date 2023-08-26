import {apiPlugin, storyblokInit} from "@storyblok/svelte";

export async function load() {
    storyblokInit({
        accessToken: "your-access-token",
        use: [apiPlugin],
        apiOptions: {
            https: true,
        },
    })}