import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="type-kicker">404</p>
      <h1 className="display mt-3 text-4xl font-semibold">This page is not in the family.</h1>
      <p className="mt-4 text-muted-foreground">
        The preview only ships the family overview, four product mocks, and the
        token panel.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-foreground px-5 text-[13px] font-medium text-background"
      >
        Return to Ready Labs
      </Link>
    </div>
  );
}
