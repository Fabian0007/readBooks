import { ReadbooksPage } from './app.po';

describe('readbooks App', function() {
  let page: ReadbooksPage;

  beforeEach(() => {
    page = new ReadbooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
