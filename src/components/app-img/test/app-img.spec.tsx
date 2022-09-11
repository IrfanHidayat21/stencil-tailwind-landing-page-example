import { newSpecPage } from '@stencil/core/testing';
import { AppImg } from './app-img';

describe('app-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppImg],
      html: `<app-img></app-img>`,
    });
    expect(page.root).toEqualHtml(`
      <app-img>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-img>
    `);
  });
});
