import { Link, Outlet } from "react-router-dom";
import "./rootlayout.css";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk publishable key to the .env.local file");
}

const queryClient = new QueryClient();

const Rootlayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <div className="rootlayout">
          <header>
            <Link to="/" className="logo">
              <img src="/logo.png" alt="" />
              <span>Rongling AI</span>
            </Link>
            <div className="user">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default Rootlayout;
