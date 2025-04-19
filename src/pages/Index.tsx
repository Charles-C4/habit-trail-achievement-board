
import { HabitDashboard } from "@/components/HabitDashboard";
import { Toaster } from "@/components/ui/sonner";

export default function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Toaster />
      <HabitDashboard />
    </div>
  );
}
