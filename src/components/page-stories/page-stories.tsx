import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'page-stories',
  styleUrl: 'page-stories.css',
})
export class PageStories {
  @State() stories: any = [];
  @State() loadLogin = 0;

  async getData() {
    await this.skeletonLoad();
    const ret = await fetch('/assets/data/data-stories.json');
    const stories = await  ret.json(); 
    this.stories = stories;
    console.log('stories',this.stories);
  }

  async componentWillLoad(){

    await this.getData();
  }

  async skeletonLoad() {
    // console.log(ev, 'tes')
    // if (ev != null || undefined) {
    //   this.loadLogin = 0;
    // } else {
    //   this.loadLogin = 1;
    // }
    if (this.stories == null || undefined) {
      setTimeout(() => {
        this.loadLogin = 0;
      }, 1000);
    }
    else {
      setTimeout(() => {
        this.loadLogin = 1;
      }, 1000);
    }
}
  render() {
    return [
      <ion-content>

        <app-header></app-header>

        <div class="container containermv ">
          <div class="container-support">
            <p class="title-center">
              User Stories
            </p>

            <div class="grid-card py-10 my-10">
            {this.stories.map(ds => 
            <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-0">
             <my-component hidden={this.loadLogin==0} type="imgStories" img-src={ds.imgUrl}></my-component>

              {this.loadLogin == 0
               ? <ion-skeleton-text class="w-full h-56 object-cover object-center" animated>
               </ion-skeleton-text> 
               : ''}
            
                <div class="flex items-center px-6 py-1 bg-brand-pink">
                </div>
                <div class="py-4 px-6">
                  <h1 class="name-stories">{ds.name}
                  </h1>
                  <p class="desc-stories">{ds.desc}</p>
                </div>
              </div>
              )}

            </div>
          </div>

          <div class="container line-horizontal">
        </div>

        <app-footer></app-footer>
        
        </div>
      </ion-content>
    ];
  }

}
