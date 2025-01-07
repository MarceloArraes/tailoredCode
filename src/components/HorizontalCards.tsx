import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "./ui/card";

export const HorizontalCards = () => {
  return (
    <div className="flex max-w-2xl flex-1 flex-row">
      {/* Here goes the texts; */}
      <h1 className="self-center whitespace-pre-wrap text-4xl font-bold">
        Latest projects
      </h1>
      <div className="ml-auto flex flex-row gap-5">
        <Card className="border-0 bg-transparent p-2 shadow-none transition hover:translate-x-3">
          <CardHeader>Arriving to a new milestone in my career</CardHeader>
          <CardDescription>description</CardDescription>
          <CardContent> content</CardContent>
          <CardFooter>footer April 8, 2024</CardFooter>
        </Card>

        <Card className="transition hover:translate-x-3">
          <CardHeader>Arriving to a new milestone in my career</CardHeader>
          <CardDescription>description</CardDescription>
          <CardContent> content</CardContent>
          <CardFooter>footer April 8, 2024</CardFooter>
        </Card>
      </div>
    </div>
  );
};
