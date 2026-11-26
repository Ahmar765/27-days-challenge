export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <div>
          <p className="font-display text-base font-extrabold tracking-tight text-slate-900">
            27 Days{' '}
            <span className="text-[#527EFA]">
              Business Development Challenge
            </span>
          </p>
          <p className="mt-1 text-sm font-medium text-slate-600">
            Learn. Practice. Connect. Grow.
          </p>
        </div>

        <p className="text-xs text-slate-500">
          &copy; {currentYear} 27 Days Business Development Challenge. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
