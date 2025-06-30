type Props = {
  onClick: () => void;
  label: string;
};

export function NavButton({ onClick, label }: Props) {
  return (
    <button
      className="border-2 border-transparent duration-200 hover:border-b-nebula-900 dark:hover:border-b-nebula-100"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {label}
    </button>
  );
}
