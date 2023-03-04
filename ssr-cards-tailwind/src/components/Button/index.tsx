import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-blue-500 hover:bg-blue-700 active:shadow-md active:bg-blue-800 text-white font-bold py-2 px-4 rounded disabled:bg-blue-200"
    >
      {children}
    </button>
  );
}
