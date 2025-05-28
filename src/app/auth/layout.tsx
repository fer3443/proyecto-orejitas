export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-4xl px-10">{children}</div>;
}
