import { Media, Person, Post } from "./post.model";

export class Story extends Post{
    constructor(postedBy: Person, postedAt: Date, media: Media,text:string) {
        super(postedBy, postedAt, media,text);
    }
}


export const stories:Story[]=[
    {
        postedBy:{
            name:"James Hall",
            profileImg:"assets/images/profiles/profile1.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/stories/story1.png"],
        },
        text:"This is a story"
    },
    {
        postedBy:{
            name:"John Doe",
            profileImg:"assets/images/profiles/profile2.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/stories/story2.png"],
        },
    },
    {
        postedBy:{
            name:"Jane Doe",
            profileImg:"assets/images/profiles/profile3.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/stories/story3.png"],  
        },
    },
    {
        postedBy:{
            name:"Nicolas Kevin",
            profileImg:"assets/images/profiles/profile4.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/stories/story4.png"],  
        },
    },
    {
        postedBy:{
            name:"James Hall",
            profileImg:"assets/images/profiles/profile1.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/stories/story1.png"],
        },
        text:"This is a story"
    },
    {
        postedBy:{
            name:"John Doe",
            profileImg:"assets/images/profiles/profile2.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/stories/story2.png"],
        },
    },
    {
        postedBy:{
            name:"Jane Doe",
            profileImg:"assets/images/profiles/profile3.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/stories/story3.png"],  
        },
    },
    {
        postedBy:{
            name:"Nicolas Kevin",
            profileImg:"assets/images/profiles/profile4.png"
        },
        postedAt:new Date(),
        media:{
            images:["assets/images/stories/story4.png"],  
        },
    },
]
