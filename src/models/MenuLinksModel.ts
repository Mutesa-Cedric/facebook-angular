export class MenuLink{
    public icon:string;
    public label:string;

    constructor(icon:string,label:string){
        this.icon = icon;
        this.label = label;
    }
}

export const menuLinks:MenuLink[]=[
    new MenuLink('assets/icons/home_icon.svg','Home'),
    new MenuLink('assets/icons/friends_icon.svg','Friends'),
    new MenuLink('assets/icons/group_icon.svg','Groups'),
    new MenuLink('assets/icons/watch_icon.svg','Watch'),
    new MenuLink('assets/icons/page_icon.svg','Pages'),
    new MenuLink('assets/icons/cart_icon.svg','Market'),
    new MenuLink('assets/icons/game_icon.svg','Gaming'),
]