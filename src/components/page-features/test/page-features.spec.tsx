import { newSpecPage } from '@stencil/core/testing';
import { PageFeatures } from './page-features';

describe('page-features', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageFeatures],
      html: `<page-features></page-features>`,
    });
    expect(page.root).toEqualHtml(`
      <page-features>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-features>
    `);
  });
});
