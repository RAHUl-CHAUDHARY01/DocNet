"use client";

import { usePaginatedQuery } from "convex/react";

import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { DocumentsTable } from "./documents-table";

import { api } from "../../../convex/_generated/api";
import { useSearchParam } from "@/hooks/use-search-param";

const Home = () => {
  const [search] = useSearchParam();
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: 5 }
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4 shadow">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-1 mt-16 p-4">
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 border-t text-sm text-gray-600">
        Made with ❤️ by Rahul • All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
