import { Component, h, Element, Listen } from '@stencil/core';

@Component({
  tag: 'app-lp-top-menu',
  styleUrl: 'app-lp-top-menu.css'
})
export class AppLpTopMenu {
  io: IntersectionObserver;
  @Element() el: HTMLElement;
  @Listen("window:closeSideMenu")
  closeSideMenuHandler() {
    
    this.el.querySelector('.nice-anim').classList.add('animOut');
    setTimeout(()=>{
      this.el.querySelector('.nice-anim').classList.remove('animOut');
    },500)
  }
  componentDidLoad() {
    
    this.el.querySelector('.nice-anim').classList.add('animMenu');
    
    this.connectedCallback();
  }

  connectedCallback() {
    let strg = localStorage.getItem('menuActiveLP');
    if(strg == '0' || strg == null){
      document.getElementById('aHomeLp').style.color = '#FC1474';
      document.getElementById('liHomeLp').style.listStyleType = 'disc'; 
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '1'){
      document.getElementById('aFeaLp').style.color = '#FC1474';
      document.getElementById('liFeaLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '2'){
      document.getElementById('aHrgLp').style.color = '#FC1474';
      document.getElementById('liHrgLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '3'){
      document.getElementById('aHelpLp').style.color = '#FC1474';
      document.getElementById('liHelpLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '4'){
      document.getElementById('aTryLp').style.color = '#FC1474';
      document.getElementById('liTryLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '5'){
      document.getElementById('aDwnLp').style.color = '#FC1474';
      document.getElementById('liDwnLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '6'){
      document.getElementById('aSolLp').style.color = '#FC1474';
      document.getElementById('liSolLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '7'){
      document.getElementById('aPerLp').style.color = '#FC1474';
      document.getElementById('liPerLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '8'){
      document.getElementById('aRcrLp').style.color = '#FC1474';
      document.getElementById('liRcrLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '9'){
      document.getElementById('aPrtLp').style.color = '#FC1474';
      document.getElementById('liPrtLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aAboutLp').style.color = '#392D38';
      document.getElementById('liAboutLp').style.listStyleType = 'none';
    }else if(strg == '10'){
      document.getElementById('aAboutLp').style.color = '#FC1474';
      document.getElementById('liAboutLp').style.listStyleType = 'disc';
      document.getElementById('aHomeLp').style.color = '#392D38';
      document.getElementById('liHomeLp').style.listStyleType = 'none';
      document.getElementById('aFeaLp').style.color = '#392D38';
      document.getElementById('liFeaLp').style.listStyleType = 'none';
      document.getElementById('aHrgLp').style.color = '#392D38';
      document.getElementById('liHrgLp').style.listStyleType = 'none';
      document.getElementById('aHelpLp').style.color = '#392D38';
      document.getElementById('liHelpLp').style.listStyleType = 'none';
      document.getElementById('aTryLp').style.color = '#392D38';
      document.getElementById('liTryLp').style.listStyleType = 'none';
      document.getElementById('aDwnLp').style.color = '#392D38';
      document.getElementById('liDwnLp').style.listStyleType = 'none';
      document.getElementById('aSolLp').style.color = '#392D38';
      document.getElementById('liSolLp').style.listStyleType = 'none';
      document.getElementById('aPerLp').style.color = '#392D38';
      document.getElementById('liPerLp').style.listStyleType = 'none';
      document.getElementById('aRcrLp').style.color = '#392D38';
      document.getElementById('liRcrLp').style.listStyleType = 'none';
      document.getElementById('aPrtLp').style.color = '#392D38';
      document.getElementById('liPrtLp').style.listStyleType = 'none';
    } else {
            localStorage.setItem('menuActiveLP', '0');
    }
  }

  closeMenu(){
    window.dispatchEvent(new Event ('closeSideMenuFromHome'));
    window.dispatchEvent(new Event ('closeSideMenuFromTopMenu'));

  }
  toPage(event, num){
    localStorage.setItem('menuActiveLP', num);
    window.dispatchEvent(new Event ('closeSideMenuFromHome'));
    window.dispatchEvent(new Event ('closeSideMenuFromTopMenu'));
    window.dispatchEvent(new Event (event));
  }
  render() {
    return (
     <div class="nice-anim body font-sans">
       <ion-button fill="clear" slot="end" class="btn-close-top-menu" onClick={()=>this.closeMenu()}>
          <ion-icon class="text-brand-pink" name="close"></ion-icon>
        </ion-button>
        <div class="div-toolbar-top-LP">
          <div class="btn-toolbar-top-LP">
            <ul>
              <li id="liHomeLp" onClick={()=> this.toPage('headerLPHome', 0)}><a class="block" href="/" id="aHomeLp"><div class="text-sidemenu">PRODUK</div></a></li>
              <li id="liFeaLp" onClick={()=> this.toPage('headerLPFeature', 1)}><a class="block" href="/features" id="aFeaLp" ><div class="text-sidemenu">FITUR</div></a></li>
              <li id="liHrgLp" onClick={()=> this.toPage('headerLPHrg', 2)}><a class="block" href="/price" id="aHrgLp"><div class="text-sidemenu">HARGA</div></a></li>
              <li id="liHelpLp" onClick={()=> this.toPage('headerLPHelp', 3)}><a class="block" href="/support" id="aHelpLp"><div class="text-sidemenu">BANTUAN</div></a></li>
              <li id="liTryLp" onClick={()=> this.toPage('headerLPTry', 4)}><a class="block"  href="https://admin.monev.co/" target="_blank" id="aTryLp"><div class="text-sidemenu">COBA ADMIN</div></a></li>
              <li id="liDwnLp" onClick={()=> this.toPage('headerLPDwn', 5)}><a class="block" href="https://app.monev.co/" target="_blank" id="aDwnLp"><div class="text-sidemenu">COBA PARTICIPANT</div></a></li>
              {/* <li id="liSolLp" onClick={()=> this.toPage('headerLPSol', 6)}><a class="block" id="aSolLp">SOLUSI</a></li> */}
              <li id="liPerLp" onClick={()=> this.toPage('headerLPPer', 7)}><a class="block" href="/company" id="aPerLp"><div class="text-sidemenu">PERUSAHAAN</div></a></li>
              {/* <li id="liRcrLp" onClick={()=> this.toPage('headerLPRcr', 8)}><a class="block" id="aRcrLp"></a></li> */}
              <li id="liPrtLp" onClick={()=> this.toPage('headerLPPrt', 9)}><a class="block" href="/stories" id="aPrtLp"><div class="text-sidemenu">USER STORIES</div></a></li>
              {/* <li id="liAboutLp" onClick={()=> this.toPage('headerLPAbout', 10)}><a class="block" id="aAboutLp">ABOUT</a></li> */}
            </ul>
            {/* <p><a class="block" id="aHomeLp" onClick={()=> this.toPage('headerLPHome')}>Home</a></p>
            <p><a class="block" onClick={()=> this.toPage('headerLPHrg')}>Service</a></p>
            <p><a class="block" onClick={()=> this.toPage('headerLPFeature')}>Feature</a></p>
            <p><a class="block" onClick={()=> this.toPage('headerLPHelp')}>Help Now</a></p>
            <p><a class="block" onClick={()=> this.toPage('headerLPAbout')}>About</a></p> */}
            {/* <div>
              <ion-button onClick={()=> this.toPage('headerLPHome')} fill="clear" class="btn-top-menu-LP">Home</ion-button>
            </div>
            <div>
              <ion-button onClick={()=> this.toPage('headerLPHrg')} fill="clear" class="btn-top-menu-LP">Service</ion-button>
            </div>
            <div>
              <ion-button onClick={()=> this.toPage('headerLPFeature')} fill="clear" class="btn-top-menu-LP">Feature</ion-button>
          
            </div>
            <div>
              <ion-button onClick={()=> this.toPage('headerLPHelp')} fill="clear" class="btn-top-menu-LP">Help Now</ion-button>
          
            </div>
            <div>
              <ion-button onClick={()=> this.toPage('headerLPAbout')} fill="clear" class="btn-top-menu-LP">About</ion-button>
            </div> */}
          </div>
      </div>
       
     </div>
    );
  }

}
