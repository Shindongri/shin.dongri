---
title: 「React Query」 08. Query Retries

date: "2021-06-30T02:00:00.000Z"
---

Query Retries

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

`useQuery` 쿼리가 실패할 때 React Query는 자동으로 쿼리 요청을 `retry`한다 (기본값 : 3회)

`retry` 횟수는 **전역 / 쿼리** 별로 조정할 수 있다.

- `retry = false`는 재시도를 **비활성화** 한다.
- `retry = 6`을 설정하면 함수에서 발생한 최종 에러를 표시하기 전에 6번 다시 요청한다.
- `retry = true`는 **무한**으로 다시 요청한다.
- `retry = (failureCount, error) => ...` **실패 횟수와 에러**를 전달받아 커스텀 로직을 작성할 수 있다.

```jsx
import { useQuery } from 'react-query'
 
// Make a specific query retry a certain number of times
const result = useQuery(['todos', 1], fetchTodoListPage, {
    retry: 10, // Will retry failed requests 10 times before displaying an error
})
```

## [Retry Delay](https://react-query.tanstack.com/guides/query-retries#retry-delay)

기본적으로 React Query의 재시도는 요청이 실패한 직후 발생하지 않는다.

표준에 따라 각 재시도에 백오프 지연이 점진적으로 적용된다.

기본 `retryDelay`는 시도할 때마다 두 배(1000ms)로 설정되지만 30초를 초과하지 않는다.

```jsx
// Configure for all queries
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient({
   defaultOptions: {
     queries: {
       retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
     },
   },
 })
 
function App() {
   return <QueryClientProvider client={queryClient}>...</QueryClientProvider>
}
```

권장하진 않지만 Provider와 개별 쿼리 옵션 모두에서 `retryDelay` function / integer를 재정의 할 수 있다.

function 대신 integer로 설정하면 지연은 항상 동일하다.

```jsx
const result = useQuery('todos', fetchTodoList, {
    retryDelay: 1000, // Will always wait 1000ms to retry, regardless of how many retries
})
```


