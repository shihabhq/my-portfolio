import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";
import Link from "next/link";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto flex-col">
      <header className="container mx-auto px-4 z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="flex items-center  gap-5">
            <Link
              href="/contact"
              className="text-sm bg-white text-black py-2 w-full px-3 border rounded-lg hover:bg-white/90 font-medium transition-all "
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="container flex-1 mx-auto mt-16 px-4">{children}</main>
      <SiteFooter />
    </div>
  );
}
