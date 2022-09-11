import { Component, h, Prop } from '@stencil/core';
import { State } from '@stencil/core';

@Component({
  tag: 'app-popover-top-menu',
  styleUrl: 'app-popover-top-menu.css',

})
export class AppPopoverTopMenu {
  @State() check: boolean = true;
  @State() check2: boolean = false;
  @State() username: string;
  @State() popover = document.querySelector('ion-popover');
  public navCtrl: HTMLIonRouterElement = document.querySelector("ion-router");

  @Prop() page;


  componentDidLoad(){

  }

  render() {

    return [

        <div class="divcontainer font-sans">

          <div class="divbottom overflow-hidden">
          <ion-buttons class="btnsTop">
            <ion-button fill="clear" shape="round" class="butBtm text-sm">
               Startup & Tech
            </ion-button>
          </ion-buttons>

          <ion-buttons class="btnsTop">
            <ion-button fill="clear" shape="round" class="butBtm">
               Professional & Bussiness Service
            </ion-button>
          </ion-buttons>

          <ion-buttons class="btnsTop">
            <ion-button fill="clear" shape="round" class="butBtm">
               Bisnis Retail
            </ion-button>
          </ion-buttons>

          <ion-buttons class="btnsTop">
            <ion-button fill="clear" shape="round" class="butBtm">
               Kuliner/F&B
            </ion-button>
          </ion-buttons>

          </div>

        </div>


    ];
  }
}
