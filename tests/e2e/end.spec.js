describe('Todolist app', function() {

  it('The app title is \'todos\'', function() {
    browser.get('http://localhost:3000/');
    expect(element(by.id('app-title')).getText()).toEqual('todos');
  });

});
