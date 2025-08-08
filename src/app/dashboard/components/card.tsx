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
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between h-[13rem]">
      {/* Title & Date */}
      <div className="border-b border-gray-300 pb-2">
        <p className="text-sm">{title}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>

      {/* Main Value + Label */}
      <div className="mt-10 flex items-end text-3xl font-bold">
        <span>{value}</span>
        {unit && <span className="text-lg ml-1 font-normal">{unit}</span>}
        {label && <span className="text-sm ml-2 text-gray-700">{label}</span>}
      </div>

      {/* Bottom note + diff */}
      <div className="flex justify-between items-center text-sm">
        <p className="text-gray-400">{note}</p>
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
