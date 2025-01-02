export const ArtDecoBackground = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 h-16 w-16 rounded-br-lg bg-primary"></div>
      <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-lg bg-primary"></div>
      <div className="absolute bottom-0 left-0 h-16 w-16 rounded-tr-lg bg-primary"></div>
      <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-lg bg-primary"></div>

      <div className="p-8 text-center">
        <h1 className="text-4xl font-bold">Welcome to Art Deco</h1>
      </div>
    </div>
  );
};
