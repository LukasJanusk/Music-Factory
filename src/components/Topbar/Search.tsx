export default function Search() {
  return (
    <div>
      {' '}
      <input
        type="search"
        placeholder={'Search...'}
        className="focus:ring-nebula-600 bg-nebula-200 dark:focus:ring-nebula-100 dark:bg-nebula-600 h-full w-fit rounded-md px-2 py-2 focus:outline-none focus:ring-1 md:py-1"
      />
    </div>
  );
}
