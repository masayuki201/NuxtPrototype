import fs from "fs";

export default defineEventHandler(async (event) => {
    const articles = JSON.parse(fs.readFileSync(process.env.BLOG_DB, 'utf-8')).articles;
    const found =
        articles.find((article) => +event.context.params.id === article.id);
    if (!found) {
        throw createError({ statusCode: 404, statusMessage: "NotFound" });
    }
    return found;
});
