import { keepService } from './services/keep-service.js';

export class NoteTodos extends React.Component {

    state = {
        isMarked: false
    }

    onMarkTodo = (todoId) => {
        const { id } = this.props.note.note;
        keepService.markTodo(id, todoId);
        this.setState({ isMarked: !this.state.isMarked });
    }

    render() {
        const { todos } = this.props.note.note.info;
        const { color } = this.props.note.note.style;

        return (
            <div className="todos-list" >
                { todos.map(todo => <li key={todo.id} style={{ color: `${color}`, textDecoration: todo.isMarked ? 'line-through' : '' }} onClick={() => this.onMarkTodo(todo.id)}>{todo.txt}</li>)}
            </div>
        )
    }
}



