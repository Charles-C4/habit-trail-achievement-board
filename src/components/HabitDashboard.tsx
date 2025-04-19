
import { useState } from "react";
import { HabitList } from "./HabitList";
import { CalendarView } from "./CalendarView";
import { CategoryList } from "./CategoryList";
import { ProgressStats } from "./ProgressStats";
import { Achievements } from "./Achievements";
import { Welcome } from "./Welcome";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, Trophy, BarChart3, Layout } from "lucide-react";

type UserInfo = {
  name: string;
  email: string;
};

export function HabitDashboard() {
  const [activeTab, setActiveTab] = useState("today");
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  if (!userInfo) {
    return <Welcome onComplete={setUserInfo} />;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Habit Detector
        </h1>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Welcome, {userInfo.name}
        </div>
      </div>
      
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
