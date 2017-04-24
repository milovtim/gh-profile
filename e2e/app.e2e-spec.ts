import { GhProfilePage } from './app.po';

describe('gh-profile App', () => {
  let page: GhProfilePage;

  beforeEach(() => {
    page = new GhProfilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
