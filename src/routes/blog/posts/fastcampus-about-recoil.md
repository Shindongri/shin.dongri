---
title: 「패스트캠퍼스：Recoil 을 이용한 To-do 리스트 만들기 」 - 이론
date: "2021-07-29T00:00:00.000Z"
---

About Recoil

<!-- more -->

## Recoil 이란 ? 😎

![](https://recoiljs.org/ko/img/og-image.png)

Recoil 은 페이스북에서 만든 상태 관리 라이브러리이고 2020년 5월에 진행된 [React Europe 2020](https://www.react-europe.org/) 에서 처음으로 소개되었다.

현재 (2021년 8월 2일) 기준으로 최신 버전이 [0.4.0](https://github.com/facebookexperimental/Recoil/releases/tag/0.4.0) 이고 아직까진 프로덕션에 사용되기는 이를 수도 있지만, Redux, MobX 등 기존의 상태 관리 라이브러리들을 대체할 다양한 장점이 존재하므로 점차 발전할 것으로 기대된다.

---

## Redux vs Recoil 🆚

- 액션, 리듀서, 미들웨어 등 boilerplate 코드가 많이 발생하는 Redux 와는 대조적으로 Recoil 은 **boilerplate-free API** 제공한다. React 의 `useState` 처럼 간단한 게터(get) / 세터(set) 인터페이스로 사용 가능하다.
- Redux 의 상태 구조는 트리 구조를 따르지만 Recoil 은 [**방향 그래프(directed graph, digraph)**](https://en.wikipedia.org/wiki/Directed_graph) 를 따른다. 사실 방향 그래프의 이해가 좀 힘들었는데 [참고](https://twitter.com/ForbesLindesay/status/1281213004990816258) 이 설명으로 이해를 도왔다 🙏🏻
- Recoil 은 상태를 사용하는 컴포넌트를 수정하지 않고 파생 데이터(derived data)를 대체할 수 있다.
  - 기본적으로 아톰(atom)의 데이터가 변경되면 해당 atom 을 구독하는 모든 컴포넌트들은 갱신된다. Redux 에서는 해당 기능을 수행하기 위해 [reselect](https://github.com/reduxjs/reselect) 같은 라이브러리가 필요하다.
  - [AtomEffect](https://recoiljs.org/ko/docs/guides/atom-effects) 를 사용해서 특정 상태의 갱신 이후의 사이드 이펙트를 **자체적으로** 정의 가능하다 ➡️ 상태 갱신 이후에 영향받는 컴포넌트에서 직접 `useEffect`를 사용할 필요가 없다.

---

## Atoms ⚛

Recoil 의 상태 단위이다. 스토어에 저장되고 갱신되는 데이터는 모두 Atom을 기반으로 한다.

아톰이 갱신될 때 그 상태를 구독(subscribe) 하고 있는 컴포넌트는 새로운 값으로 리렌더 된다.

아톰은 `atom()` 함수에 **key** 와 **default** 을 전달해서 작성한다.

```jsx
import { atom } from 'recoil';

const counterState = atom({
  key: 'counterState',
  default: 0
});
```

---

## Selectors 🔭

Selector 는 상태를 기반으로 전달된 데이터를 가공할 때 사용된다.

`selector()` 함수에 **key** 와 **get** 와 **set** 를 전달하여 작성한다.

```jsx
import { selector } from 'recoil';
...

const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
```

`get` 프로퍼티는 계산에 사용되는 함수이다. 

전달된 `get` 인수를 사용해서 아톰(Atom)이나 다른 셀렉터(Selector)에 접근할 수 있으며, 접근한 아톰이나 셀렉터가 업데이트 되면 다시 계산된다.

위 예제의 셀렉터는 `fontSizeState` 상태를 가져와 폰트 사이즈를 출력하는 순수 함수처럼 동작한다.

셀렉터는 쓸 수(write)없기 때문에 `useRecoilState`를 사용하지 않고 `useRecoilValue`를 사용한다.

```jsx
import { useRecoilState, useRecoilValue } from 'recoil';


function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>

      <button onClick={setFontSize(fontSize + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>
    </>
  );
}
```

---

## Reference APIs ※

<br />

### `atomFamily(options)`
  : `atom` 을 반환하는 함수를 반환한다.

Atom Family 는 atom 의 모음을 의미한다. 

```jsx
const elementPositionStateFamily = atomFamily({
  key: 'ElementPosition',
  default: [0, 0],
});

function ElementListItem({elementID}) {
  const position = useRecoilValue(elementPositionStateFamily(elementID));
  return (
    <div>
      Element: {elementID}
      Position: {position}
    </div>
  );
}
```

위처럼 `atomFamily`는 `atom`과 거의 동일하지만 전달한 매개변수에 따라 `RecoilState`를 제공하는 함수를 반환한다.

***

### `selectorFamily(options)`
    : `selector`를 반환하는 함수를 반환한다.

`atomFamily` 와 비슷하게 `selectorFamily` 는 `selector` 의 모음을 의미한다.

`selector` 와 유사하지만 `get`, `set`, `selector`의 콜백을 매개변수로 전달할 수 있다는 점이 다르다.

`selectorFamily` 유틸리티는 매개변수로 호출 할 수 있는 함수를 반환하고 `selector` 를 반환한다.

```jsx
const myNumberState = atom({
  key: 'MyNumber',
  default: 2,
});

const myMultipliedState = selectorFamily({
  key: 'MyMultipliedNumber',
  get: (multiplier) => ({get}) => {
    return get(myNumberState) * multiplier;
  },

  // optional set
  set: (multiplier) => ({set}, newValue) => {
    set(myNumberState, newValue / multiplier);
  },
});

function MyComponent() {
  // defaults to 2
  const number = useRecoilValue(myNumberState);

  // defaults to 200
  const multipliedNumber = useRecoilValue(myMultipliedState(100));

  return <div>...</div>;
}
```

***

### `useRecoilCallback(callback, deps)`
: `useCallback` 과 비슷하지만 Recoil 상태에서 callback이 동작하도록 API를 제공한다.

이 hook 은 비동기로 현재의 Recoil 상태를 업데이트하거나 [읽기 전용 Snapshot](https://recoiljs.org/ko/docs/api-reference/core/Snapshot) 에 접근할 수 있는 callback 을 구축하기 위해 사용될 수 있다.

사용하는 경우

- 리액트 컴포넌트에서 해당 상태를 구독하지 않고 싶을 때
- 렌더링 이전에 데이터를 미리 가져오고 싶을 때 ([Pre-fetching](https://recoiljs.org/ko/docs/guides/asynchronous-data-queries#pre-fetching))

---

## 참고 📃

- https://recoiljs.org/
