import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4 rounded-lg border p-4">
      <button
        className="rounded bg-slate-800 px-3 py-1 text-white hover:bg-slate-700"
        onClick={() => setCount((c) => c - 1)}
        aria-label="Decrease count"
      >
        –
      </button>

      <span className="min-w-8 text-center text-lg font-semibold">{count}</span>

      <button
        className="rounded bg-slate-800 px-3 py-1 text-white hover:bg-slate-700"
        onClick={() => setCount((c) => c + 1)}
        aria-label="Increase count"
      >
        +
      </button>
    </div>
  );
}