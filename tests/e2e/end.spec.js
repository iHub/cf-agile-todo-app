describe('Todolist app', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  })

  it('The app title is \'todos\'', function() {
    expect(element(by.id('app-title')).getText()).toEqual('Todo app');
  });

});
