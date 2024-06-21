import Link from "next/link";

export function Footer() {
  return (
    <div className="relative border-t py-4 bg-gray-50 mt-12 flex items-center dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div>Created by Arthur Laroya</div>

        <div className="flex gap-3 text-blue-400 hover:text-blue-500">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </div>
  );
}
