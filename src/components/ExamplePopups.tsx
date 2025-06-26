export default function ExamplePopups() {
  return (
    <div className="mx-auto max-w-md space-y-4 p-4">
      {/* Notification */}
      <div className="bg-nebula-notification text-nebula-900 shadow-popup rounded-lg p-4">
        <strong className="block font-semibold">Heads up!</strong>
        <span>This is a notification message.</span>
      </div>

      {/* Success */}
      <div className="bg-nebula-success text-nebula-900 shadow-popup rounded-lg p-4">
        <strong className="block font-semibold">Success!</strong>
        <span>Your changes have been saved.</span>
      </div>

      {/* Error */}
      <div className="bg-nebula-error shadow-popup rounded-lg p-4 text-white">
        <strong className="block font-semibold">Error!</strong>
        <span>Something went wrong.</span>
      </div>
    </div>
  );
}
