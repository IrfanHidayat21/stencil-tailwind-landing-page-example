import { Component, State, Element, ComponentInterface, h } from '@stencil/core';
import { Build } from '@stencil/core';
// import { Slider } from '../../public/slider.js';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
})
export class PageHome  implements ComponentInterface {
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
 @State() cont:number=0;
 @State() xx:any;

 @Element() el: HTMLElement;

 componentDidLoad() {
   this.loopSlider();
  document.getElementById('sButton1').style.background = 'teal';
  document.getElementById('sButton2').style.background ='gray';
  document.getElementById('sButton3').style.background ='gray';
  document.getElementById('sButton4').style.background ='gray';

}

 loopSlider() {
    this.xx = setInterval(function fadeInOut() {
        switch (this.cont) {
          case 0:{
            document.getElementById('slider-1').style.display = 'block';
            document.getElementById('slider-2').style.display = 'none';
            document.getElementById('sButton1').style.background = 'teal';
            document.getElementById('sButton2').style.background ='gray';
            this.cont = 1;

            break;
          }

          case 1:{
            document.getElementById('slider-1').style.display = 'none';
            document.getElementById('slider-2').style.display = 'block';
            document.getElementById('sButton1').style.background = 'gray';
            document.getElementById('sButton2').style.background ='teal';
            this.cont = 0;

            break;
          }
        }
    },8000);


 }

 reinitLoop(time) {
  clearInterval(this.xx);
  setTimeout(() => {
    this.loopSlider();
  }, time);
 }

 sliderButton1() {
  document.getElementById('slider-1').style.display = 'block';
  document.getElementById('slider-2').style.display = 'none';
  document.getElementById('slider-3').style.display = 'none';
  document.getElementById('slider-4').style.display = 'none';
  document.getElementById('sButton1').style.background = 'teal';
  document.getElementById('sButton2').style.background ='gray';
  document.getElementById('sButton3').style.background = 'gray';
  document.getElementById('sButton4').style.background ='gray';
  this.reinitLoop(4000);
  this.cont=0;
 }

 sliderButton2() {
  document.getElementById('slider-1').style.display = 'none';
  document.getElementById('slider-2').style.display = 'block';
  document.getElementById('slider-3').style.display = 'none';
  document.getElementById('slider-4').style.display = 'none';
  document.getElementById('sButton1').style.background = 'gray';
  document.getElementById('sButton2').style.background ='teal';
  document.getElementById('sButton3').style.background = 'gray';
  document.getElementById('sButton4').style.background ='gray';
  this.reinitLoop(4000);
  this.cont=1;
 }

 sliderButton3() {
  document.getElementById('slider-1').style.display = 'none';
  document.getElementById('slider-2').style.display = 'none';
  document.getElementById('slider-3').style.display = 'block';
  document.getElementById('slider-4').style.display = 'none';
  document.getElementById('sButton1').style.background = 'gray';
  document.getElementById('sButton2').style.background ='gray';
  document.getElementById('sButton3').style.background = 'teal';
  document.getElementById('sButton4').style.background ='gray';
  this.reinitLoop(4000);
  this.cont=0;
 }

 sliderButton4() {
  document.getElementById('slider-1').style.display = 'none';
  document.getElementById('slider-2').style.display = 'none';
  document.getElementById('slider-3').style.display = 'none';
  document.getElementById('slider-4').style.display = 'block';
  document.getElementById('sButton1').style.background = 'gray';
  document.getElementById('sButton2').style.background ='gray';
  document.getElementById('sButton3').style.background = 'gray';
  document.getElementById('sButton4').style.background ='teal';
  this.reinitLoop(4000);
  this.cont=1;
 }


