
import { Card } from "./ui/card";
import { Trophy, Star, Award, Medal } from "lucide-react";

const badges = [
  {
    id: 1,
    name: "Early Bird",
    description: "Complete morning habits 7 days in a row",
    icon: Star,
    achieved: true,
  },
  {
    id: 2,
    name: "Streak Master",
    description: "Maintain a 30-day streak",
    icon: Trophy,
    achieved: false,
  },
  {
    id: 3,
    name: "Mindfulness Guru",
    description: "Complete all mindfulness habits for a week",
    icon: Award,
    achieved: true,
  },
  {
    id: 4,
    name: "Health Champion",
    description: "Achieve perfect health habits for a month",
    icon: Medal,
    achieved: false,
  },
];

export function Achievements() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Achievements</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {badges.map((badge) => (
          <Card
            key={badge.id}
            className={`p-4 ${
              badge.achieved
                ? "bg-gradient-to-br from-purple-50 to-orange-50 dark:from-purple-950/50 dark:to-orange-950/50"
                : "opacity-60"
            }`}
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-2 rounded-full ${
                  badge.achieved
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                <badge.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {badge.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {badge.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
