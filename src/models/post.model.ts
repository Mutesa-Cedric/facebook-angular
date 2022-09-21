export type Person = {
    name: string,
    profileImg:string
}

export type Comment={
    id: number,
    content: string,
    person: Person,

}

export type Media = {
    images?: [string];
    video?: string;
    reactions?: {
        likes?: number;
        love?:number;
        haha?:number;
        comments: Comment[]
        shares: number;
    }
}

export class Post {
    postedBy: Person;
    postedAt: Date;
    media?: Media;
    text?: string;

    constructor(postedBy: Person, postedAt: Date, media?: Media,text?:string) {
        this.postedBy = postedBy;
        this.postedAt = postedAt;
        this.media = media;
        this.text = text;
    }
}

export const posts:Post[]=[
    {
        postedBy:{
            name:"James Hall",
            profileImg:"assets/images/profiles/profile1.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/posts/post1.png"],
            reactions:{
                likes:10,
                love:5,
                haha:2,
                comments:[
                    {
                        id:1,
                        content:"Nice",
                        person:{
                            name:"John Doe",
                            profileImg:"assets/images/profiles/profile2.png"
                        }
                    },
                    {
                        id:2,
                        content:"Awesome",
                        person:{
                            name:"John Doe",
                            profileImg:"assets/images/profiles/profile2.png"
                        }
                    }
                ],
                shares:2
            }
        },
    },
    {
        postedBy:{
            name:"John Doe",
            profileImg:"assets/images/profiles/profile2.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/posts/post2.png"],
            reactions:{
                likes:10,
                love:5,
                haha:2,
                comments:[
                    {
                        id:1,
                        content:"Nice",
                        person:{
                            name:"John Doe",
                            profileImg:"assets/images/profiles/profile2.png"
                        }
                    },
                    {
                        id:2,
                        content:"Awesome",
                        person:{
                            name:"John Doe",
                            profileImg:"assets/images/profiles/profile2.png"
                        }
                    }
                ],
                shares:2
            }
        },
    },
    {
        postedBy:{
            name:"Jane Doe",
            profileImg:"assets/images/profiles/profile3.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/posts/post3.png"],
            reactions:{
                likes:10,
                love:5,
                haha:2,
                comments:[
                    {
                        id:1,
                        content:"Nice",
                        person:{
                            name:"John Doe",
                            profileImg:"assets/images/profiles/profile2.png"
                        }
                    },
                    {
                        id:2,
                        content:"Awesome",
                        person:{
                            name:"John Doe",
                            profileImg:"assets/images/profiles/profile2.png"
                        }
                    }
                ],
                shares:2
            }
        },
    },
    {
        postedBy:{
            name:"James Hall",
            profileImg:"assets/images/profiles/profile1.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/posts/post4.png"],
            reactions:{
                likes:10,
                love:5,
                haha:2,
                comments:[
                    {
                        id:1,
                        content:"Nice",
                        person:{
                            name:"John Doe",
                            profileImg:"assets/images/profiles/profile2.png"
                        }
                    },
                    {
                        id:2,
                        content:"Awesome",
                        person:{
                            name:"John Doe",
                            profileImg:"assets/images/profiles/profile2.png"
                        }
                    }
                ],
                shares:2
            }
        },
    },
]
