import { useEffect, useState, useRef, ReactNode } from 'react';

const TOC = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // コンポーネントの子要素内の h1～h6 を取得
    const headingElements = Array.from(containerRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6'));

    const headingData = headingElements.map((el) => ({
      id: el.id || el.textContent?.replace(/\s+/g, '-').toLowerCase() || '',
      text: el.textContent || '',
      level: parseInt(el.tagName[1], 10),
    }));

    setHeadings(headingData);
  }, []);

  return (
    <div>
      <nav>
        <ul>
          {headings.map((heading) => (
            <li key={heading.id} style={{ marginLeft: `${(heading.level - 1) * 1.5}em` }}>
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* ここに対象となるコンテンツを含める */}
      <div ref={containerRef}>{children}</div>
    </div>
  );
};

export default TOC;
