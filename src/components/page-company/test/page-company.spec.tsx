import { newSpecPage } from '@stencil/core/testing';
import { PageCompany } from './page-company';

describe('page-company', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageCompany],
      html: `<page-company></page-company>`,
    });
    expect(page.root).toEqualHtml(`
      <page-company>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-company>
    `);
  });
});
