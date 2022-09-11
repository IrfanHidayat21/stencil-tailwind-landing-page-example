import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.css',
})
export class AppFooter {

  render() {
    return [
      <div>
          <div class="ml-4 pt-4 block md:hidden lg:w-11/12">
              <img src="/assets/img/monev-rectangle-light.png" alt="Monev Logo" class="w-32" />
          </div>
        <div
          class="div-footer lg:w-11/12">
          <ul class="px-6 pt-4 hidden md:block lg:pt-2">
            <div class="img-llogo">
              <img src="/assets/img/monev-rectangle-light.png" alt="Monev Logo" class="w-32 mx-auto" />
            </div>
          </ul>

          <ul class="px-6">
            <li class=" title-footer">Solusi</li>
            <li class=" link-footer"><a class="block" href="">Manajemen Soal</a></li>
            <li class=" link-footer"><a class="block" href="">Persiapan Ujian</a></li>
            <li class=" link-footer"><a class="block" href="">Pelaksanaan Ujian</a></li>
            <li class=" link-footer"><a class="block" href="">Evaluasi Ujian</a></li>
          </ul>


          <ul class="px-6">
            <li class=" title-footer">Resources</li>
            <li class=" link-footer"><a class="block" href="">Bantuan</a></li>
            <li class=" link-footer"><a class="block" href="">Blog & Artikel</a></li>
            <li class=" link-footer"><a class="block" href="">Case Studies</a></li>
            <li class=" link-footer"><a class="block" href="">White Paper</a></li>
          </ul>


          <ul class="px-6">
            <li class=" title-footer">Perusahaan</li>
            <li class=" link-footer"><a class="block" href="/company">Hubungi Kami</a></li>
            <li class=" link-footer"><a class="block" href="/company">Tentang Monev</a></li>
            <li class=" link-footer"><a class="block" href="">Keamanan & Privasi</a></li>
            <li class=" link-footer"><a class="block" href="">Syarat & Ketentuan</a></li>
          </ul>


          {/* <ul class="px-2">
            <li class=" title-footer">Ikuti Monev</li>
            <li class=" link-footer"><a class="block" href="">Facebook</a></li>
            <li class=" link-footer"><a class="block" href="">Twitter</a></li>
            <li class=" link-footer"><a class="block" href="">Instagram</a></li>
            <li class=" link-footer"><a class="block" href="">LinkedIn</a></li>
          </ul> */}
        </div>

        <div class="bottom-footer ">
        <div class="md:w-11/12 mx-auto md:mx-0 lg:mx-auto">
        <p class="text-xs text-center text-gray-700 md:text-sm md:text-left md:pl-8">© Copyright 2019 PT Flash Informatika Cemerlang</p>
        </div>

          {/* <div class="flex-footer">

            <div class="my-auto mx-auto text-center">
              <p class="text-xs md:text-sm">© Copyright 2019 PT Flash Informatika Cemerlang</p>
            </div>

          </div>

          <div class="div-fic">
            <button class="btn-transparent">
              <a class="block" href="https://fic.flash.co.id/" target="_blank">
                View all FIC products ⟶
              </a>
            </button>
          </div> */}
        </div>
      </div>
    ];
  }

}
