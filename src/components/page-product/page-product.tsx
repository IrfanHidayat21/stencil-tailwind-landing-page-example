import { Component, State, ComponentInterface, h } from '@stencil/core';
import { Build } from '@stencil/core';

@Component({
  tag: 'page-product',
  styleUrl: 'page-product.css',

})
export class PageProduct implements ComponentInterface {
  @State() data: any=[];
  @State() dataArray: any=[];
  @State() intro: any={};
  @State() howtowork: any={};
  @State() about: any={};
  @State() dataContent: Array<any>=[];
  @State() dataContentDet: Array<any>=[];
 
  @State() contents: any=[];
  @State() testimoni: any={};
  @State() partner: any={};
  @State() explain1: any;
  @State() explain2: any;
 
  @State() News:any=[];
  @State() pageNews:number=0;

  @State() loadLogin = 0;
 
  async getData() {
   await this.skeletonLoad();
   const ret = await fetch('/assets/data/data-site.json');
   const data = await  ret.json(); 
   this.data = data.data;
 
   const intro = this.data.intro;
   this.intro = intro;
 
   const howtowork = this.data.howtowork;
   this.howtowork = howtowork;
 
   const about = this.data.about;
   this.about = about;
 
   const content = this.data.content;
   this.dataContent = content;
 
   const testimoni = this.data.testimoni;
   this.testimoni = testimoni;
 
   const partner = this.data.partner;
   this.partner = partner;
 
   const explain1 = this.data.explain1;
   this.explain1 = explain1;
 
   const explain2 = this.data.explain2;
   this.explain2 = explain2;
 
   this.connectedCallback()
 
   return this.processData();

    
 }
 
 processData() {
     for(let i = 0; i < this.dataContent.length; i++){
       let dtArr = [];
       dtArr = this.dataContent[i].contents;
       dtArr.forEach(dt => {
         this.dataContentDet.push(dt);
       }) 
     }
 }
   async componentWillLoad() {

        await this.getData();

   }

