import { connect } from "react-redux";
import { toggleTodo } from "../actions/index";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.FILTER(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.FILTER(t => !t.completed);
    default:
      return [];
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDipatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDipatchToProps
)(TodoList);

export default VisibleTodoList;
