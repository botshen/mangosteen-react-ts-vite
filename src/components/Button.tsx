interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

// eslint-disable-next-line import/no-unused-modules
export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="bg-gray-400" onClick={onClick}>
      {children}
    </button>
  );
}
