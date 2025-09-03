import { useEffect, useState } from "react";

function App() {
  // useEffect
  // 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook.

  // 1. 마운트가 될 때만, 최초 1회만 실행하고 싶을 때.
  // 마운트란, 리액트 DO 에 우리가 return 키워드 하단에 작성한 HTML, CSS 영역
  // 즉, UI 가 붙었을 때 => 우리가 HTML을 자바스크립트로 통제 가능할 때
  // useEffect 에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고, 업데이트 될 때는 실행하지 않으려면, 함수에 두 번째 매개변수로 빈 배열을 넣어주면 된다.

  // 2. 특정 값이 업데이트 될 때만 실행하고 싶을 때
  // useEffect 를 사용할 때, 특정 값이 변경될 때만 호출하고 싶을 경우도 있다.
  // useEffect의 두 번째 매개변수로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 된다.

  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  // useEffect(() => {
  //   // 해당 컴포넌트가 최초 렌더링이 될 떄, useEffect 는 실행이 되고,
  //   // 우리가 선언한 state 즉, 상태 값이 변화하더라도 useEffect 가 실행되는 것으로 보아
  //   // state 즉, 상태가 값이 변화하면 해당 컴포넌트는 재렌더링이 된다는 것을 알 수 가 있습니다.
  //   console.log("컴포넌트가 렌더링 될 때마다 특정 작업을 수행합니다.");
  //   console.log("name: ", name);
  //   console.log("nickname: ", nickname);
  // });

  useEffect(() => {
    console.log("마운트가 될 때만 수행합니다. - 최초 1회 실시");
    console.log("name: ", name);
    console.log("nickname: ", nickname);
  }, []);

  useEffect(() => {
    console.log("name 이라는 상태 값이 변할 경우에만 수행합니다.");
    console.log("name: ", name);
    console.log("nickname: ", nickname);
  }, [name]);

  useEffect(() => {
    console.log("뒷 정리하기");
    console.log("updated name: ", name);

    return () => {
      // 종료시킬 로직 작성하는 부분
      // 언마운트 될 때, 혹은 업데이트 되기 직전에 특정 작업을 수행하고 싶을 때
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);


  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={onChangeName} />
      <input type="text" value={nickname} onChange={onChangeNickname} />

      <div><b>이름: {name}</b></div>
      <div><b>닉네임: {nickname}</b></div>
    </div>
  );
}

export default App;
