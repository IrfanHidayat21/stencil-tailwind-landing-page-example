import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-support',
  styleUrl: 'page-support.css',
})
export class PageSupport {

  render() {
    return[
      <ion-content>

        <app-header></app-header>

        <div class="container containermv">
          <div class="container-support">
            <p class="title-center pb-10">
              Bantuan
            </p>

            <div class="grid-card">
              <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <h1 class="text-2xl text-gray-800 font-bold p-3 py-5 text-center tracking-wide">
                  Pusat Bantuan
                </h1>

                <p class="leading-normal text-sm font-medium text-gray-700 p-3 text-center">Dapatkan bantuan informasi
                  secara detail tentang aplikasi monev disini!</p>

                <div class="btn-absolute block flex items-center py-5 px-3  uppercase">

                  <button class="btn-card ">
                    <a href="https://manual.monev.co/" target="_blank">
                      Go to Help Center
                    </a>
                  </button>

                </div>
              </div>

              <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <h1 class="text-2xl text-gray-800 font-bold p-3 py-5 text-center tracking-wide">
                  Participant
                </h1>

                <p class="leading-normal text-sm font-medium text-gray-700 p-3 text-center">Pelajari cara penggunaan
                  aplikasi monev participant disini!</p>

                <div class="block flex items-center p-5 px-8  uppercase">
                  <button class="btn-card">
                    <a href="https://manual.monev.co/guideline" target="_blank">
                      Manual Participant
                    </a>
                  </button>
                </div>
              </div>

              <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <h1 class="text-2xl text-gray-800 font-bold p-3 py-5 text-center tracking-wide">
                  Admin
                </h1>

                <p class="leading-normal text-sm font-medium text-gray-700 p-3 text-center">Pelajari cara menggunakan
                  aplikasi monev admin disini
                </p>

                <div class="block flex items-center p-5 px-8  uppercase">
                  <button class="btn-card">
                    <a href="https://manual.monev.co/guideline" target="_blank">
                      Manual Admin
                    </a>
                  </button>
                </div>
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
