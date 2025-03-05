import { useEffect, useState, ReactNode } from 'react';

const HeadingsIndexer = ({ children }: { children: ReactNode }) => {
//   const [headingIndex, setHeadingIndex] = useState<number[]>([]);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));

    const indexMap: { [key: number]: number } = {};
    
    headings.forEach((heading) => {
      const level = parseInt(heading.tagName[1], 10); // h1 -> 1, h2 -> 2, ...
      
      // 上位レベルがなければ初期化
      if (indexMap[level] === undefined) indexMap[level] = 0;

      // 下位レベルをリセット
      for (let i = level + 1; i <= 6; i++) delete indexMap[i];

      // 現在のレベルをインクリメント
      indexMap[level]++;

      // インデックスの文字列を作成（例: "1.1.2"）
      const indexString = Object.keys(indexMap)
        .filter((key) => parseInt(key, 10) <= level)
        .map((key) => indexMap[parseInt(key, 10)])
        .join('.');

      // 見出しのテキストを変更
      heading.textContent = `${indexString} ${heading.textContent}`;

      // IDを設定
      if (!heading.id) {
        heading.id = heading.textContent.replace(/\s+/g, '-').toLowerCase();
      }
    });

    // setHeadingIndex(Object.values(indexMap));
  }, []);

  return <>{children}</>;
};

export default HeadingsIndexer;


