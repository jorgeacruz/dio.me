import { Directive, EventEmitter, ElementRef, OnInit, Output, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true
})
export class InfiniteScrollDirective implements OnInit, OnDestroy {
  @Output() scrolled = new EventEmitter<void>();
  private observer: IntersectionObserver | null = null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const options = {
      root: null, // usa o viewport como container
      rootMargin: '0px',
      threshold: 0.1 // dispara quando 10% do elemento estiver visível
    };

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.scrolled.emit();
      }
    }, options);

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
