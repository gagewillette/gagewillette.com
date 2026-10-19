import type { Metadata } from "next";
import MarkdownDoc from "../markdown_doc";

export const metadata: Metadata = {
  title: "KeeperCam Support",
  description: "Help and contact information for the KeeperCam iPhone app.",
};

export default function SupportPage() {
  return <MarkdownDoc file="support.md" />;
}
