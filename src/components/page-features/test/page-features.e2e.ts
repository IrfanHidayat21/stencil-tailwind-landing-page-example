import { newE2EPage } from '@stencil/core/testing';

describe('page-features', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-features></page-features>');

    const element = await page.find('page-features');
    expect(element).toHaveClass('hydrated');
  });
});
