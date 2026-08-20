export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.lang="en"' }} />
      {children}
    </div>
  );
}
