
export class NavbarButton {
    public id: number;
    public svgUrl: string;
    public hasActiveIcon?: boolean;

    constructor(id: number, svgUrl: string, hasActiveIcon?: boolean) {
        this.id = id;
        this.svgUrl = svgUrl;
        this.hasActiveIcon = hasActiveIcon
    }
}


export const navbarButtons:NavbarButton[]=[
    new NavbarButton(1,'assets/icons/menu.png',false),
    new NavbarButton(2,'assets/icons/chat_icon.svg',true),
    new NavbarButton(3,'assets/icons/notification_icon.svg',true),
]