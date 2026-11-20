"use client";

import { useQuery } from "@tanstack/react-query";
import { api, configuredPath } from "@/lib/api";
import type { ApiList, Listing } from "@/types/marketplace";

const path = configuredPath(process.env.NEXT_PUBLIC_LISTINGS_PATH);

export function useListings(search = "") {
  return useQuery({
    queryKey: ["listings", search],
    enabled: Boolean(path),
    queryFn: async () => {
      const { data } = await api.get<ApiList<Listing>>(path!, {
        params: search ? { search } : undefined,
      });
      return data;
    },
    retry: 1,
  });
}
