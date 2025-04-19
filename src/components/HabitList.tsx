
import { useState } from "react";
import { Check, Clock } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type Habit = {
  id: number;
  name: string;
  category: string;
  streak: number;
  completed: boolean;
};

const initialHabits: Habit[] = [
  { id: 1, name: "Morning Meditation", category: "Mindfulness", streak: 5, completed: false },
  { id: 2, name: "Read 30 minutes", category: "Productivity", streak: 12, completed: false },
  { id: 3, name: "Exercise", category: "Health", streak: 3, completed: false },
  { id: 4, name: "Study the 3 Ps", category: "Learning", streak: 0, completed: false },
];

export function HabitList() {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  const toggleHabit = (habitId: number) => {
    setHabits(habits.map(habit => 
      habit.id === habitId 
        ? { 
            ...habit, 
            completed: !habit.completed, 
            streak: habit.completed ? habit.streak : habit.streak + 1 
          } 
        : habit
    ));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Today's Habits</h2>
      <div className="grid gap-4">
        {habits.map((habit) => (
          <Card key={habit.id} className={cn(
            "p-4 transition-all duration-300 hover:shadow-md",
            habit.completed && "bg-green-50 dark:bg-green-900/20"
          )}>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">{habit.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {habit.category}
                  </Badge>
                  <div className="flex items-center text-xs text-orange-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {habit.streak} day streak
                  </div>
                </div>
              </div>
              <Button
                size="icon"
                variant={habit.completed ? "default" : "outline"}
                className={cn(
                  "transition-all duration-300",
                  habit.completed && "bg-green-500 hover:bg-green-600"
                )}
                onClick={() => toggleHabit(habit.id)}
              >
                <Check className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
