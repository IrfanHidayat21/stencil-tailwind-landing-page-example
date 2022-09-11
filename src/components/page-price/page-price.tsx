import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-price',
  styleUrl: 'page-price.css',

})
export class PagePrice {

  render() {
    return[
      <ion-content>

        <app-header></app-header>

        <div class="container containermv">
          <div class="container-support">
            <section>
              <div class="max-w-full mx-auto py-2 px-0">
                <p class="title-center -mb-1 pt-0">
                  Harga
                </p>
                <p class="detail-center">
                  Pilih salah satu paket harga untuk merasakan mudahnya ujian online dengan Monev
                </p>
                <div class="line-pink-rounded"></div>

                <div class="div-widthcard">
                  <div class="div-flexcol">
                    <div
                      class="card-priceL">
                      <div class="card-shadow">
                        <div
                          class="div-card">
                          <h1 class="h1-card">
                            DEMO
                          </h1>
                          <h2 class="h2-card">FREE</h2>

                          Dapatkan fitur demo untuk ujicoba
                        </div>

                        <div class="flex-card">
                          <ul>
                            <li class="flex items-center">
                              <div class=" rounded-checklist">
                                <svg class="svg-checklist" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </div>
                              <span class="text-checklist">No setup</span>
                            </li>
                            <li class="flex items-center">
                              <div class=" rounded-checklist">
                                <svg class="svg-checklist" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </div>
                              <span class="text-checklist">No setups</span>
                            </li>
                            <li class="flex items-center">
                              <div class=" rounded-checklist">
                                <svg class="svg-checklist" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </div>
                              <span class="text-checklist">Speed</span>
                            </li>
                          </ul>
                        </div>
                        <div class="div-btn-card">
                          <button class="btn-card">
                            Pilih
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      class="card-center">
                      <div
                        class="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                        Rekomendasi
                      </div>
                      <div
                        class="div-card">
                        <h1 class="h1-card">
                          Premium
                        </h1>
                        <h2 class="text-sm text-gray-500 leano text-center pb-6"><span class="text-2xl txt-lg">Rp
                            15.000</span> /orang</h2>

                        Dapatkan fitur lengkap dan pelayanan khusus dari tim monev support
                      </div>
                      <div class="flex pl-12 justify-start mt-3">
                        <ul>
                          <li class="flex items-center">
                            <div class="rounded-checklist">
                              <svg class="svg-checklist" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span class="text-checklist">No setup</span>
                          </li>
                          <li class="flex items-center">
                            <div class=" rounded-checklist">
                              <svg class="svg-checklist" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span class="text-checklist">Hidden fees</span>
                          </li>
                          <li class="flex items-center">
                            <div class=" rounded-checklist">
                              <svg class="svg-checklist" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span class="text-checklist">Original</span>
                          </li>
                        </ul>
                      </div>

                      <div class="div-btn-card">
                        <button class="btn-card">
                          Pilih
                        </button>
                      </div>
                    </div>
                    <div
                      class="card-priceR">
                      <div class="card-shadow">
                        <div
                          class="div-card">
                          <h1 class="h1-card">
                            Reguler
                          </h1>
                          <h2 class="h2-card">Rp 10.000 /orang</h2>

                          Dapatkan fitur dibawah dan pelayanan khusus dari tim monev support
                        </div>
                        <div class="flex-card">
                          <ul>
                            <li class="flex items-center">
                              <div class=" rounded-checklist">
                                <svg class="svg-checklist" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </div>
                              <span class="text-checklist">Electric</span>
                            </li>
                            <li class="flex items-center">
                              <div class=" rounded-checklist">
                                <svg class="svg-checklist" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </div>
                              <span class="text-checklist">Monthly</span>
                            </li>
                            <li class="flex items-center">
                              <div class=" rounded-checklist">
                                <svg class="svg-checklist" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                              </div>
                              <span class="text-checklist">No setup</span>
                            </li>
                          </ul>
                        </div>

                        <div class="div-btn-card">
                          <button class="btn-card">
                            Pilih
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="container line-horizontal">
        </div>

        <app-footer></app-footer>

        </div>
      </ion-content>
    ];
  }

}
