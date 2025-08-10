interface CardProp {
  title: string;
  date: string;
  value: string;
  unit?: string;
  label?: string;
  note: string;
  diff: string;
  red?: boolean;
}

/**
 * @param ' title,
  date,
  value,
  unit,
  label,
  note,
  diff,
 * @returns **Reusable Card**
 */
export function Card({
  title,
  date,
  value,
  unit,
  label,
  note,
  diff,
  red = false,
}: CardProp) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col h-[13rem]">
      {/* Top: Title & Date */}
      <div className="border-b border-gray-200 pb-2">
        <p className="text-sm font-medium text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{date}</p>
      </div>

      {/* Middle: Main Value */}
      <div className="flex-1 flex items-center">
        <div className="flex items-end text-3xl font-bold">
          <span>{value}</span>
          {unit && (
            <span className="text-lg ml-1 font-normal text-gray-700">
              {unit}/
            </span>
          )}
          {label && <span className="text-sm ml-2 text-gray-500">{label}</span>}
        </div>
      </div>

      {/* Bottom: Note & Diff */}
      <div className="flex justify-between items-center text-sm">
        <p className="text-gray-400 truncate">{note}</p>
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            red ? "text-red-600 bg-red-100" : "text-green-600 bg-green-100"
          }`}
        >
          {diff}
        </span>
      </div>
    </div>
  );
}
