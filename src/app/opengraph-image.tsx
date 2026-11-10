import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.headline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e8",
          color: "#1c1914",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#6b6458",
          }}
        >
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            {site.headline}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#6b6458",
              maxWidth: 720,
              lineHeight: 1.4,
            }}
          >
            {site.intro}
          </div>
        </div>
      </div>
    ),
    size
  );
}
