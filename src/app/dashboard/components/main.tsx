import { Card } from "./card";

import GenderAgeChart from "./chart";

import { data } from "./chart_data";

import { Card_data } from "./card_data";

/**
 * @returns **Main Component**
 */
export function Main() {
  return (
    <main className="grid w-[95%] mx-auto p-4 sm:p-8 gap-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6">
        {Card_data.map((val, key) => {
          return (
            <Card
              key={key}
              title={val.title}
              date={val.date}
              note={val.note}
              diff={val.diff}
              value={val.value}
              red={val.red}
              unit={val?.unit}
              label={val?.label}
            />
          );
        })}

        {/* Chart Area */}
        <div className="tablet:col-span-2">
          <GenderAgeChart data={data} />
        </div>

        {/* More Cards */}
        <Card
          title="Usage Count"
          date="2024/2/1 - 2024/2/5"
          value="125/month"
          note="85 last month"
          diff="↑ 47%"
        />
        <Card
          title="Account Deletions"
          date="2024/2/1 - 2024/2/5"
          value="10/month"
          note="8 last month"
          diff="↑ 25%"
        />
      </div>
    </main>
  );
}
