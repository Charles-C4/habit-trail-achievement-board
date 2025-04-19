
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { BarChart3, TrendingUp, Award } from "lucide-react";

export function ProgressStats() {
  const stats = [
    {
      category: "Health",
      completionRate: 85,
      streak: 12,
      total: 124,
    },
    {
      category: "Productivity",
      completionRate: 92,
      streak: 15,
      total: 180,
    },
    {
      category: "Mindfulness",
      completionRate: 78,
      streak: 8,
      total: 96,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Progress Insights</h2>
      <div className="grid gap-6">
        {stats.map((stat) => (
          <Card key={stat.category} className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {stat.category}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.completionRate}% success rate
                </span>
              </div>
              <Progress value={stat.completionRate} className="h-2" />
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-orange-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.streak} day streak
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-purple-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.total} total completions
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
