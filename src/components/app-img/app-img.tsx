import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'app-img',
  styleUrl: 'app-img.css',
  shadow: true
})
export class AppImg {

  @Element() el: HTMLElement;

  @Prop() imgSrc: string;
  private observer: IntersectionObserver;
  componentDidLoad() {
    const img: HTMLImageElement =
               this.el.shadowRoot.querySelector('img');

    if (img) {
      this.observer = new IntersectionObserver(this.onIntersection);
      this.observer.observe(img);
    }
  }

  private onIntersection = async (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
         if (this.observer) {
             this.observer.disconnect();
         }
    
         if (entry.target.getAttribute('data-src')) {
             entry.target.setAttribute('src',
                        entry.target.getAttribute('data-src'));
             entry.target.removeAttribute('data-src');
         }
      }
    }
  };

  render() {
    return <img data-src={this.imgSrc}/>;
  }
}