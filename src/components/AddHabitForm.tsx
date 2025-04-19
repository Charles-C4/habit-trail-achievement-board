
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ListPlus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type AddHabitFormProps = {
  onAddHabit: (name: string, category: string) => void;
};

export function AddHabitForm({ onAddHabit }: AddHabitFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && category) {
      onAddHabit(name, category);
      setName("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        placeholder="Enter new habit..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1"
      />
      <Select value={category} onValueChange={setCategory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Health">Health</SelectItem>
          <SelectItem value="Productivity">Productivity</SelectItem>
          <SelectItem value="Mindfulness">Mindfulness</SelectItem>
          <SelectItem value="Learning">Learning</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" disabled={!name || !category}>
        <ListPlus className="mr-2 h-4 w-4" />
        Add Habit
      </Button>
    </form>
  );
}
