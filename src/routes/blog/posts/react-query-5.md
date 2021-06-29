---
title: 「React Query」 05. Background Fetching Indicators

date: "2021-06-29T02:00:00.000Z"
---

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

쿼리의 `status === 'loaing'` 상태는 최초 쿼리의 로딩 상태를 보여주기에 충분하지만 
**백그라운드** 에서 쿼리가 `refetching` 하고 있다는 인디케이터를 표시하고 싶을 수 있다.


``` 
function Todos() {
   const { status, data: todos, error, isFetching } = useQuery(
     'todos',
     fetchTodos
   )
 
   return status === 'loading' ? (
     <span>Loading...</span>
   ) : status === 'error' ? (
     <span>Error: {error.message}</span>
   ) : (
     <>
       {isFetching ? <div>Refreshing...</div> : null}
 
       <div>
         {todos.map(todo => (
           <Todo todo={todo} />
         ))}
       </div>
     </>
   )
 }

```

## [로딩 상태를 전역으로 처리하기](https://react-query.tanstack.com/guides/background-fetching-indicators#displaying-global-background-fetching-loading-state)

개별 쿼리 로딩상태 외에도 전역에서 로딩 상태 인디케이터를 표시하려면 `useIsFetching` 훅을 사용할 수 있다.

```
import { useIsFetching } from 'react-query'
 
 function GlobalLoadingIndicator() {
   const isFetching = useIsFetching()
 
   return isFetching ? (
     <div>Queries are fetching in the background...</div>
   ) : null
 } 
```
