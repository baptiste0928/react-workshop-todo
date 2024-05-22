import { useState } from 'react';

type TodoInputProps = {
  onSubmit?: (text: string) => void;
};

export function TodoInput({ onSubmit }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(text);
    setText('');
  };

  return (
    <form
      className="flex h-10 w-full items-center px-2"
      onSubmit={handleSubmit}
    >
      <button
        type="submit"
        className="flex items-center justify-center focus:outline-none"
      >
        <span className="iconify size-5 text-gray-400 heroicons--plus-20-solid" />
      </button>
      <input
        className="ml-4 flex-grow text-sm font-medium text-gray-600 focus:outline-none"
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
