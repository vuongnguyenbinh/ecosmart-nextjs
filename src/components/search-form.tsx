"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function SearchForm({
  placeholder = "Tìm kiếm...",
  defaultValue = "",
}: {
  placeholder?: string;
  defaultValue?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(defaultValue || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-4 py-2 border border-[var(--esg-gold)]/30 bg-transparent focus:border-[var(--esg-gold)] outline-none"
      />
      <button
        type="submit"
        className="px-6 py-2 border border-[var(--esg-gold)] text-[var(--esg-gold)] hover:bg-[var(--esg-gold)] hover:text-white transition"
      >
        Tìm
      </button>
    </form>
  );
}
