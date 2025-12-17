import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen bg-gradient-to-br 
                    from-gray-50 to-gray-100
                    dark:from-gray-900 dark:to-gray-950
                    text-gray-900 dark:text-gray-100"
    >
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
