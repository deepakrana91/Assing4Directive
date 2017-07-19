import { Assing4DirectivePage } from './app.po';

describe('assing4-directive App', () => {
  let page: Assing4DirectivePage;

  beforeEach(() => {
    page = new Assing4DirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
