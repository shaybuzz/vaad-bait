import Priority from "./Priority"

class Message {
    constructor(title, details, priority, imageUrl) {
        this.title = title
        this.details = details
        if (priority == undefined) {
            this.priority = Priority.Info
        } else {
            this.priority = priority
        }
        if (imageUrl != undefined) {
            this.imageUrl = imageUrl
        } else {
            this.imageUrl = ''
        }
    }
}

export default Message;
