//Code references for the demo hehehe
//ES5
function TodoList() {
  this.todos = ["Eat Breakfast", "Walk Dog", "Breathe"];
  this.addTodo = function(todo) {
    this.todos.push(todo.value);
  };
  this.doneTyping = function($event) {
    if($event.which === 13) {
      this.addTodo($event.target.value);
      $event.target.value = null;
    }
  }
}

TodoList.annotations = [
  new ComponentAnnotation({
    selector: "todo-list"
  }),
  new ng.ViewAnnotation({
    template:
      '<ul>' +
      '<li *ng-for="#todo of todos">' +
      '{{ todo }}' +
      '</li>' +
      '</ul>' +
      '<input #textbox (keyup)="doneTyping($event)">' +
      '<button (click)="addTodo(textbox.value)">Add Todo</button>',
    directives: [ng.NgFor]
  })
];
