
import { useState } from "react";
import { HabitList } from "./HabitList";
import { CalendarView } from "./CalendarView";
import { CategoryList } from "./CategoryList";
import { ProgressStats } from "./ProgressStats";
import { Achievements } from "./Achievements";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, Trophy, BarChart3, Layout } from "lucide-react";

export function HabitDashboard() {
  const [activeTab, setActiveTab] = useState("today");

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
        Habit Trail
      </h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-4 gap-4 bg-muted p-1 rounded-lg">
          <TabsTrigger value="today" className="flex items-center gap-2">
            <Layout className="h-4 w-4" />
            <span>Today</span>
          </TabsTrigger>
          <TabsTrigger value="calendar" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Calendar</span>
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span>Badges</span>
          </TabsTrigger>
          <TabsTrigger value="stats" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            <span>Stats</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-8">
          <CategoryList />
          <HabitList />
        </TabsContent>

        <TabsContent value="calendar">
          <CalendarView />
        </TabsContent>

        <TabsContent value="achievements">
          <Achievements />
        </TabsContent>

        <TabsContent value="stats">
          <ProgressStats />
        </TabsContent>
      </Tabs>
    </div>
  );
}
