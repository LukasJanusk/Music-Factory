type Props = {
  label: string;
};
export default function BrandNameHeader({ label }: Props) {
  return (
    <h1 className="hidden text-nowrap font-sans text-lg font-bold tracking-wide md:inline">
      {label}
    </h1>
  );
}
