import { Component, State, h } from '@stencil/core';
import { Build } from '@stencil/core';

@Component({
  tag: 'page-features',
  styleUrl: 'page-features.css',
})
export class PageFeatures {
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
      <p class="title-center">
              Fitur
      </p>
      <div class="div-content">
       <div class="text-content pl-5">
         <p class="title-content">
           {this.dataContent[0].title}
         </p>
         <br/>
         <p class="detail-content">
           {this.dataContent[0].desc}
         </p>
         <br/>
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
     <div class="img-content  img-left">
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
     <br/>
     <p class="detail-content">
     {this.dataContent[1].desc}
     </p>
     <br/>
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
 
     <div class="div-content">
     <div class="text-content pl-5">
     <p class="title-content">
     {this.dataContent[2].title}     
     </p>
     <br/>
     <p class="detail-content">
     {this.dataContent[2].desc}       
     </p>
     <br/>
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

     <app-footer></app-footer>
      </div>

      </ion-content>
    ];
  }

}
