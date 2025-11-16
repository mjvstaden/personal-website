export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border-primary mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-text-tertiary">
            &copy; {new Date().getFullYear()} MJ. Built with passion and modern web technologies.
          </p>
          <p className="text-text-tertiary text-sm mt-2">
            Cape Town, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
