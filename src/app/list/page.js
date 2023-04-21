export default function List() {
  const product = ["Tomatoes", "Pasta", "Coconut"];

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {product.map((product, i) => {
        return (
          <div className="food">
            <h4>
              <img className="food-img" src={`/food${i}.png`} alt="" />
              {product} {i + 1} $40
            </h4>
          </div>
        );
      })}
    </div>
  );
}

// 이미지 최적화 (lazy loading, 사이즈최적화, layout shift방지 ...)
// 방법 -> 이미지 import 해서 사용
