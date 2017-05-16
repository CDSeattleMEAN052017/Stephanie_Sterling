import { TasksInputsPage } from './app.po';

describe('tasks-inputs App', () => {
  let page: TasksInputsPage;

  beforeEach(() => {
    page = new TasksInputsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
