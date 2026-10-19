import type { Metadata } from "next";
import MarkdownDoc from "../markdown_doc";

export const metadata: Metadata = {
  title: "KeeperCam Privacy Policy",
  description: "How the KeeperCam iPhone app handles your information.",
};

export default function PrivacyPage() {
  return <MarkdownDoc file="privacy-policy.md" />;
}
