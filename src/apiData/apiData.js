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
