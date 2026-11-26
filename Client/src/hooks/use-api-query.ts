"use client";

import { useQuery, type QueryKey } from "@tanstack/react-query";
import type { BackendDomain } from "@/constants/integrations";

export function useApiQuery<TData>(domain: BackendDomain, key: QueryKey, queryFn?: () => Promise<TData>) {
  return useQuery({
    queryKey: [domain, ...key],
    queryFn: queryFn ?? (() => Promise.reject(new Error(`${domain} is awaiting the backend endpoint contract.`))),
    enabled: Boolean(queryFn),
    retry: false,
  });
}
