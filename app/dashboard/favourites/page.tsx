"use client";

import { FileBrowser } from "../_components/file-browser";

export default function FavouritesPage() {
  return (
    <div>
      <FileBrowser title="Your Favourites" favouritesOnly />
    </div>
  );
}
