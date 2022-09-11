import { newSpecPage } from '@stencil/core/testing';
import { PageProduct } from './page-product';

describe('page-product', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageProduct],
      html: `<page-product></page-product>`,
    });
    expect(page.root).toEqualHtml(`
      <page-product>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-product>
    `);
  });
});
