import { TpNotePage } from './app.po';

describe('tp-note App', () => {
  let page: TpNotePage;

  beforeEach(() => {
    page = new TpNotePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
