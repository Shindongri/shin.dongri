---
title: 「React Query」 11. Placeholder Query Data

date: "2021-07-02T00:00:00.000Z"
---

Placeholder Query Data

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

## [Placeholder data 란 ?](https://react-query.tanstack.com/guides/placeholder-query-data#what-is-placeholder-data)

Placeholder Query Data 를 사용하면 `initialData` 옵션과 유사하게 데이터가 이미 있는 것처럼 동작하지만 **데이터는 캐시에 유지되지 않는다.**

이는 실제 데이터를 백그라운드에서 가져오는 동안 쿼리를 성공적으로 렌더링하기에 충분한 데이터가 있거나 (혹은 더미 데이터)가 있는 상황에 유용하다.

> 예시 : 블로그의 특정 게시글을 조회하는 쿼리가 있다고 가정해보자. 
> 
> 이 게시물의 상위 목록에서 쿼리 결과의 일부(제목과 본문 내용의 일부)만 미리보기 데이터로 가져올 수 있다.
> 
> 이 데이터를 전체 쿼리 결과에 유지하고 싶지는 않지만 실제 쿼리가 전체 데이터를 조회하는 동안 빠르게 레이아웃을 표시하고 싶을 때 유용하게 사용할 수 있다.

Placeholder data 를 캐시 데이터로 제공하는 몇 가지 방법이 있다.

- 선언적 :
  - 쿼리에 `placeholderData`를 제공하여 비어있는 경우 캐시를 미리 채운다.
- 명령적 :
  - `queryClient` 및 `placeholderData` 옵션을 사용하여 데이터 `prefetch` 혹은 `fetch`

## [Placeholder data (값으로서)](https://react-query.tanstack.com/guides/placeholder-query-data#placeholder-data-as-a-value)

```jsx
 function Todos() {
   const result = useQuery('todos', () => fetch('/todos'), {
     placeholderData: placeholderTodos,
   })
 }
```

## [Placeholder data (함수로서)](https://react-query.tanstack.com/guides/placeholder-query-data#placeholder-data-as-a-function)

```jsx
 function Todos() {
   const placeholderData = useMemo(() => generateFakeTodos(), [])
   const result = useQuery('todos', () => fetch('/todos'), { placeholderData })
 }
```

쿼리의 placeholder data 에 접근하는 과정이 힘들거나 모든 렌더링에서 행해질 작업이 아닌 경우 값을 메모이제이션(memoization) 하거나 메모이제이션 된 함수를 `placeholderData` 값으로 전달할 수 있다.

## [Placeholder data (캐시)](https://react-query.tanstack.com/guides/placeholder-query-data#placeholder-data-from-cache)

경우에 따라 다른 쿼리의 캐시된 결과를 Placeholder data 로 제공할 수 있다.

이에 대한 아래의 예시는 블로그 목록 캐시 데이터(`blogPosts`)에서 게시물의 미리보기 버전을 검색해서 이 결과를 게시물 쿼리(`blogPost`)의 placeholderData 로 제공하는 것이다.

```jsx
function Todo({ blogPostId }) {
   const result = useQuery(['blogPost', blogPostId], () => fetch(`/blogPosts/${blogPostId}`), {
     placeholderData: () => {
       // Use the smaller/preview version of the blogPost from the 'blogPosts' query as the placeholder data for this blogPost query
       return queryClient
         .getQueryData('blogPosts')
         ?.find(d => d.id === blogPostId)
     },
   })
 }
```
