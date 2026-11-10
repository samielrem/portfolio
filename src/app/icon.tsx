import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  const initial = site.name.charAt(0).toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#161412",
          color: "#f4f0e8",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        {initial}
      </div>
    ),
    size
  );
}
