export class FriendRequest{
    public sentBy:string;
    public status:'pending'|'rejected'|'accepted';
    public sentAt:Date;

    constructor(sentBy:string,status:'pending'|'rejected'|'accepted',sentAt:Date){
        this.sentBy = sentBy;
        this.status = status;
        this.sentAt = sentAt;
    }
}

export const friendRequests:FriendRequest[]=[
    new FriendRequest('Paula Mora','pending',new Date(1663420367041)),
    new FriendRequest('Ndizihiwe Regis','pending',new Date(1663420367018)),
    new FriendRequest('Nicolas Kevin','pending',new Date(1663420362041)),
    new FriendRequest('B-threy','pending',new Date(1663420363041)),
]