import { newE2EPage } from '@stencil/core/testing';

describe('page-price', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-price></page-price>');

    const element = await page.find('page-price');
    expect(element).toHaveClass('hydrated');
  });
});
