리액트 라이플 사이클

컴포넌트의 라이프 사이클 메소드는 총 9가지가 있다.
라이프 사이클 메소드는 클래스형 컴포넌트에서만 사용가능하다

라이플 사이클은 총 3가지 카테고리인 마운트, 업데잍, 언마운트로 나뉜다

마운트: DOM이 생성되고 웹 브라우저상 나타나는 것을 마운트(mount라고 한다)
업데이트 : 컴포넌트의 상태가 바뀌는 경우를 의미하며, 총 4가지 업데이트 상황이 있다
1. props 변경
2. state변경 
3. 부모 컴포넌의 리렌더링
4. this.forceUpdate로 강제 리렌더링

언마운트 : 컴포넌트를 Dom에서 저거하는 것을 언마운트라고 한다.

