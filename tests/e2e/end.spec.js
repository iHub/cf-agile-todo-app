describe('Todolist app', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('The app title is \'Todo app\'', function() {
    expect(element(by.id('app-title')).getText()).toEqual('Todo app');
  });

});
