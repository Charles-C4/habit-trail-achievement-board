
import { Button } from "./ui/button";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const categories = [
  { id: 1, name: "All", count: 8 },
  { id: 2, name: "Health", count: 3 },
  { id: 3, name: "Productivity", count: 2 },
  { id: 4, name: "Mindfulness", count: 2 },
  { id: 5, name: "Learning", count: 1 },
];

export function CategoryList() {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex space-x-2 pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            className="rounded-full px-4"
          >
            {category.name}
            <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs">
              {category.count}
            </span>
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}
