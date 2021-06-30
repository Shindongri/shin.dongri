---
title: 「React Query」 06. Window Focus Refetching

date: "2021-06-30T00:00:00.000Z"
---

Window Focus Refetching

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

유저가 어플리케이션을 떠나 오래된 데이터(stale data)로 다시 돌아오면 React Query가 자동으로 백그라운드에서 새로운 데이터를 요청한다.

`refetchOnWindowFocus` 옵션을 사용하여 전역 / 쿼리 별로 비활성화 할 수 있다.

## [전역에서 비활성화](https://react-query.tanstack.com/guides/window-focus-refetching#disabling-globally)

```jsx
//
 const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       refetchOnWindowFocus: false,
     },
   },
 })
 
 function App() {
   return <QueryClientProvider client={queryClient}>...</QueryClientProvider>
 }
```

## [쿼리 별 비활성화](https://react-query.tanstack.com/guides/window-focus-refetching#disabling-per-query)

```jsx
useQuery('todos', fetchTodos, { refetchOnWindowFocus: false })
```

## [window 포커스 이벤트 커스텀](https://react-query.tanstack.com/guides/window-focus-refetching#custom-window-focus-event)

드문 케이스지만 React Query 를 재검증(revalidate)하도록 트리거하는 window 포커스 이벤트를 커스텀 할 수 있다.

이를 위해 React Query 는 window 가 포커스 될 때 실행되어야 하는 콜백을 제공하고 자체 이벤트를 커스텀할 수 있도록 하는 `focusManager.setEventListener` 함수를 제공한다.

`focusManager.setEventListener`를 호출하면 이전에 설정한 핸들러가 제거되고 새 핸들러가 대신 사용된다.

```jsx
focusManager.setEventListener(handleFocus => {
   // Listen to visibillitychange and focus
   if (typeof window !== 'undefined' && window.addEventListener) {
     window.addEventListener('visibilitychange', handleFocus, false)
     window.addEventListener('focus', handleFocus, false)
   }
 
   return () => {
     // Be sure to unsubscribe if a new handler is set
     window.removeEventListener('visibilitychange', handleFocus)
     window.removeEventListener('focus', handleFocus)
   }
 })
```

## [iframe 포커스 이벤트 무시하기](https://react-query.tanstack.com/guides/window-focus-refetching#ignoring-iframe-focus-events)

포커스 이벤트를 커스텀하는 대표 사례는 iframe 이벤트이다.

iframe 은 두 번 호출되는 이벤트를 통해 window 포커스를 감지하거나 앱 내에서 iframe을 사용할 때 위양성(false-positive) 이벤트를 발생시키는 데 문제가 있는 경우

이러한 상황이 발생하는 경우 이러한 이벤트를 무시하는 이벤트 핸들러를 사용해야 한다.

```jsx
import { focusManager } from 'react-query'
import onWindowFocus from './onWindowFocus' // The gist above
 
focusManager.setEventListener(onWindowFocus) // Boom!
```

## [리액트 네이티브에서 포커스 관리하기](https://react-query.tanstack.com/guides/window-focus-refetching#managing-focus-in-react-native)

window의 이벤트 리스터 대신 리액트 네이티브는 AppState 모듈을 통해 포커스 정보를 제공한다.

앱 상태가 `active`으로 변경될 때 AppState `change` 이벤트를 사용하여 업데이트를 트리거할 수 있다.

```jsx
import { AppState } from 'react-native'
import { focusManager } from 'react-query'
 
focusManager.setEventListener(handleFocus => {
    AppState.addEventListener('change', handleFocus)
    
    return () => {
        AppState.removeEventListener('change', handleFocus)
    }
})
```

## [포커스 상태 관리하기](https://react-query.tanstack.com/guides/window-focus-refetching#managing-focus-state)

```jsx
import { focusManager } from 'react-query'
 
// Override the default focus state
focusManager.setFocused(true)
 
// Fallback to the default focus check
focusManager.setFocused(undefined)
```
