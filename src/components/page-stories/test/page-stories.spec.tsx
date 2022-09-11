import { newSpecPage } from '@stencil/core/testing';
import { PageStories } from './page-stories';

describe('page-stories', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageStories],
      html: `<page-stories></page-stories>`,
    });
    expect(page.root).toEqualHtml(`
      <page-stories>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-stories>
    `);
  });
});
