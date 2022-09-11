import { newSpecPage } from '@stencil/core/testing';
import { PagePrice } from './page-price';

describe('page-price', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PagePrice],
      html: `<page-price></page-price>`,
    });
    expect(page.root).toEqualHtml(`
      <page-price>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-price>
    `);
  });
});
