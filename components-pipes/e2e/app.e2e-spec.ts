import { ComponentsPipesPage } from './app.po';

describe('components-pipes App', () => {
  let page: ComponentsPipesPage;

  beforeEach(() => {
    page = new ComponentsPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
