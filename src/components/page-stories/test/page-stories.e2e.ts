import { newE2EPage } from '@stencil/core/testing';

describe('page-stories', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-stories></page-stories>');

    const element = await page.find('page-stories');
    expect(element).toHaveClass('hydrated');
  });
});
