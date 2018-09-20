export class BibleEntry {
    name : string[];
    chapters : Array<Array<Array<string>>>;
    text : string;

    constructor(name, chapters) {
        this.name = name;
        this.chapters = chapters;
    }
}