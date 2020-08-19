class Message{
    constructor(title, details, priority, imageUrl){
        this.title = title
        this.details = details
        this.priority = priority
        if(imageUrl != undefined){
            this.imageUrl = imageUrl
        }else{
            this.imageUrl = ''
        }
    }
}

export default Message