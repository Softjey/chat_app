"use client";

import { Input } from "@nextui-org/react";
import { memo, useState } from "react";
import { SearchIcon } from "./icons/SearchIcon";

function SearchField() {
  const [search, setSearch] = useState("");

  return (
    <Input
      value={search}
      placeholder="Type to search..."
      onChange={(event) => setSearch(event.target.value)}
      startContent={<SearchIcon width={18} />}
      type="search"
    />
  );
}

export default memo(SearchField);
