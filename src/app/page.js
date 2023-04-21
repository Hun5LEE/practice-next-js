import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h4 className="title">study</h4>
      <p className="title-sub">by dev lee</p>
    </div>
  );
}

// page.js 보여줄때 - 동작원리
// 1. 옆에 layout.js 있으면 그걸로 page.js를 감쌈
// 2. 상위폴더에 layout.js 있으면 그걸로 1번 싸맴
