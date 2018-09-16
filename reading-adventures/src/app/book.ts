export class Book {
    author: string;
    id: number;
    thumbnail_url: string;
    title: string;

    constructor(author, id, thumbnail_url, title) {
        this.author = author;
        this.id = id;
        this.thumbnail_url = thumbnail_url;
        this.title = title;
    }
}
