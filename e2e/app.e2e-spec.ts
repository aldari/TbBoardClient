import { TbBoardClientPage } from './app.po';

describe('tb-board-client App', () => {
  let page: TbBoardClientPage;

  beforeEach(() => {
    page = new TbBoardClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
