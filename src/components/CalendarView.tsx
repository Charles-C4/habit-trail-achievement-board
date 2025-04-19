
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { addDays } from "date-fns";

export function CalendarView() {
  const today = new Date();
  const completedDates = [
    today,
    addDays(today, -1),
    addDays(today, -2),
    addDays(today, -4),
    addDays(today, -5),
    addDays(today, -7),
  ];

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Monthly View</h2>
      <Calendar
        mode="single"
        selected={today}
        className="rounded-md border w-full pointer-events-auto"
        modifiers={{ completed: completedDates }}
        modifiersStyles={{
          completed: {
            backgroundColor: "#22C55E",
            color: "white",
          },
        }}
      />
    </Card>
  );
}
