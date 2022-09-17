export class CreatePostButton{
    public icon?:string;
    public label?:string;

    constructor(icon?:string,label?:string){
        this.icon = icon;
        this.label = label;
    }
}

export const createPostButtons:CreatePostButton[]=[
    new CreatePostButton('assets/icons/media_icon.svg','Live Video'),
    new CreatePostButton('assets/icons/media_icon.svg','Photo/Video'),
    new CreatePostButton('assets/icons/feelings_icon.svg','Feeling/Activity'),
    new CreatePostButton('assets/icons/menu_horizontal.svg',undefined)
]

