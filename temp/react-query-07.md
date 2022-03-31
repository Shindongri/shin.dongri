---
title: React Query：Disabling/Pausing Queries

date: "2021-06-30T01:00:00.000Z"
---

Disabling/Pausing Queries

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

쿼리가 자동으로 실행되는 것을 막고 싶다면, `enabled = false` 옵션을 사용할 수 있다.

`enabled = false`일 때

- 쿼리가 캐시된 데이터를 갖는 경우
  - 쿼리가 `status === 'success'` 나 `isSuccess` 상태로 초기화 된다.
- 쿼리가 캐시된 데이터를 갖지 않는 경우
  - 쿼리가 `status === 'idle'` 나 `isIdle` 상태로 시작된다.
- 마운트 될 때 쿼리가 자동으로 `fetch` 하지 않는다.
- 새로운 인스턴스가 마운트 될 때 백그라운드에서 쿼리가 자동으로 `refetch` 하지 않는다.
- 쿼리 클라언트의 `invalidateQueries`, `refetchQueries` 호출을 무시한다.
- `refetch`를 수동으로 트리거할 수 있다.

```jsx
function Todos() {
   const {
     isIdle,
     isLoading,
     isError,
     data,
     error,
     refetch,
     isFetching,
   } = useQuery('todos', fetchTodoList, {
     enabled: false,
   })
 
   return (
     <>
       <button onClick={() => refetch()}>Fetch Todos</button>
 
       {isIdle ? (
         'Not ready...'
       ) : isLoading ? (
         <span>Loading...</span>
       ) : isError ? (
         <span>Error: {error.message}</span>
       ) : (
         <>
           <ul>
             {data.map(todo => (
               <li key={todo.id}>{todo.title}</li>
             ))}
           </ul>
           <div>{isFetching ? 'Fetching...' : null}</div>
         </>
       )}
     </>
   )
 }
```
