export default function Badge({ children, color }) {
  return (
    <span className={`text-xs px-2 py-1 rounded-full ${color}`}>
      {children}
    </span>
  );
}