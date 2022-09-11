/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppFooter {
    }
    interface AppHeader {
    }
    interface AppImg {
        "imgSrc": string;
    }
    interface AppLpTopMenu {
    }
    interface AppPopoverTopMenu {
        "page": any;
    }
    interface AppRoot {
    }
    interface MvVideo {
        "account": string;
        "alias": string;
        "height": string;
        "width": string;
    }
    interface MyComponent {
        "imgSrc": string;
        "type": string;
    }
    interface PageCompany {
    }
    interface PageFeatures {
    }
    interface PageHome {
    }
    interface PagePrice {
    }
    interface PageProduct {
    }
    interface PageStories {
    }
    interface PageSupport {
    }
}
declare global {
    interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {
    }
    var HTMLAppFooterElement: {
        prototype: HTMLAppFooterElement;
        new (): HTMLAppFooterElement;
    };
    interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {
    }
    var HTMLAppHeaderElement: {
        prototype: HTMLAppHeaderElement;
        new (): HTMLAppHeaderElement;
    };
    interface HTMLAppImgElement extends Components.AppImg, HTMLStencilElement {
    }
    var HTMLAppImgElement: {
        prototype: HTMLAppImgElement;
        new (): HTMLAppImgElement;
    };
    interface HTMLAppLpTopMenuElement extends Components.AppLpTopMenu, HTMLStencilElement {
    }
    var HTMLAppLpTopMenuElement: {
        prototype: HTMLAppLpTopMenuElement;
        new (): HTMLAppLpTopMenuElement;
    };
    interface HTMLAppPopoverTopMenuElement extends Components.AppPopoverTopMenu, HTMLStencilElement {
    }
    var HTMLAppPopoverTopMenuElement: {
        prototype: HTMLAppPopoverTopMenuElement;
        new (): HTMLAppPopoverTopMenuElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLMvVideoElement extends Components.MvVideo, HTMLStencilElement {
    }
    var HTMLMvVideoElement: {
        prototype: HTMLMvVideoElement;
        new (): HTMLMvVideoElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPageCompanyElement extends Components.PageCompany, HTMLStencilElement {
    }
    var HTMLPageCompanyElement: {
        prototype: HTMLPageCompanyElement;
        new (): HTMLPageCompanyElement;
    };
    interface HTMLPageFeaturesElement extends Components.PageFeatures, HTMLStencilElement {
    }
    var HTMLPageFeaturesElement: {
        prototype: HTMLPageFeaturesElement;
        new (): HTMLPageFeaturesElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPagePriceElement extends Components.PagePrice, HTMLStencilElement {
    }
    var HTMLPagePriceElement: {
        prototype: HTMLPagePriceElement;
        new (): HTMLPagePriceElement;
    };
    interface HTMLPageProductElement extends Components.PageProduct, HTMLStencilElement {
    }
    var HTMLPageProductElement: {
        prototype: HTMLPageProductElement;
        new (): HTMLPageProductElement;
    };
    interface HTMLPageStoriesElement extends Components.PageStories, HTMLStencilElement {
    }
    var HTMLPageStoriesElement: {
        prototype: HTMLPageStoriesElement;
        new (): HTMLPageStoriesElement;
    };
    interface HTMLPageSupportElement extends Components.PageSupport, HTMLStencilElement {
    }
    var HTMLPageSupportElement: {
        prototype: HTMLPageSupportElement;
        new (): HTMLPageSupportElement;
    };
    interface HTMLElementTagNameMap {
        "app-footer": HTMLAppFooterElement;
        "app-header": HTMLAppHeaderElement;
        "app-img": HTMLAppImgElement;
        "app-lp-top-menu": HTMLAppLpTopMenuElement;
        "app-popover-top-menu": HTMLAppPopoverTopMenuElement;
        "app-root": HTMLAppRootElement;
        "mv-video": HTMLMvVideoElement;
        "my-component": HTMLMyComponentElement;
        "page-company": HTMLPageCompanyElement;
        "page-features": HTMLPageFeaturesElement;
        "page-home": HTMLPageHomeElement;
        "page-price": HTMLPagePriceElement;
        "page-product": HTMLPageProductElement;
        "page-stories": HTMLPageStoriesElement;
        "page-support": HTMLPageSupportElement;
    }
}
declare namespace LocalJSX {
    interface AppFooter {
    }
    interface AppHeader {
    }
    interface AppImg {
        "imgSrc"?: string;
    }
    interface AppLpTopMenu {
    }
    interface AppPopoverTopMenu {
        "page"?: any;
    }
    interface AppRoot {
    }
    interface MvVideo {
        "account"?: string;
        "alias"?: string;
        "height"?: string;
        "width"?: string;
    }
    interface MyComponent {
        "imgSrc"?: string;
        "type"?: string;
    }
    interface PageCompany {
    }
    interface PageFeatures {
    }
    interface PageHome {
    }
    interface PagePrice {
    }
    interface PageProduct {
    }
    interface PageStories {
    }
    interface PageSupport {
    }
    interface IntrinsicElements {
        "app-footer": AppFooter;
        "app-header": AppHeader;
        "app-img": AppImg;
        "app-lp-top-menu": AppLpTopMenu;
        "app-popover-top-menu": AppPopoverTopMenu;
        "app-root": AppRoot;
        "mv-video": MvVideo;
        "my-component": MyComponent;
        "page-company": PageCompany;
        "page-features": PageFeatures;
        "page-home": PageHome;
        "page-price": PagePrice;
        "page-product": PageProduct;
        "page-stories": PageStories;
        "page-support": PageSupport;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-footer": LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
            "app-header": LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
            "app-img": LocalJSX.AppImg & JSXBase.HTMLAttributes<HTMLAppImgElement>;
            "app-lp-top-menu": LocalJSX.AppLpTopMenu & JSXBase.HTMLAttributes<HTMLAppLpTopMenuElement>;
            "app-popover-top-menu": LocalJSX.AppPopoverTopMenu & JSXBase.HTMLAttributes<HTMLAppPopoverTopMenuElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "mv-video": LocalJSX.MvVideo & JSXBase.HTMLAttributes<HTMLMvVideoElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "page-company": LocalJSX.PageCompany & JSXBase.HTMLAttributes<HTMLPageCompanyElement>;
            "page-features": LocalJSX.PageFeatures & JSXBase.HTMLAttributes<HTMLPageFeaturesElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-price": LocalJSX.PagePrice & JSXBase.HTMLAttributes<HTMLPagePriceElement>;
            "page-product": LocalJSX.PageProduct & JSXBase.HTMLAttributes<HTMLPageProductElement>;
            "page-stories": LocalJSX.PageStories & JSXBase.HTMLAttributes<HTMLPageStoriesElement>;
            "page-support": LocalJSX.PageSupport & JSXBase.HTMLAttributes<HTMLPageSupportElement>;
        }
    }
}