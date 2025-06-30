type Props = {
  children: React.ReactNode;
};

export default function Body({ children }: Props) {
  return (
    <div className="flex min-h-0 w-full flex-grow items-center justify-center overflow-auto bg-nebula-200 px-4 py-8 transition-all duration-200 dark:bg-nebula-700 dark:text-nebula-100">
      {children}
    </div>
  );
}
