import { ThemeToggle } from "@/components/ui/theme-toggle";
import EntryForm from "@/components/EntryForm";

export default function Home() {
  return (
    <main className="relative min-h-screen minn-w-screen flex items-center justify-center">
      <div className="absolute top-10 right-10">
        <ThemeToggle />
      </div>
      
      <div className="w-full">
        <EntryForm />
        <div>
          
        </div>
      </div>
      
    </main>
    
  );
}
