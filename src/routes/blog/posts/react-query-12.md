---
title: 「React Query」 12. Initial Query Data

date: "2021-07-05T00:00:00.000Z"
---

Initial Query Data

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

캐시에 초기 데이터(initial data)를 제공하는 방법에는 여러 가지가 있다.

- 선언적 :
  - 비어있는 경우 캐시를 미리 채우도록 쿼리에 `initialData`를 제공
- 명령적 : 
  - `queryClient.prefetchQuery`를 사용하여 데이터를 prefetch
  - `queryClient.setQueryData`를 사용하여 수동으로 데이터를 캐시에 입력한다.
  

## [`initialData`를 사용하여 쿼리 미리 채우기](https://react-query.tanstack.com/guides/initial-query-data#using-initialdata-to-prepopulate-a-query)

앱에서 사용할 수 있는 초기 데이터가 이미 있고 쿼리에 직접 제공 할 수 있는 경우가 있다.

이 경우 `config.initialData` 옵션을 사용하여 초기 데이터를 설정하면 초기 로딩 상태를 건너 뛸 수 있다 !

> 중요 : `initialData` 는 캐시에 유지되므로 placeholder 나 데이터 일부분을 제공하려면 이 옵션 말고 `placeholderData` 를 사용하는 것이 좋다.

```jsx
function Todos() {
   const result = useQuery('todos', () => fetch('/todos'), {
     initialData: initialTodos,
   })
 }
```

## [`staleTime` , `initialDataUpdatedAt`](https://react-query.tanstack.com/guides/initial-query-data#staletime-and-initialdataupdatedat)

기본적으로 `initialData` 는 완전히 새로운 것으로 취급되므로 `staleTime` 옵션에 영향을 주게 된다.

- 만약 `initialData` 를 설정하고 `staleTime` (default `staleTime : 0`) 옵션을 따로 설정하지 않는다면 마운트 되자마자 refetch 할 것이다.

```jsx
function Todos() {
   // Will show initialTodos immediately, but also immediately refetch todos after mount
   const result = useQuery('todos', () => fetch('/todos'), {
     initialData: initialTodos,
   })
 }
```

- `initialData` 가 완전히 새롭지 않은 경우엔 어떻게 해야할까 ? 그럴 땐 `initialDataUpdatedAt` 이라는 옵션을 사용한다.
  
  이 옵션을 사용하면 `initialData` 가 마지막으로 업데이트 된 타임 스탬프를 직접 전달할 수 있다. 
  
```jsx
function Todos() {
   // Show initialTodos immeidately, but won't refetch until another interaction event is encountered after 1000 ms
   const result = useQuery('todos', () => fetch('/todos'), {
     initialData: initialTodos,
     staleTime: 60 * 1000 // 1 minute
     // This could be 10 seconds ago or 10 minutes ago
     initialDataUpdatedAt: initialTodosUpdatedTimestamp // eg. 1608412420052
   })
 }
```

이 옵션을 사용하면 `staleTime` 을 원래 용도로 데이터의 최신 상태를 결정하는데 사용할 수 있고, `initialDataUpdatedAt` 을 기준으로 `staleTime` 보다 오래된 경우 마운트 시 데이터를 다시 가져올 수 있다.

위 예시에서 `staleTime` 은 1분이고 `initialData` 가 마지막으로 업데이트 된 시간을 쿼리에 힌트해서 쿼리가 데이터를 다시 가져와야하는지 여부를 스스로 결정할 수 있게끔 한다.

> 데이터를 **prefetched data** 로 취급하려면 `prefetchQuery` 또는 `fetchQuery API` 를 사용하여 미리 캐시를 채우는 것이 좋다.
> 
> 이렇게하면 `initialData` 와 독립적으로 `staleTime` 을 구성 할 수 있다.

## [Initial Data Function](https://react-query.tanstack.com/guides/initial-query-data#initial-data-function)

쿼리의 초기 데이터에 접근하는 프로세스가 집중적이거나 모든 렌더링에서 수행할 필요가 없는 경우 함수를 `initialData` 값으로 전달 할 수 있다.

이 함수는 쿼리가 초기화 될 때 한번만 실행되므로 메모리 및 CPU 를 절약할 수 있다.

```jsx
function Todos() {
   const result = useQuery('todos', () => fetch('/todos'), {
     initialData: () => {
       return getExpensiveTodos()
     },
   })
 }
```

## [Initial Data from Cache](https://react-query.tanstack.com/guides/initial-query-data#initial-data-from-cache)

경우에 따라 다른 쿼리의 캐시된 결과에서 쿼리 초기 데이터를 제공할 수 있다.

이에 대한 좋은 예는 `목록 (todos)` 쿼리에서 캐시된 데이터를 검색해서 `개별 할 일 (todo)` 쿼리의 초기데이터로 사용하는 것이다.

```jsx
function Todo({ todoId }) {
   const result = useQuery(['todo', todoId], () => fetch('/todos'), {
     initialData: () => {
       // Use a todo from the 'todos' query as the initial data for this todo query
       return queryClient.getQueryData('todos')?.find(d => d.id === todoId)
     },
   })
 }
```

## [Initial Data from the cache with `initialDataUpdatedAt`](https://react-query.tanstack.com/guides/initial-query-data#initial-data-from-the-cache-with-initialdataupdatedat)

캐시에서 초기 데이터를 가져오는 것은 초기 데이터를 조회하는 데 사용하는 쿼리가 오래되었지만 `initialData` 라는 것을 의미한다.

`staleTime` 을 사용하여 쿼리가 즉시 다시 가져오지 않도록 하는 대신 원본 쿼리의 `dataUpdatedAt` 을 `initialDataUpdatedAt` 에 전달하는 것이 좋다.

이렇게 하면 제공되는 초기 데이터에 상관없이 쿼리를 다시 가져와야하는지 여부와 그 시기를 결정하는 데 필요한 모든 정보가 쿼리 인스턴스에 제공되기 때문이다.

```jsx
function Todo({ todoId }) {
   const result = useQuery(['todo', todoId], () => fetch(`/todos/${todoId}`), {
     initialData: () =>
       queryClient.getQueryData('todos')?.find(d => d.id === todoId),
     initialDataUpdatedAt: () =>
       queryClient.getQueryState('todos')?.dataUpdatedAt,
   })
 }
```

## [Conditional Initial Data from Cache](https://react-query.tanstack.com/guides/initial-query-data#conditional-initial-data-from-cache)

초기 데이터를 조회하는 데 사용하는 쿼리가 오래된 경우 캐시된 데이터를 사용하지 않고 서버에서 가져오면 된다.

`queryClient.getQueryState` 메소드를 사용하여 쿼리에 대한 추가 정보를 얻을 수 있는데,

여기엔 `state.dataUpdatedAt` 타임 스탬프가 포함되어 있어 쿼리가 최신 상태인지 결정 하는데 도움을 준다.

```jsx
function Todo({ todoId }) {
   const result = useQuery(['todo', todoId], () => fetch(`/todos/${todoId}`), {
     initialData: () => {
       // Get the query state
       const state = queryClient.getQueryState('todos')
 
       // If the query exists and has data that is no older than 10 seconds...
       if (state && Date.now() - state.dataUpdatedAt <= 10 * 1000) {
         // return the individual todo
         return state.data.find(d => d.id === todoId)
       }
 
       // Otherwise, return undefined and let it fetch from a hard loading state!
     },
   })
 }
```
