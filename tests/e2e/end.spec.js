describe('Todo app intergration/E2E testing', function() {

  // start at root before every test is run
  beforeEach(function() {
    browser().navigateTo('/#/');
  });

  it('The app title is \'todos\'', function() {
    // browser.get('http://localhost:3880/');
    expect(element(by.id('app-title')).getText()).toEqual('Todo app');
  });

});
