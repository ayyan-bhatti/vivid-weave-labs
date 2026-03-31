export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-xs text-primary-foreground">
            CC
          </div>
          <span className="font-heading font-semibold text-foreground">Capital Crew</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2024 Capital Crew. All rights reserved.</p>
      </div>
    </footer>
  );
}
