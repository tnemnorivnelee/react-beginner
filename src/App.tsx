import { useCallback, useMemo, useState } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균값 계산 중...");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur);

  return sum / numbers.length;
};


function App() {

  // useCallback
  // useCallback 은 useMemo 와 상당히 비슷한 함수
  // 주로 렌더링 성능을 최적화해야 하는 상황에서 사용합니다.
  // 이 훅을 사용하면 만들어 놓았던 함수를 재사용할 수 있습니다.

  // useCallback 은 첫 번째 인자에 생성하고 싶은 함수를 넣고,
  // 두 번째 인자에는 배열을 넣으면 된다.
  // 이 배열에는 어떤 값이 바뀌었을 때, 함수를 새로 생성해야 하는지 명시해야 한다.

  // onChange 처럼 비어 있는 배열을 넣게 되면 컴포넌트가 렌더링 될 때, 만들었던 함수를 계속해서 재사용하게 되며
  // onInsert 처럼 배열 안에 number 와 list 를 넣게 되면, 인풋 내용이 바뀌거나 새로운 항목이 추가 되었을 때 새로 만들어진 함수를 사용하게 된다.

  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>(""); // 실제 input 태그의 입력된 숫자를 list 배열에 주입할 것이기 때문에 상태 값 이름을 number 로 지정. 단, input 태그에 입력된 값이기 때문에 데이터 타입은 string 입니다.


  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트 최초 렌더링 될 때만 함수를 생성한다. 

  // onInsert 두번째 인자인 배열을 비워둔다면,
  // useCallback 은 컴포넌트가 처음 렌더링 될 때만 함수를 생성하고,
  // 그 이후로는 계속해서 같은 함수를 재사용하게 된다.
  // 따라서, onInsert 함수 내부에서 참조하는 list 와 number 는 컴포넌트가 처음 렌더링 되었을 때의 값으로 고정.
  // 즉, 사용자가 인풋에 숫자를 입력하고 등록 버튼을 눌러도 onInsert 함수 내부에서 참조하는 list 와 number 는 처음 렌더링 되었을 때의 값이기 때문에
  // 새로운 항목이 추가되지 않고, 인풋에 입력한 값도 반영되지 않음.
  const onInsert = useCallback(() => {
    // concat: Array 인스턴스의 concat 함수는 두 개 이상의 배열을 병합하는 데 사용.
    // 이 메서드는 기존 배열을 변경하지 않고, 대신 새로운 배열을 반환.
    // parseInt: 문자열 인자를 파싱하여 특정 진수(기본값은 10)의 정수를 반환.
    const newList = list.concat(parseInt(number));

    setList(newList); // number[]
    setNumber(""); // number 상태 값 초기화
  }, [number, list]);


  // list 가 변할 때마다, getAverage 함수 호출
  // useMemo: 첫 번째 파라미터로 전달된 함수의 반환 값을 기억했다가, 두 번째 파라미터(의존성 배열)에 명시된 값이 바뀌었을 때에만 함수를 다시 호출.
  // 따라서, list 가 바뀔 때에만 getAverage 함수가 호출되고, 그렇지 않으면 이전에 계산된 평균값을 재사용.
  // 이를 통해 불필요한 계산을 피하고 성능을 최적화할 수 있음.
  const average = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} />
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
