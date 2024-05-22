import { ReactNode } from 'react';

type TodoContainerProps = {
  children: ReactNode;
};

function Title() {
  return (
    <div className="flex items-center">
      <span className="iconify size-6 text-blue-500 heroicons--inbox-20-solid" />
      <h1 className="ml-3 text-lg font-semibold text-gray-600">My Tasks</h1>
    </div>
  );
}

export function TodoContainer({ children }: TodoContainerProps) {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-gray-100">
      <div className="mt-16 w-full max-w-lg rounded-lg bg-white p-8 shadow-md">
        <div className="mb-4">
          <Title />
        </div>

        {children}
      </div>
    </div>
  );
}
