import { TodoContainer } from './components/TodoContainer';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';

export function App() {
  return (
    <TodoContainer>
      <TodoItem text="Learn HTML/CSS" checked={true} />
      <TodoItem text="Learn JavaScript" checked={true} />
      <TodoItem text="Learn React" checked={false} />
      <TodoItem text="Create my first React app" checked={false} />
      <TodoItem text="Publish my first React app" checked={false} />

      <TodoInput />
    </TodoContainer>
  );
}
