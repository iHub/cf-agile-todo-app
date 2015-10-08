var Todo = require('../schemas/todo-model');

module.exports = function(app, config) {

  var allTodos = app.route('/api/todo');
  var oneTodo = app.route('/api/todo/:id');

  /**
   * Display a listing of the all todos.
   * GET /api/todo
   *
   * @return Response
   */
  allTodos.get(function index(request, response) {
    Todo
      .all({
        order: 'id DESC'
      })
      .then(function(tasks) {
        response.json(tasks);
      });
  });

  /**
   * Show the form for creating a new todo list item.
   * GET /api/todo/create
   */
  allTodos.get(function create(request, response) {

  });

  /**
   * Store a newly created todo list item in storage.
   * POST /api/todo
   */
  allTodos.get(function store(request, response) {

  });

  /**
   * Display the specified todo list item.
   * GET /api/todo/{id}
   */
  oneTodo.get(function show(request, response) {
    Todo.findOne({
        where: {
          id: request.param.id
        }
      })
      .then(function(task) {
        response.json(task);
      });
  });

  /**
   * Show the form for editing the specified todo list item.
   * GET /api/todo/{id}/edit
   */
  oneTodo.get(function create(request, response) {

  });

  /**
   * Update the specified todo list item in storage.
   * PUT /api/todo/{id}
   */
  oneTodo.put(function update(request, response) {
    Todo.findOne({
        where: {
          id: request.param.id
        }
      })
      .then(function(task) {
        task.todoText = request.body.task;
        response.send('OK');
      });
  });

  /**
   * Remove the specified todo list item from storage.
   * DELETE /api/todo/{id}
   */
  oneTodo.delete(function remove(request, response) {
    Todo.findOne({
        where: {
          id: request.param.id
        }
      })
      .then(function(task) {
        task.delete().then(function() {
          response.send('OK');
        });
      });
  });
}
