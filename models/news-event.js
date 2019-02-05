class NewsEvent extends EventBase {
    constructor({ id, type, created_at, content, title, viewed }) {
        super({ id, type, created_at });
        this.content = content;
        this.title = title;
        this.viewed = viewed;
    }
}
