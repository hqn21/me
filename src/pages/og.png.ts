import type { APIRoute } from "astro";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { site } from "../config";
import faviconSvg from "../../public/favicon.svg?raw";

const require = createRequire(import.meta.url);
const font = (weight: 400 | 600) =>
  readFile(require.resolve(`@fontsource/geist/files/geist-latin-${weight}-normal.woff`));

function smileyDataUri(): string {
  const svg = faviconSvg
    .replace(/<style>[\s\S]*?<\/style>/, "")
    .replace(/class="bg"/g, 'fill="#fafafa" stroke="#e4e4e7"')
    .replace(/class="fg"/g, 'fill="#18181b"')
    .replace(/class="ln"/g, 'stroke="#18181b"');
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

type Node = { type: string; props: Record<string, unknown> };
const el = (type: string, props: Record<string, unknown>, ...children: (Node | string)[]): Node => ({
  type,
  props: { ...props, children: children.length === 1 ? children[0] : children },
});

export const GET: APIRoute = async () => {
  const [regular, semibold] = await Promise.all([font(400), font(600)]);
  const smiley = smileyDataUri();

  const tree = el(
    "div",
    {
      style: {
        width: 1200,
        height: 630,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "96px 104px",
        background: "#ffffff",
        fontFamily: "Geist",
      },
    },
    el("img", { src: smiley, width: 88, height: 88 }),
    el(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      el(
        "div",
        { style: { fontSize: 76, fontWeight: 600, color: "#18181b", letterSpacing: "-0.025em", lineHeight: 1.05 } },
        site.name,
      ),
      el(
        "div",
        { style: { marginTop: 18, fontSize: 34, fontWeight: 400, color: "#71717a", letterSpacing: "-0.01em" } },
        site.title,
      ),
    ),
  );

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Geist", data: regular, weight: 400, style: "normal" },
      { name: "Geist", data: semibold, weight: 600, style: "normal" },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();

  return new Response(new Uint8Array(png), { headers: { "Content-Type": "image/png" } });
};