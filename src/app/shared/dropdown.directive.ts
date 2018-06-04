import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector : '[appDropDown]'
})

export class dropDownDirective{
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') onToggle(){
        this.isOpen = !this.isOpen;
    }
}