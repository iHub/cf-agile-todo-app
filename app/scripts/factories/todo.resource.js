  function todoResource($resource) {
    return $resource('/api/todos/:id', null, {
      update: {
        method: 'PUT' // This method issues a PUT request
      },
      delete: {
        method: 'DELETE'
      }
    });
  }

  module.exports = todoResource;
