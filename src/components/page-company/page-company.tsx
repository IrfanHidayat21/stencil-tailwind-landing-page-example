import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'page-company',
  styleUrl: 'page-company.css',
})
export class PageCompany {
  @State() data: any=[];
  @State() logo: any = {};
  @State() profile: any=[];
  @State() galleryL: any={};
  @State() galleryR: any=[];
  @State() galleryB: any=[];
  @State() dataArray: any=[];
  @State() intro: any={};
  @State() about: any={};
 
  @State() News:any=[];
  @State() loadLogin = 0;

  async getNews() {
  await this.skeletonLoad();
  const log = await fetch('/assets/data/data-logo.json');
  const logo = await  log.json(); 
  this.logo = logo;

   const ret = await fetch('/assets/data/data-site.json');
   const data = await  ret.json(); 
   this.data = data.data;
 
   const intro = this.data.intro;
   this.intro = intro;

   const about = this.data.about;
   this.about = about;

   const ret2 = await fetch('/assets/data/data-company.json');
   const company = await  ret2.json(); 
   this.profile = company.profile;
   this.galleryL = company.galleryL;
   this.galleryR = company.galleryR;
   this.galleryB = company.galleryB;
 }
 
   async componentWillLoad() {
        await this.getNews();
   }

   async skeletonLoad() {

    if (this.data == null || undefined) {
      setTimeout(() => {
        this.loadLogin = 0;
      }, 2000);
    }
    else if (this.profile == null || undefined) {
      setTimeout(() => {
        this.loadLogin = 0;
      }, 2000);
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

        <div class="container containermv">
        <my-component hidden={this.loadLogin==0} type="logoMonev" img-src={this.logo.logoOnly}></my-component>
          {this.loadLogin == 0
          ? <ion-skeleton-text class="skeleton-logo-center" animated>
          </ion-skeleton-text>
          :''}
          <div class="text-center pb-12 mb-12  justify-center">
            <p class="title-content title-intro">
              {this.intro.title}
            </p>
            <p class="desc-about text-center mt-6">
              {this.about.desc}
            </p>
          </div>

          <div class="container line-horizontal">
          </div>

          <div class=" mx-auto text-center py-12 my-12  w-11/12 justify-center">
            <p class="title-center -mt-10 mb-10">
              Contact Us
            </p>

            <div class="grid-company">
            {this.profile.map(ds => 
              <div class=" shadow rounded-md h-auto pb-3">
                 <my-component hidden={this.loadLogin==0} type="imgProfile" img-src={ds.imgUrl}></my-component>
                 {this.loadLogin == 0
                       ? <ion-skeleton-text class="w-full h-56 rounded-b-none rounded-t-md" animated>
                        </ion-skeleton-text>
                        :''}
                <div class="items-center px-6 -mt-1 mb-3 py-1 bg-brand-pink"></div>
                <p class="text-center font-bold text-md  text-gray-800">{ds.name}</p>
                <p class="text-center font-light text-sm text-gray-700">{ds.title}</p>
              </div>
              )}
            </div>
          </div>



          <div class="container line-horizontal">
          </div>


          <div class="div-gallery">
            <p class="title-center -mt-10 mb-10">
              Gallery
            </p>
            {/* <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-0 py-6">
              <div class="w-full h-auto overflow-hidden"> */}
                {/* <div class="py-2 px-4 bg-brand-pink absolute z-10 align-middle opacity-75 md:max-w-md lg:max-w-lg">
                  <p class="font-bold sm:text-sm md:text-base lg:text-lg text-white">Uji Kompetensi Bakat CPNS Maret
                    2020</p>
                </div> */}
                {/* <img src="/assets/img/company/ujian-1.jpg" alt="" class="w-full h-auto md:h-48 lg:h-72 zoom" />

              </div>

              <div class="w-full h-auto overflow-hidden">
                <img src="/assets/img/company/ujian-2.jpg" alt="" class="w-full h-auto md:h-48 lg:h-72 zoom" />
              </div>

              <div class="w-full h-auto overflow-hidden ">
                <img src="/assets/img/company/ujian-3.jpg" alt="" class="w-full h-auto md:h-48 lg:h-72 zoom " />
              </div>

              <div class="w-full h-auto overflow-hidden">
                <img src="/assets/img/company/ujian-1.jpg" alt="" class="w-full h-auto md:h-48 lg:h-72 zoom" />
              </div>
            </div> */}

            <div class="container mx-auto p-8">
              <div class="flex flex-row flex-wrap -mx-2">
              {this.galleryL.map(dgl => 
                <div class="div-galleryL">
                  <a class="cover-gallery" href="#"
                    title={dgl.desc}>
                    <my-component hidden={this.loadLogin==0} type="imgGallery" img-src={dgl.imgUrl}></my-component>
                    {this.loadLogin == 0
                    ? <ion-skeleton-text class="object-cover object-center w-full h-full" animated>
                      </ion-skeleton-text>
                    : ''}
                  </a>
                </div>
              )}
                <div class="div-galleryR1">
                  <div class="div-flexcol2">
              {this.galleryR.map(dgr => 
                    <div class="div-galleryR2">
                      <a class="cover-gallery" href="#"
                        title={dgr.desc}>
                            <my-component hidden={this.loadLogin==0} type="imgGallery" img-src={dgr.imgUrl}></my-component>
                            {this.loadLogin == 0
                            ? <ion-skeleton-text class="object-cover object-center w-full h-full" animated>
                              </ion-skeleton-text>
                            : ''}
                      </a>
                    </div>
              )}
                  </div>
                </div>
                {this.galleryB.map(dgb => 
                <div class="div-galleryB">
                  <a class="cover-gallery" href="#"
                    title={dgb.desc}>
                       <my-component hidden={this.loadLogin==0} type="imgGallery" img-src={dgb.imgUrl}></my-component>
                            {this.loadLogin == 0
                            ? <ion-skeleton-text class="object-cover object-center w-full h-full" animated>
                              </ion-skeleton-text>
                            : ''}
                  </a>
                </div>
                )}
              </div>
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
