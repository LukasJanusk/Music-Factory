type Props = {
  children: React.ReactNode;
};

export default function Body({ children }: Props) {
  return (
    <div className="border-1 flex flex-1 flex-row border-red-500">
      {children}
    </div>
  );
}
