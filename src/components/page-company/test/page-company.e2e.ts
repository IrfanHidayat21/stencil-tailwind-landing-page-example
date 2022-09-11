import { newE2EPage } from '@stencil/core/testing';

describe('page-company', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-company></page-company>');

    const element = await page.find('page-company');
    expect(element).toHaveClass('hydrated');
  });
});
