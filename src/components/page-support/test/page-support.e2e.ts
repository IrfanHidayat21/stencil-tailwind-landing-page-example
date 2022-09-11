import { newE2EPage } from '@stencil/core/testing';

describe('page-support', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-support></page-support>');

    const element = await page.find('page-support');
    expect(element).toHaveClass('hydrated');
  });
});
