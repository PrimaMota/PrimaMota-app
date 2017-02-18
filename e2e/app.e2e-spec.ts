import { PrimamotaAppPage } from './app.po';

describe('primamota-app App', function() {
  let page: PrimamotaAppPage;

  beforeEach(() => {
    page = new PrimamotaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
