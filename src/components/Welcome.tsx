
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/sonner";

type UserInfo = {
  name: string;
  email: string;
};

export function Welcome({ onComplete }: { onComplete: (info: UserInfo) => void }) {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name && userInfo.email) {
      onComplete(userInfo);
      toast.success("Welcome to Habit Detector!");
    }
  };

  if (step === 1) {
    return (
      <div className="max-w-md mx-auto text-center space-y-6 p-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Welcome to Habit Detector
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Track your daily habits, build streaks, and achieve your goals.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-medium">🎯 Track Daily Habits</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Set and monitor your daily goals</p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <h3 className="font-medium">🔥 Build Streaks</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Stay consistent and build momentum</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-medium">📊 Track Progress</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Visualize your achievements</p>
          </div>
        </div>
        <Button 
          size="lg"
          className="w-full mt-6"
          onClick={() => setStep(2)}
        >
          Get Started
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto space-y-6 p-6">
      <h2 className="text-2xl font-semibold text-center">Create Your Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={userInfo.email}
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Start Tracking Habits
        </Button>
      </form>
    </div>
  );
}
