---
title: 「패스트캠퍼스：가장 보통의 UI」 - Modal
date: "2021-07-20T01:00:00.000Z"
---

Modal Component

<!-- more -->

## 모달 (Modal) 컴포넌트란 ? 🪟

![](https://miro.medium.com/max/700/1*EcX_1ReJ7Uzcomal0IvFZA.png)

모달 컴포넌트는 기본 window 위에 presenting 하여 띄우는 방식이다. 

모달 컴포넌트 아래의 window 는 비활성 상태이기 때문에 유저가 활성된 Modal 창 외부의 콘텐츠와 인터페이스 할 수 없다.

때문에 유저의 **주의 또는 이목을 끌기 위해** 주로 많이 사용되는 기법이라고 할 수 있다.

---

## Portal ? 🕊

Portal 은 **외부 DOM에 컴포넌트를 렌더링하는 방법** 을 제공한다.

```jsx
ReactDOM.createPortal(child, container)
```

첫번째 인자(child)는 엘리먼트, 문자열, 혹은 fragment와 같은 렌더링할 수 있는 React child 이다. 

두 번째 인자(container)는 DOM 엘리먼트이다.

#### 사용 예시

아래 예시에서 React 는 새로운 엘리먼트를 생성하지 않고, `domNode` 내부에 자식 엘리먼트를 렌더링한다.

여기서 `domNode` 는 DOM 내부의 어디에 있든지 상관 없다.

```jsx
render() {
    return ReactDOM.createPortal(
        this.props.children,
        domNode
    )
}
```

* portal 의 일반적인 Use-Case 는 부모 컴포넌트에 `overflow: hidden` 이나 `z-index 가 있는 경우`이지만, 시각적으로 자식 컴포넌트를 튀어나오도록 보여야 하는 경우도 있다.

대표적으로 **모달 컴포넌트** 의 경우에 쓰인다.

---

## [react-transition-group](https://reactcommunity.org/react-transition-group/) ✨

react-transition-group 은 리액트 컴포넌트에 **transition 효과를 쉽게 줄 수 있는 라이브러리** 이다.

컴포넌트가 appear, enter, exit 될 때 적절한 transition 효과를 줄 수 있기 때문에,

모달 on&off 시 좀 더 부드럽게 화면 전환 효과를 내기에 적합하다.

---


## Use Cases 🚸

- 모달을 트리거하는 버튼을 클릭하여 모달을 노출시킨다.
- 모달이 노출되면 모달 이외의 영역은 dimmed 처리된다.
- 취소 버튼이나 dim 영역을 클릭하면 모달이 닫힌다.

---

## 구현하기 👨🏻‍💻

<br />

<iframe src="https://codesandbox.io/embed/green-night-ewsts?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="modal" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

- [portal](https://ko.reactjs.org/docs/portals.html) 을 사용해서 특정 외부 DOM 노드로 모달 컴포넌트를 append 한다.
- 모달로 표시할 컴포넌트를 [children](https://ko.reactjs.org/docs/glossary.html#propschildren) 으로 전달한다.
- `isOpen` 을 prop 으로 전달 받아 모달 노출을 토글한다.
- `onClose` 메소드를 prop 으로 전달 받아 dim 영역을 클릭하면 트리거 하게끔 한다.
- react-transition-group 활용해서 모달 on&off 시 좀 더 부드러운 전환 효과를 내도록 한다.

## 참고 📃

- https://uxplanet.org/best-practices-for-modals-overlays-dialog-windows-c00c66cddd8c
- https://reactjs.org/docs/portals.html
- https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal
- https://reactcommunity.org/react-transition-group/
