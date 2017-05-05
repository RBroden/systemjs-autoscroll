import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
    selector: '[autoScrollY]'
})
export class AutoScrollDirective {

    @Input('autoScrollY') shouldScroll: boolean;

    private nativeElement: HTMLElement;
    private speed: number = 2;
    private timeOut: number = 15;
    private mouseY: number;

    constructor(private el: ElementRef) {
        this.nativeElement = el.nativeElement;
    }

    @HostListener('window:mousemove', ['$event']) windowMouseMove(e: MouseEvent) {
        if (this.shouldScroll) {
            this._containerScroll(e);
        }
    }

    @HostListener('window:touchmove', ['$event']) windowTouchMove(e: MouseEvent) {
        if (this.shouldScroll) {
            this._containerScroll(e);
        }
    }

    private _containerScroll (e: MouseEvent) {
        let elementTop = this.nativeElement.offsetTop;
        let elementBottom = this.nativeElement.offsetTop + this.nativeElement.offsetHeight;
        this.mouseY = e.clientY;
        if (this.mouseY < elementTop) {
            this._scrollUp(this.mouseY);
        }
        if (this.mouseY > elementBottom) {
            this._scrollDown(this.mouseY);
        }
    }

    private _scrollUp (onCallY: number) {
        if (this.mouseY === onCallY && this.shouldScroll) {
            this.nativeElement.scrollTop -= this.speed;
            setTimeout(this._scrollUp.bind(this, onCallY), this.timeOut);
        }
    }

    private _scrollDown (onCallY: number) {
        if (this.mouseY === onCallY && this.shouldScroll) {
            this.nativeElement.scrollTop += this.speed;
            setTimeout(this._scrollDown.bind(this, onCallY), this.timeOut);
        }
    }

}
