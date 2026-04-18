import { checkpoints, getStats } from "@/lib/checkpoints";
import OBSView from "@/components/OBSView";

export const metadata = {
  title: "Faith Walk Stream Overlay",
  description: "OBS browser source overlay of the Faith Walk tracker map.",
  robots: { index: false, follow: false },
};

export default async function OBSPage({
  searchParams,
}: {
  searchParams: Promise<{ bare?: string; brand?: string }>;
}) {
  const params = await searchParams;
  const bare = params.bare === "1";
  const brand = params.brand !== "0";
  const s = getStats();

  return (
    <OBSView
      checkpoints={checkpoints}
      bare={bare}
      brand={brand}
      currentDay={s.currentDay}
      miles={s.miles}
      percent={s.percent}
    />
  );
}
