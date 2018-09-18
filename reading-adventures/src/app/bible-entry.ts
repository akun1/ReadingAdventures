export class BibleEntry {
    name : string;
    chapters : Array<Array<string>>;

    constructor(name, chapters) {
        this.name = name;
        this.chapters = chapters;
    }
}
