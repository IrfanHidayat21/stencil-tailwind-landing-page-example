import { newSpecPage } from '@stencil/core/testing';
import { PageSupport } from './page-support';

describe('page-support', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageSupport],
      html: `<page-support></page-support>`,
    });
    expect(page.root).toEqualHtml(`
      <page-support>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-support>
    `);
  });
});