   async skeletonLoad() {

        if (this.data == null || undefined) {
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
 
   connectedCallback() {
     // Build.isBrowser is true when running in the
     // browser and false when being prerendered
   
     if (Build.isBrowser) {
       console.log('running in browser');
     } else {
       console.log('running in node while prerendering');
     }
   } 

   render() {
     return [
       <ion-content>

         <app-header></app-header>

         <div class="container containermv">

          <div class="div-intro">
          <my-component hidden={this.loadLogin==0} type="intro" img-src='/assets/img/home/Main-pict.png'></my-component>
          {this.loadLogin == 0
          ?  <ion-skeleton-text class="skeleton-img-intro" animated>
          </ion-skeleton-text>
          :''}
          </div>
      

           <p class="title-intro title-content">
             {this.intro.title}
           </p>

           <div class="div-button">
           <a href="https://admin.monev.co/" target="_blank">
             <button class="btn-primary btn-primary-rounded">
                 Coba sekarang gratis
             </button>
             </a>

             <button class="btn-transparent">
               atau atur jadwal ujian bersama monev support
             </button>
           </div>

           <div class="div-content-bggray">
             <div class="area-video">
               <div class="div-video">
               <mv-video account="unicodeveloper" alias="cartoon" >
               </mv-video>
                 {/* <iframe width="420" height="315" class="h-full w-full justify-center rounded-sm"
                   src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
                 </iframe> */}
               </div>
               {/* <ion-skeleton-text hidden={this.loadLogin==1} class="skeleton-howtowork" animated></ion-skeleton-text> */}
             </div>
             <div class="div-text-howtowork">
               <p class="title-content">
                 Bagaimana Cara Kerja Monev Membantu Anda?
               </p>
               <br />
               <p class="font-normal text-lg">
                 {this.howtowork.title}
               </p>
               <br />
               <p class="btn-underline">
                 Lihat video lainnya
               </p>
             </div>
           </div>

           <div class="container mx-auto w-11/12">
             <div class="text-center pb-12 mb-12 justify-center">
               <p class="title-about">
                 {this.about.title}
               </p>
               <br />
               <p class="desc-about">
                 {this.about.desc}
               </p>
             </div>
           </div>

           <div class="container line-horizontal">
           </div>

           <div class="div-content">
             <div class="text-content pl-5">
               <p class="title-content">
                 {this.dataContent[0].title}
               </p>
               <br />
               <p class="detail-content">
                 {this.dataContent[0].desc}
               </p>
               <br />
               <ul class="text-sm leading-8">
                 {this.dataContentDet.map((ds) =>
                 ds.contentId == 1 ?
                 <li>
                   <ion-icon mode="md" class="icon-checkmark" name="checkmark-circle-outline"></ion-icon>
                   {ds.detail}
                 </li>
                 :''

                 )}
               </ul>
             </div>
             <div class="img-content img-right">
             <my-component hidden={this.loadLogin==0} type="dataContent" img-src={this.dataContent[0].imgUrl}></my-component>
                 {this.loadLogin == 0
                 ? <ion-skeleton-text class="skeleton-imgContent" animated>
               </ion-skeleton-text> 
               : ''}
             </div>


           </div>

           <div class="container line-horizontal">
           </div>

           <div class="div-content">
             <div class="img-content img-left">
             <my-component hidden={this.loadLogin==0} type="dataContent" img-src={this.dataContent[1].imgUrl}></my-component>
                 {this.loadLogin == 0
                 ? <ion-skeleton-text class="skeleton-imgContent" animated>
               </ion-skeleton-text> 
               : ''}
             </div>

             <div class="text-content pl-5">
               <p class="title-content">
                 {this.dataContent[1].title}
               </p>
               <br />
               <p class="detail-content">
                 {this.dataContent[1].desc}
               </p>
               <br />
               <ul class="text-sm leading-8">
                 {this.dataContentDet.map((ds) =>
                 ds.contentId == 2 ?
                 <li>
                   <ion-icon mode="md" class="icon-checkmark" name="checkmark-circle-outline"></ion-icon>
                   {ds.detail}
                 </li>
                 :''

                 )}
               </ul>
             </div>

           </div>

           <div class="container line-horizontal">
           </div>

           <div class="div-content ">
             <div class="text-content pl-5">
               <p class="title-content">
                 {this.dataContent[2].title}
               </p>
               <br />
               <p class="detail-content">
                 {this.dataContent[2].desc}
               </p>
               <br />
               <ul class="text-sm leading-8">
                 {this.dataContentDet.map((ds) =>
                 ds.contentId == 3 ?
                 <li>
                   <ion-icon mode="md" class="icon-checkmark" name="checkmark-circle-outline"></ion-icon>
                   {ds.detail}
                 </li>
                 :''

                 )}
               </ul>
             </div>
             <div class="img-content img-right">
             <my-component hidden={this.loadLogin==0} type="dataContent" img-src={this.dataContent[2].imgUrl}></my-component>
                 {this.loadLogin == 0
                 ? <ion-skeleton-text class="skeleton-imgContent" animated>
               </ion-skeleton-text> 
               : ''}
             </div>

           </div>

           <div class="container line-horizontal">
           </div>

           <div class="container div-testi">
             <p class="text-2xl font-normal">
               {this.testimoni.name}
             </p>

             <p class=" text-brand-pink pt-10">
               {this.testimoni.testi}
             </p>
           </div>

           <div class="div-content-bggray text-center block">
             <p class=" mx-auto w-4/5 text-2xl font-normal text-center">
               Telah dipercaya puluhan universitas di Indonesia
             </p>
             <my-component hidden={this.loadLogin==0} type="logoPartner" img-src={this.partner[0].imgUrl}></my-component>
                 {this.loadLogin == 0
                 ? <ion-skeleton-text class="skeleton-imgPartner" animated>
                 </ion-skeleton-text>
               : ''}
           </div>

           <div class="container div-testi w-11/12">
             <p class=" title-content">Monev telah dipercaya puluhan Universitas
               di Indonesia</p>
             <p class="detail-content py-5">Miliki fasilitas Monev dengan biaya
               terjangkau.</p>

              <a href="https://admin.monev.co/" target="_blank">
             <button class="btn-primary btn-primary-rounded">
                 Coba sekarang gratis
             </button>
             </a>

             <button class="btn-transparent">
               atau atur jadwal ujian bersama monev support
             </button>

             {/* <img src="/assets/img/home/device-hr-img.png" alt="" class="mx-auto py-16" />

             <p class="text-normal mx-auto font-normal w-4/5 md:w-auto">
               Monev tersedia dalam website yang dapat diakses dengan bermacam-macam platform (mobile, tablet, dan PC).
             </p> */}
           </div>

           <div class="container line-horizontal">
           </div>

           <div class="container div-explain">
             <p class="text-normal font-normal indent-sm">
               {this.explain1}
             </p>
             <br />
             <p class="text-normal font-normal indent-sm">
               {this.explain2}
             </p>
           </div>

           <div class="container line-horizontal">
           </div>

           <app-footer></app-footer>

         </div>


       </ion-content>
     ];
   }
 
 }
