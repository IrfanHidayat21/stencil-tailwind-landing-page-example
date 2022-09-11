import { newE2EPage } from '@stencil/core/testing';

describe('page-product', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-product></page-product>');

    const element = await page.find('page-product');
    expect(element).toHaveClass('hydrated');
  });
});