 async getNews() {
  // CrudService.getDataNew4(cfg.news.news,'publishDate,desc','4', this.pageNews).then(async rs => {
  //   if(rs){
  //     this.News = rs;
  //   }

  // });
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
       await this.getNews();
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
      
      <div class="mt-12 mx-auto pt-4 font-sans lg:pt-4">
      <div class="pt-6 mt-6 w-11/12 mx-auto lg:w-10/12">
      <p class="w-10/12 text-center font-bold mx-auto text-gray-800 text-2xl md:text-2xl lg:text-3xl">
        {this.intro.title}
      </p>

      <p class=" text-gray-700 font-normal text-center text-base mx-auto ">Manajemen proses monitoring & evaluasi kegiatan ujian kini ada dalam genggaman Anda</p>

      <div class=" w-3/4 md:w-48 mx-auto py-5 ">
      <button class="btn-primary w-full rounded-lg">
          Coba sekarang, Gratis
      </button>  
  
      </div>

      <div class="w-full bg-gray-200 my-auto h-40 md:pt-0 lg:mt-6">
        {/* <img src={this.intro.imgUrl} alt="" class="h-auto w-full justify-center"/> */}
      </div>

      </div> 

      <div class="pt-2 mt-2 w-11/12 mx-auto  lg:pt-4 lg:mt-4 lg:w-10/12">
      <p class="w-10/12 text-center font-bold mx-auto text-gray-800 text-2xl md:text-2xl lg:text-3xl">
        Bagaimana monev membantu institusi Anda?
      </p>

      <p class=" text-gray-700 font-normal text-center text-base mx-auto ">Monev menyederhanakan proses pengelolaan ujian sehingga menjadi lebih mudah dan efektif</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:mt-6">

      <div class="hidden md:block w-full mt-0 h-auto">
        <div class="w-full mx-auto">

          <div class="  bg-teal-500 rounded-lg my-5 py-4 h-auto ">

            <div class=" mx-auto w-11/12 flex mb-2">
              <div class="rounded-full w-8 h-8 bg-teal-100 my-auto mr-3"></div>
              <div class=" w-10/12 text-teal-100 font-bold text-lg ">Kemudahan akses</div>
            </div>

            <div class=" mx-auto  w-10/12 pl-8 mb-2">
              <p class="text-teal-100 font-normal text-base ">Kegiatan ujian berbasis komputer kini dapat dilakukan
                dimana saja, cukup dengan koneksi internet, sehingga ujian tidak selalu diadakan dalam lab komputer.</p>
              <p class="text-teal-100 font-normal text-base mt-4">Pelajari lebih lanjut</p>
            </div>


          </div>

          <div class="my-5 py-4 h-auto ">

            <div class=" mx-auto w-11/12 flex mb-2">
              <div class="rounded-full w-8 h-8 bg-gray-700 my-auto mr-3"></div>
              <div class=" w-10/12 text-gray-700 font-bold text-lg ">Aplikasi berbasis cloud</div>
            </div>

            <div class=" mx-auto  w-10/12 pl-8 mb-2">
              <p class="text-gray-700 font-normal text-base ">Institusi Anda dapat langsung menyelenggarakan ujian tanpa
                perlu repot membeli server, menginstall aplikasi dan menyiapkan tenaga ahli IT.</p>
              <p class="text-gray-700 font-normal text-base mt-4">Pelajari lebih lanjut</p>
            </div>

          </div>

          <div class="my-5 py-4 h-auto ">

            <div class=" mx-auto w-11/12 flex mb-2">
              <div class="rounded-full w-8 h-8 bg-gray-700 my-auto mr-3"></div>
              <div class=" w-10/12 text-gray-700 font-bold text-lg ">Proses yang otomatis</div>
            </div>

            <div class=" mx-auto  w-10/12 pl-8 mb-2">
              <p class="text-gray-700 font-normal text-base ">Kini proses persiapan, pelaksanaan, monitoring dan evaluasi kegiatan ujian dapat dilakukan secara otomatis dalam genggaman Anda.</p>
              <p class="text-gray-700 font-normal text-base mt-4">Pelajari lebih lanjut</p>
            </div>

          </div>

          <div class="my-5 py-4 h-auto ">

            <div class=" mx-auto w-11/12 flex mb-2">
              <div class="rounded-full w-8 h-8 bg-gray-700 my-auto mr-3"></div>
              <div class=" w-10/12 text-gray-700 font-bold text-lg ">Analisa hasil kegiatan</div>
            </div>

            <div class=" mx-auto  w-10/12 pl-8 mb-2">
              <p class="text-gray-700 font-normal text-base ">Analisa hasil ujian dapat diketahui dengan cepat dan akurat, sehingga institusi Anda dapat fokus terhadap rencana tindak lanjut pasca ujian.</p>
              <p class="text-gray-700 font-normal text-base mt-4">Pelajari lebih lanjut</p>
            </div>

          </div>


        </div>
      </div>

      <div class="w-full bg-gray-200 mt-5 h-64 ">
        {/* <img src={this.intro.imgUrl} alt="" class="h-auto w-full justify-center"/> */}
      </div>
      
      </div>


      </div> 

      <div class="block md:hidden w-11/12 mx-auto ">
  
      <div id="slider-1" class=" bg-teal-500 rounded-lg my-5 py-4 h-auto">
       
       <div class=" mx-auto w-11/12 flex mb-2">
          <div class="rounded-full w-8 h-8 bg-teal-100 my-auto mr-3"></div>
          <div class=" w-10/12 text-teal-100 font-bold text-lg ">Kemudahan akses</div>
       </div>

       <div class=" mx-auto w-11/12 mb-2">
          <p class="text-teal-100 font-normal text-base ">Institusi Anda dapat langsung menyelenggarakan ujian tanpa
                perlu repot membeli server, menginstall aplikasi dan menyiapkan tenaga ahli IT.</p>
       </div>

       <div class=" mx-auto w-11/12 mb-2">
          <p class="text-teal-100 font-normal text-base ">Pelajari lebih lanjut</p>
       </div>

      </div>

      <div id="slider-2" class="bg-teal-500 rounded-lg my-5 py-4 h-auto ">
       
       <div class=" mx-auto w-11/12 flex mb-2">
          <div class="rounded-full w-8 h-8 bg-teal-100 my-auto mr-3"></div>
          <div class=" w-10/12 text-teal-100 font-bold text-lg ">Aplikasi berbasis cloud</div>
       </div>

       <div class=" mx-auto w-11/12 mb-2">
          <p class="text-teal-100 font-normal text-base ">Kegiatan ujian berbasis komputer kini dapat dilakukan dimana saja, cukup dengan koneksi internet, sehingga ujian tidak selalu diadakan dalam lab komputer.</p>
       </div>

       <div class=" mx-auto w-11/12 mb-2">
          <p class="text-teal-100 font-normal text-base ">Pelajari lebih lanjut</p>
       </div>

      </div>

      <div id="slider-3" class="bg-teal-500 rounded-lg my-5 py-4 h-auto ">
       
       <div class=" mx-auto w-11/12 flex mb-2">
          <div class="rounded-full w-8 h-8 bg-teal-100 my-auto mr-3"></div>
          <div class=" w-10/12 text-teal-100 font-bold text-lg ">Proses yang otomatis</div>
       </div>

       <div class=" mx-auto w-11/12 mb-2">
          <p class="text-teal-100 font-normal text-base ">Kini proses persiapan, pelaksanaan, monitoring dan evaluasi kegiatan ujian dapat dilakukan secara otomatis dalam genggaman Anda.</p>
       </div>

       <div class=" mx-auto w-11/12 mb-2">
          <p class="text-teal-100 font-normal text-base ">Pelajari lebih lanjut</p>
       </div>

      </div>

      <div id="slider-4" class="bg-teal-500 rounded-lg my-5 py-4 h-auto ">
       
       <div class=" mx-auto w-11/12 flex mb-2">
          <div class="rounded-full w-8 h-8 bg-teal-100 my-auto mr-3"></div>
          <div class=" w-10/12 text-teal-100 font-bold text-lg ">Analisa hasil kegiatan</div>
       </div>

       <div class=" mx-auto w-11/12 mb-2">
          <p class="text-teal-100 font-normal text-base ">Analisa hasil ujian dapat diketahui dengan cepat dan akurat, sehingga institusi Anda dapat fokus terhadap rencana tindak lanjut pasca ujian.</p>
       </div>

       <div class=" mx-auto w-11/12 mb-2">
          <p class="text-teal-100 font-normal text-base ">Pelajari lebih lanjut</p>
       </div>

      </div>

      <div  class="flex justify-between w-24 mx-auto pb-2">
        <button id="sButton1" onClick={() => this.sliderButton1()} class="rounded-full w-4 p-2 " ></button>
        <button id="sButton2" onClick={() => this.sliderButton2()} class="rounded-full w-4 p-2"></button>
        <button id="sButton3" onClick={() => this.sliderButton3()} class="rounded-full w-4 p-2"></button>
        <button id="sButton4" onClick={() => this.sliderButton4()} class="rounded-full w-4 p-2"></button>
      </div>

      </div> 

      <div class="w-full bg-blue-800 py-6 my-3 mx-auto">
      <div class="pt-6 mt-6 w-11/12 mx-auto lg:w-10/12">
      <p class="w-10/12 text-center font-bold mx-auto text-blue-100 text-2xl md:text-2xl lg:text-3xl">
         Tingkatkan mutu ujian lebih mudah dan cepat dengan monev
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2  mt-6">
          <div class=" mx-auto w-full px-10 py-5 md:px-0 lg:px-10">
          <div class="rounded-full w-12 bg-blue-100 mx-auto p-8"></div>
          <p class=" text-blue-100 font-normal text-center text-base mx-auto font-bold py-4">Undang ke Kantor</p>
          <p class=" text-blue-100 font-normal text-center text-sm mx-auto font-normal">Cari tahu bagaimana monev dapat membantu institusi Anda</p>
          
          <div class=" w-3/4 mx-auto py-5 ">
            <button class="btn-white w-full rounded-lg">
              Undang Konsultasi
            </button>
          </div>
          </div>

          <div class=" mx-auto w-full px-10 py-5 md:px-0 lg:px-10">
          <div class="rounded-full w-12 bg-blue-100 mx-auto p-8"></div>
          <p class=" text-blue-100 font-normal text-center text-base mx-auto font-bold py-4">Ikuti Workshop</p>
          <p class=" text-blue-100 font-normal text-center text-sm mx-auto font-normal">Ikuti workshop halo monev untuk pelajari monev secara langsung</p>
          
          <div class=" w-3/4 mx-auto py-5 ">
            <button class="btn-white w-full rounded-lg">
              Daftar Workshop
            </button>
          </div>
          </div>

          <div class=" mx-auto w-full px-10 py-5 md:px-0 lg:px-10">
          <div class="rounded-full w-12 bg-blue-100 mx-auto p-8"></div>
          <p class=" text-blue-100 font-normal text-center text-base mx-auto font-bold py-4">Coba Demo Interaktif</p>
          <p class=" text-blue-100 font-normal text-center text-sm mx-auto font-normal">Eksplorasi beragam fitur untuk semua kebutuhan Anda</p>
          
          <div class=" w-3/4 mx-auto py-5 ">
            <button class="btn-white w-full rounded-lg">
               Coba Gratis
            </button>
          </div>
          </div>

      </div>
      </div> 
      </div>



  {/* <div class="carousel">
    <div class="carousel-inner">
      <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden={false}
        checked={true} />
      <div class="carousel-item">
        <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" />
      </div>
      <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden={false} />
      <div class="carousel-item">
        <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript"/>
      </div>
      <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden={false} />
      <div class="carousel-item">
        <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel" />
      </div>
      <label for="carousel-3" class="carousel-control prev control-1">‹</label>
      <label for="carousel-2" class="carousel-control next control-1">›</label>
      <label for="carousel-1" class="carousel-control prev control-2">‹</label>
      <label for="carousel-3" class="carousel-control next control-2">›</label>
      <label for="carousel-2" class="carousel-control prev control-3">‹</label>
      <label for="carousel-1" class="carousel-control next control-3">›</label>
      <ol class="carousel-indicators">
        <li>
          <label for="carousel-1" class="carousel-bullet">•</label>
        </li>
        <li>
          <label for="carousel-2" class="carousel-bullet">•</label>
        </li>
        <li>
          <label for="carousel-3" class="carousel-bullet">•</label>
        </li>
      </ol>
    </div>
  </div> */}

    </div>

    <app-footer></app-footer>
    </ion-content>
    ];
  }

}
