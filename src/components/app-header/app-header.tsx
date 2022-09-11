import { Component, ComponentInterface, h, Listen, State } from '@stencil/core';
import '@ionic/core'

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
})
export class AppHeader implements ComponentInterface {
  @State() sideMenu;
  @State() images: any = {};
  @State() loadLogin = 0;

  public navCtrl: HTMLIonRouterElement = document.querySelector("ion-router");

  @Listen("window:closeSideMenuFromHome")
  closeSideMenuFromHomeHandler() {
    this.topMenu(0);
  }

  async componentWillLoad(){
    this.sideMenu = document.createElement('app-lp-top-menu');
  }

  topMenu(x) {
    if(x == 1){
      document.body.appendChild(this.sideMenu);
      window.dispatchEvent(new Event ('openSideMenu'));
      
      
    }else{
      window.dispatchEvent(new Event ('closeSideMenu'));
      setTimeout(()=>{
        this.sideMenu.remove();
      }, 500);
      
    }
    
  }

  topListMenu1(ev) {
    const popover = Object.assign(document.createElement('ion-popover'), {
      component: 'app-popover-top-menu',
      event: ev,
      cssClass: 'popover-style',
      translucent: true,

    });
    popover.showBackdrop = false;
    document.body.appendChild(popover);
    return popover.present();
  }

  pushPage(page) {
    this.navCtrl.push(page, "forward").then(() => {
    });
  }


  render() {
    return [
            <header class="bg head-sidemenu">
              <div class="div-sidemenu">
              <div class="nav-md">
                  <div class=" my-auto">
                        <img class="w-24" src="/assets/img/monev-rectangle-light.png" alt="Monev Logo"/>
                        {/* <ion-skeleton-text hidden={this.loadLogin==1} class="w-24 h-6" animated>
                        </ion-skeleton-text> */}
                  </div>
              </div>

              <button class="my-auto"  onClick={() => this.topMenu(1)}>
              <img src="/assets/img/btn-hamburger.svg" class="btn-hamburger" alt="side menu"/>
              </button>
              </div>
            </header>,

            <header class="bg head-navbar">
              <div class="fixed w-full flex bg-white justify-between z-20">
                {/* <div class="container nav-lg">
                  <div class="img-blogo">
                        <img class="w-10" src="/assets/img/logomonev.png" alt="Monev Logo"/>
                  </div>
                  


                  <div class="flex">
                  <a href="/">
                  <button class="tooltip btn-nav">
                    PRODUK
                  </button>
                  </a>
                  <a href="/company">
                  <button class="tooltip btn-nav">
                    PERUSAHAAN
                  </button>
                  </a>
                  <a href="/stories">
                  <button class="tooltip btn-nav">
                    USER STORIES
                  </button>
                  </a>
                  </div>                
                </div> */}

                <div class="w-10/12 mx-auto flex">
                <div class="container w-full flex justify-between">
                    <div class="img-tlogo w-1/4">
                        <img src="/assets/img/monev-rectangle-light.png" alt="Monev Logo" class="w-48 p" />
                        {/* <ion-skeleton-text hidden={this.loadLogin==1} class="w-48 h-8 ml-3" animated>
                        </ion-skeleton-text> */}
                    </div>
                    <div>
                    <ul class="flex">
                        <li class="hover:text-brand-pink">
                            <a href="/home" class="btn-nav-2">Home</a>
                          </li>

                          <li class="hover:text-brand-pink">
                            <a href="" class="btn-nav-2">Solusi</a>
                          </li>

                          <li class="hover:text-brand-pink">
                            <a href="/price" class="btn-nav-2">Harga</a>
                          </li>

                          <li class="hover:text-brand-pink">
                            <a href="/support" class="btn-nav-2">Bantuan</a>
                          </li>
                    </ul>
                    </div>

                    <div class="w-1/4 my-auto pr-2">
                    <button class="btn-primary-outline btn-adm float-right">
                      <a href="https://admin.monev.co/" target="_blank">
                        Masuk
                        </a>
                      </button>
                    </div>

                </div>  

                </div>  
                </div>
            </header>
    ];
  }

}
