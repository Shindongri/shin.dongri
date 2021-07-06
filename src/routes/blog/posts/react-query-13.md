---
title: 「React Query」 13. Prefetching

date: "2021-07-06T00:00:00.000Z"
---

Prefetching

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

사용자들이 필요한 데이터를 그들이 필요하기 전에 미리 가져올 수 있다.

이 경우 `prefetchQuery` 메소드를 사용하여 캐시에 배치할 쿼리 결과를 prefetch 할 수 있다.

```jsx
const prefetchTodos = async () => {
   // The results of this query will be cached like a normal query
   await queryClient.prefetchQuery('todos', fetchTodos)
 }
```

- 이 쿼리에 대한 데이터가 이미 캐시에 있고 **무효화되지 않은 경우** 데이터를 가져 오지 않는다.
- 예를 들어 `staleTime` 이 전달 된 경우. `prefetchQuery ( 'todos', fn, {staleTime : 5000})` 데이터가 지정된 쿼리 보다 오래된 경우 쿼리를 가져온다.
- prefetch 된 쿼리에 대해 `useQuery` 인스턴스가 없으면 `cacheTime` 에 지정된 시간 후에 삭제되고 가비지 콜렉팅 된다.
