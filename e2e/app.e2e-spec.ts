import { PanelAppPage } from './app.po';

describe('panel-app App', function() {
  let page: PanelAppPage;

  beforeEach(() => {
    page = new PanelAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
