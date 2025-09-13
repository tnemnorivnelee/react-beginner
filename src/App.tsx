import { useRef } from "react";


function App() {
  // useRef
  // useRef 훅은 함수 컴포넌트에서 ref 라는 속성을 쉽게 사용할 수 있도록 도와주는 도구
  // React 의 useRef 는 컴포넌트 내에서 변하지 않는 값을 유지하거나 DOM 요소에 직접 접근할 때 사용
  // 다른 react 훅과 목적이 다름

  // useRef는 값을 저장하거나 DOM에 접근하기 위해 사용하는 객체(참조값)를 생성
  // 저장된 값은 컴포넌트가 리렌더링되어도 유지되며, 값이 바뀌어도 리렌더링 발생X

  // ref 속성은 JSX, TSX 에서 요소나 컴포넌트에서 참조를 연결하는 역할

  const inputElement = useRef<HTMLInputElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    // useRef 동작
    inputElement.current?.focus();
    fileInputRef.current?.click();
  };

  return (
    <div>
      <input type="text" ref={inputElement} />
      <input type="file" ref={fileInputRef} />
      <button onClick={handleClick}>등록</button>
    </div>
  );
}

export default App;
