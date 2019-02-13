import { html, fixture, expect } from '@open-wc/testing';

import '../src/open-wc-app';

describe('<open-wc-app>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<open-wc-app></open-wc-app>');
    expect(el.title).to.equal('open-wc');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <open-wc-app title="different"></open-wc-app>
    `);
    expect(el.title).to.equal('different');
  });
});
