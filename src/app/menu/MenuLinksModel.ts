export class MenuLink{
    public icon:string;
    public label:string;

    constructor(icon:string,label:string){
        this.icon = icon;
        this.label = label;
    }
}

export const menuLinks:MenuLink[]=[
    new MenuLink('','Home'),
    new MenuLink('','Friends'),
    new MenuLink('','Groups'),
    new MenuLink('','Watch'),
    new MenuLink('','Pages'),
    new MenuLink('','Market'),
    new MenuLink('','Gaming'),
]