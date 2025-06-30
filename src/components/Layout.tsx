type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="left-0 top-0 flex h-screen max-h-full min-h-screen flex-col items-center overflow-hidden overscroll-none bg-nebula-100 dark:bg-nebula-700">
      {children}
    </div>
  );
}
