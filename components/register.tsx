'use client';

export function Register() {
  return (
    <div className="max-w-fit mx-auto bottom-24 right-5 z-50 items-center justify-center">
      <a 
        href="https://app.zerops.io/registeration" 
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <div className="font-bold rounded-lg border p-1.5 bg-background hover:-translate-y-[1px] transition-all duration-200">
          <div className="rounded-md px-2 py-1 font-mono text-[11px] md:text-[13px] text-foreground">
            Deploy on Zerops / Get up to $65 Free Credit{" "}
            <span role="img" aria-label="celebration"></span>
          </div>
        </div>
      </a>
    </div>
  );
}