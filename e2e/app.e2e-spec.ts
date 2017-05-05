import { AngularCliTourOfHeroesPage } from './app.po';

describe('angular-cli-tour-of-heroes App', () => {
  let page: AngularCliTourOfHeroesPage;

  beforeEach(() => {
    page = new AngularCliTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
