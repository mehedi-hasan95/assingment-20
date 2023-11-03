export async function getFeaturedData() {
    const res = await fetch(process.env.BASE_URL + "featured");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

// Latest Posts
export async function getLatestData() {
    const res = await fetch(process.env.BASE_URL + "latest");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
// Get all categories
export async function getCategoriesData() {
    const res = await fetch(process.env.BASE_URL + "categories");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

// Get all posts
export async function getPostsData() {
    const res = await fetch(process.env.BASE_URL + "blogs");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

// Get Single post
export async function getSingleData(slug) {
    const res = await fetch(process.env.BASE_URL + `blogs/${slug}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

// Get services post
export async function getServiceData() {
    const res = await fetch(process.env.BASE_URL + "services");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

// Get Category post
export async function getCategoryData(slug) {
    const res = await fetch(process.env.BASE_URL + `categories/${slug}`);
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}
