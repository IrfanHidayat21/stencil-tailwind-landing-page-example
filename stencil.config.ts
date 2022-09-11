import { Config } from '@stencil/core';

export const config: Config = {
  hashFileNames: false,
  minifyJs: true,
  outputTargets: [
    {
      type: 'www',
      baseUrl: 'https://monev.co/',
      serviceWorker: null,
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate'
    }
  ],
  globalStyle: 'src/global.css',
  copy: [
    { src: 'robots.txt' }
  ],
  enableCache: true
  
};
