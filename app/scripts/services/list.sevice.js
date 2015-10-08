  function listService() {
    return $resource('http://localhost:3880/api/todo/:id');
  }

  module.exports = listService;
