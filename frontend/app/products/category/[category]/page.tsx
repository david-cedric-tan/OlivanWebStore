export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Products in this category
        </p>
      </main>
    </div>
  );
}

