import { useMemo, useState } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균값 계산 중...");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur);

  return sum / numbers.length;
};


function App() {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>(""); // 실제 input 태그의 입력된 숫자를 list 배열에 주입할 것이기 때문에 상태 값 이름을 number 로 지정. 단, input 태그에 입력된 값이기 때문에 데이터 타입은 string 입니다.

  const onInsert = () => {
    // concat: Array 인스턴스의 concat 함수는 두 개 이상의 배열을 병합하는 데 사용.
    // 이 메서드는 기존 배열을 변경하지 않고, 대신 새로운 배열을 반환.
    // parseInt: 문자열 인자를 파싱하여 특정 진수(기본값은 10)의 정수를 반환.
    const newList = list.concat(parseInt(number));

    setList(newList);
    setNumber("");
  };

  // list 가 변할 때마다, getAverage 함수 호출
  // useMemo: 첫 번째 파라미터로 전달된 함수의 반환 값을 기억했다가, 두 번째 파라미터(의존성 배열)에 명시된 값이 바뀌었을 때에만 함수를 다시 호출.
  // 따라서, list 가 바뀔 때에만 getAverage 함수가 호출되고, 그렇지 않으면 이전에 계산된 평균값을 재사용.
  // 이를 통해 불필요한 계산을 피하고 성능을 최적화할 수 있음.
  const average = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((item: number, index: number) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <div>
        <b>평균 값: {average}</b>
      </div>
    </div>
  );
}

export default App;
