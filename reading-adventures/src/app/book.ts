export class Book {
    author: string;
    id: number;
    thumbnail_url: string;
    summary: string;
    title: string;

    constructor(author, id, thumbnail_url, summary, title) {
        this.author = author;
        this.id = id;
        this.thumbnail_url = thumbnail_url;
        this.summary = summary;
        this.title = title;
    }
}
