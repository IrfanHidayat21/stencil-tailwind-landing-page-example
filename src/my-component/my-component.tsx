import {Component, Prop, State, h, Element} from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Element() el: HTMLElement;

  @Prop() imgSrc: string;
  @Prop() type: string;

  @State() loadLogin = 0;
  
  private observer: IntersectionObserver;

  componentDidLoad() {

    const img: HTMLImageElement =
               this.el.shadowRoot.querySelector('img');

    if (img) {
      this.observer = new IntersectionObserver(this.onIntersection);
      this.observer.observe(img);

      console.log(img, 'ini img',  this.observer,'ini observer');
    }

  }

  async componentWillLoad() {
    await this.skeletonLoad();
  }

  async skeletonLoad() {
    if (this.imgSrc == null) {
      setTimeout(() => {
        this.loadLogin = 0;
      }, 2000);
    }
    else {
      setTimeout(() => {
        this.loadLogin = 1;
      }, 1000);
    }

    console.log(this.loadLogin, 'i');
}

  private onIntersection = async (entries) => {
    console.log(entries,'ini entries');
    for (const entry of entries) {
      if (entry.isIntersecting) {
         if (this.observer) {
              this.observer.disconnect();
         }
         
         if (entry.target.getAttribute('data-src')) {
              this.skeletonLoad();
             entry.target.setAttribute('src',
             entry.target.getAttribute('data-src'));
             entry.target.removeAttribute('data-src');
         }
      }
    }
  };

  render() {
    if(this.type == "intro"){
    return (

    <div class="div-img">

        <img data-src={this.imgSrc} class="img-intro" />

        {/* <div  hidden={this.loadLogin==1} class="skeleton-img-intro"> */}
        {/* <ion-skeleton-text class="skeleton-img-intro" animated></ion-skeleton-text> */}
        {/* </div> */}
    </div>
    )
    } else if(this.type == "dataContent"){
      return (
      <div class="div-img">
          <img data-src={this.imgSrc} class="img-center" />
      </div> 
      )
    } else if(this.type == "logoPartner"){
      return (
      <div class="div-img">
          <img data-src={this.imgSrc} class="img-partner" />
      </div> 
      )
     } else if(this.type == "imgStories"){
      return (
      <div class="div-img">
          <img data-src={this.imgSrc} class="img-stories zoom" />
      </div> 
      )
    } else if(this.type == "imgProfile"){
      return (
      <div class="div-img">
          <img data-src={this.imgSrc} class="img-profile" />
      </div> 
      )
    } else if(this.type == "logoMonev"){
      return (
      <div class="div-img">
          <img data-src={this.imgSrc} class="logo-center" />
      </div> 
      )
    } else if(this.type == "imgGallery"){
      return (
      <div class="div-gallery">
          <img data-src={this.imgSrc} class="img-gallery zoom" />
      </div> 
      )
    }
  }
}