import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Welcome to the Employee Management System</h1>
      <Link
        href="/employee"
        className="btn btn-primary"
      >
        Go to Employee Page
      </Link>
    </div>

  );
}
