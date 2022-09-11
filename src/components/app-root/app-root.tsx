import { Component, Element, Listen, State, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  hasSeenTutorial = false;
  @State() sideMenu;

  @Element() el: any;

  @State() dark = false;

  @State() loggedIn = false;

  @Listen('ionRouteWillChange')
  routeChanged() {
    this.el.forceUpdate();
  }

  async componentWillLoad() {

      this.sideMenu = document.createElement('app-lp-top-menu');
  }

  async componentDidLoad() {
    
  }


  toggleChanged(event: any) {
    this.dark = event.target.checked;
  }

  isActiveUrl(url: string) {
    const current = window.location.pathname;

    if (current.includes(url)) {
      return true;
    }

    return false;
  }

  @Listen('userDidLogIn')
  @Listen('userDidLogOut')
  updateLoggedInStatus(loggedEvent) {
    this.loggedIn = loggedEvent.detail.loginStatus;
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

  renderRouter() {
    return (
      <ion-router useHash={false}>
        <ion-route-redirect from="/" to="/home" />
        <ion-route url="/" component="page-product"></ion-route>
        <ion-route url="/company" component="page-company"></ion-route>
        <ion-route url="/stories" component="page-stories"></ion-route>
        <ion-route url="/support" component="page-support"></ion-route>
        <ion-route url="/price" component="page-price"></ion-route>
        <ion-route url="/features" component="page-features"></ion-route>
        <ion-route url="/home" component="page-home"></ion-route>
      </ion-router>
    );
  }



  render() {
    return [

      <ion-app>
        {this.renderRouter()}
        <ion-router-outlet animated={false} id="menu-content"></ion-router-outlet>

      </ion-app>
    ];
  }
}

