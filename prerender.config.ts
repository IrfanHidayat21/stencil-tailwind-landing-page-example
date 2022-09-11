import { PrerenderConfig } from '@stencil/core';
export const config: PrerenderConfig = {
    crawlUrls: true,
    entryUrls: ['/'],
    hydrateOptions(url) {
        return {
          prettyHtml: true,
          minifyScriptElements:true,
          minifyStyleElements:true,
          runtimeLogging: true,
          removeUnusedStyles:true,
        };
    },
    staticSite:true,

};