"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export interface OutcomeItem {
  label: string;
  image: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  patent?: string;
  position?: string;
  text: string;
  image: string;
  outcomes: OutcomeItem[];
  created_at: string;
}

function normalizeOutcomes(o: any): OutcomeItem[] {
  try {
    if (!o) return [];
    if (Array.isArray(o)) return o;
    return JSON.parse(o);
  } catch {
    return [];
  }
}

export function useTestimonials() {
  const [items, setItems] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchAll() {
    setLoading(true);

    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("fetch testimonials error:", error);
      setItems([]);
    } else {
      const normalized = (data ?? [])
        .filter((d: any) => d.status === "approved") // ⭐ filter here
        .map((d: any) => ({
          ...d,
          outcomes: normalizeOutcomes(d.outcomes),
        })) as TestimonialItem[];

      setItems(normalized);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchAll();

    const ch = supabase
      .channel("testimonials-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "testimonials" },
        () => void fetchAll()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(ch);
    };
  }, []);

  return { items, loading, refresh: fetchAll };
}

