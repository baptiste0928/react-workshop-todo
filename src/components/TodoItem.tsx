type TodoItemProps = {
  text: string;
  checked: boolean;
  onChange?: (state: boolean) => void;
  onDelete?: () => void;
};

export function TodoItem({ text, checked, onChange, onDelete }: TodoItemProps) {
  return (
    <label className="group flex h-10 cursor-pointer items-center justify-between rounded px-2 transition hover:bg-gray-100">
      <div className="flex min-w-0 cursor-pointer items-center">
        <input
          className="peer hidden"
          type="checkbox"
          onChange={() => onChange?.(!checked)}
          checked={checked}
        />
        <span className="flex size-5 items-center justify-center rounded-full border-2 border-gray-300 text-transparent peer-checked:border-green-600 peer-checked:bg-green-600 peer-checked:text-white">
          <span className="iconify size-4 heroicons--check-16-solid" />
        </span>

        <span className="ml-4 select-none overflow-hidden text-ellipsis whitespace-nowrap text-sm text-gray-600 peer-checked:text-gray-500 peer-checked:line-through">
          {text}
        </span>
      </div>

      <button
        type="button"
        className="flex items-center justify-center text-transparent transition focus:outline-none group-hover:text-gray-400"
        onClick={onDelete}
      >
        <span className="iconify size-4 transition heroicons--trash-16-solid hover:text-gray-600" />
      </button>
    </label>
  );
}
