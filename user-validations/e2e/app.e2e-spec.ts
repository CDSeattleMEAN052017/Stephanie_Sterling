import { UserValidationsPage } from './app.po';

describe('user-validations App', () => {
  let page: UserValidationsPage;

  beforeEach(() => {
    page = new UserValidationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
