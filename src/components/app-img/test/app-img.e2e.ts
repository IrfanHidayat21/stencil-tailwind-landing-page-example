import { newE2EPage } from '@stencil/core/testing';

describe('app-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-img></app-img>');

    const element = await page.find('app-img');
    expect(element).toHaveClass('hydrated');
  });
});
