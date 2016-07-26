import { VirtualityPage } from './app.po';

describe('virtuality App', function() {
  let page: VirtualityPage;

  beforeEach(() => {
    page = new VirtualityPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
