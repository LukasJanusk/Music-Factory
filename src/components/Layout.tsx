type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="bg-nebula-200 dark:bg-nebula-700 left-0 top-0 flex h-screen flex-col items-center">
      {children}
    </div>
  );
}
