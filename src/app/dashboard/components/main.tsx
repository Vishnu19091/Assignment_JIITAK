import { Card } from "./card";

import GenderAgeChart from "./chart";

import { data } from "./chart_data";

/**
 *
 * @returns Main Component
 */
export function Main() {
  return (
    <main className="grid w-[95%] mx-auto p-4 sm:p-8 gap-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6">
        <Card
          title="Total Registered Users"
          date="2024/2/1 - 2024/2/5"
          value="450"
          note="400 last month"
          diff="↑ 12.5%"
        />
        <Card
          title="Active Users"
          date="2024/2/1 - 2024/2/5"
          value="50/month"
          note="12 last month"
          diff="↑ 316.6%"
        />
        <Card
          title="Retention Rate"
          date="2024/2/1 - 2024/2/5"
          value="10%"
          note="12% last month"
          diff="↓ 16.6%"
          red
        />
        <Card
          title="Avg. Search Count"
          date="2024/2/1 - 2024/2/5"
          value="4/month"
          note="2 last month"
          diff="↑ 100%"
        />

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
