import MaintLayout from "@/components/MaintLayout";
import "./globals.css";

export const metadata = {
  title: "Nextjs Tailwind SandBox",
  description: "This is a tutorial project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MaintLayout>{children}</MaintLayout>
      </body>
    </html>
  );
}
