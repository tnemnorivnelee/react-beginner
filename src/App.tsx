import { useState } from "react";

function App() {

  // useState => Hooks 
  // 가변적인 상태 관리 

  // useState 는 리액트에서 가장 기본적인 Hook 입니다.
  // 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  // => 함수가 호출되면 배열을 반환한다.
  // [상태, 상태설정함수]
  // useState 함수의 파라미터(매개변수)에는 상태의 초기값을 넣어준다.

  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>("빈 문자열로 할당하지 않은 name 상태값 입니다.");
  const [nickname, setNickname] = useState<string>("빈 문자열로 할당하지 않은 nickname 상태값 입니다.");

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => setNickname(event.target.value);

  return (
    <div>
      <p>
        현재 카운터 값은: <b>{value}</b>
      </p>

      <button onClick={increment}>1 증가</button>
      <button onClick={decrement}>1 감소</button>

      <div>
        <input
          type="text"
          value={name}
          onChange={onChangeName}
        />
        <input
          type="text"
          value={nickname}
          onChange={onChangeNickname}
        />
      </div>

      <div>
        <b>이름: {name}</b>
        <b>별명: {nickname}</b>
      </div>
    </div>
  );
}

export default App;
