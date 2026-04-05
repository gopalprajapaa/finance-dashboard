export default function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
      <div
        className="h-2 bg-blue-500 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}