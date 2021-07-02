---
title: 「React Query」 10. Infinite Queries

date: "2021-06-30T04:00:00.000Z"
---

Infinite Queries

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

무한 스크롤을 구현하여 기본 데이터셋에 추가 데이터를 append 하는 형태의 UI 패턴은 매우 일반적이다.

React Query는 이러한 유형의 목록을 쿼리하기 위해 `useInfiniteQuery`를 지원한다.

`useInfiniteQuery`를 사용할 때, 몇 가지 다른 점은 아래와 같다.

- `data` 는 무한 쿼리 데이터를 포함하는 객체이다.
- `data.pages` 배열은 가져오는 페이지들을 포함한다.
- `data.pageParams` 배열은 페이지를 가져오는데 사용하는 페이지 파라미터를 포함한다.
- `fetchNextPage`, `fetchPreviousPage` 함수를 사용할 수 있다.
- `getNextPageParam`, `getPreviousPageParam` 옵션은 가져올 수 있는 데이터가 있을 경우 사용 가능하다. 이 정보는 쿼리 함수의 추가 파라미터로 제공된다. 
  (`fetchNextPage`, `fetchPreviousPage` 함수를 호출할 때 선택적으로 재정의 할 수 있다.)
- `hasNextPage` 를 사용할 수 있고 `getNextPageParam`의 반환값이 `undefined` 아니면 `true`이다.
- `isFetchingNextPage`, `isFetchingPreviousPage`을 사용하여 백그라운드 새로 고침 상태와 추가 로딩 상태를 구분할 수 있다.

> 참고 : `initialData` 같은 옵션을 사용하거나 쿼리에서 선택하는 경우 데이터를 재구성할 때 `data.pages`, `data.pageParams` 속성이 여전히 포함되어 있는지 확인해야 한다.

> 그렇지 않으면 반드시 쿼리가 변경사항을 덮어쓴다 !

## [예제](https://react-query.tanstack.com/guides/infinite-queries#example)

커서 인덱스를 기반으로 한번에 3페이지를 가져오는 API가 있다고 가정하자.

```jsx
fetch('/api/projects?cursor=0')
// { data: [...], nextCursor: 3}
fetch('/api/projects?cursor=3')
// { data: [...], nextCursor: 6}
fetch('/api/projects?cursor=6')
// { data: [...], nextCursor: 9}
fetch('/api/projects?cursor=9')
// { data: [...] }
```

이 정보를 가지고, 우리는 Load more UI를 만들 수 있다.

- `useInfiniteQuery` 가 기본적으로 첫번째 그룹핑된 데이터를 요청하기를 기다리는 중
- `getNextPageParam` 에서 다음 쿼리에 대한 정보 리턴
- `fetchNextPage` 함수 호출

> 참고 : 인수가 `getNextPageParam` 함수에서 반환 된 `pageParam` 데이터를 재정의하지 않는 이상 인수로 `fetchNextPage` 를 호출하면 안된다.

> 예시 ) `<button onClick = {fetchNextPage} />` 는 onClick 이벤트를 `fetchNextPage` 함수로 보낸다.

```jsx
import { useInfiniteQuery } from 'react-query'
 
 function Projects() {
   const fetchProjects = ({ pageParam = 0 }) =>
     fetch('/api/projects?cursor=' + pageParam)
 
   const {
     data,
     error,
     fetchNextPage,
     hasNextPage,
     isFetching,
     isFetchingNextPage,
     status,
   } = useInfiniteQuery('projects', fetchProjects, {
     getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
   })
 
   return status === 'loading' ? (
     <p>Loading...</p>
   ) : status === 'error' ? (
     <p>Error: {error.message}</p>
   ) : (
     <>
       {data.pages.map((group, i) => (
         <React.Fragment key={i}>
           {group.projects.map(project => (
             <p key={project.id}>{project.name}</p>
           ))}
         </React.Fragment>
       ))}
       <div>
         <button
           onClick={() => fetchNextPage()}
           disabled={!hasNextPage || isFetchingNextPage}
         >
           {isFetchingNextPage
             ? 'Loading more...'
             : hasNextPage
             ? 'Load More'
             : 'Nothing more to load'}
         </button>
       </div>
       <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
     </>
   )
 }
```

## [무한 쿼리를 다시 가져와야 할 땐 어떻게 해야할까 ?](https://react-query.tanstack.com/guides/infinite-queries#what-happens-when-an-infinite-query-needs-to-be-refetched)

무한 쿼리가 오래된(stale) 상태가 되서 다시 가져와야 하는 경우 처음부터 `순차적으로` 다시 가져온다.

이렇게하면 기본 데이터가 변경되더라도 오래된(stale) 커서를 사용하지 않고, 잠재적으로 데이터가 중복되거나 건너뛸 일이 생기지 않는다.

무한 쿼리의 결과가 `queryCache`에서 제거되면 페이지네이션은 처음부터 다시 시작된다.

## [쿼리 함수에 커스텀 정보를 전달하려면 어떻게 해야할까 ?](https://react-query.tanstack.com/guides/infinite-queries#what-if-i-need-to-pass-custom-information-to-my-query-function)

기본적으로 `getNextPageParam` 에서 반환된 변수가 쿼리 함수에 제공되지만, 때에 따라서 이를 재정의할 수 있다.

`fetchNextPage` 함수에 커스텀 변수를 전달할 수 있으며 이는 기본 변수를 재정의한다.

```jsx
function Projects() {
   const fetchProjects = ({ pageParam = 0 }) =>
     fetch('/api/projects?cursor=' + pageParam)
 
   const {
     status,
     data,
     isFetching,
     isFetchingNextPage,
     fetchNextPage,
     hasNextPage,
   } = useInfiniteQuery('projects', fetchProjects, {
     getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
   })
 
   // Pass your own page param
   const skipToCursor50 = () => fetchNextPage({ pageParam: 50 })
 }
```

##[양방향 무한 스크롤을 구현하려면 어떻게 해야할까 ?](What if I want to implement a bi-directional infinite list)

양방향 리스트는 `getPreviousPageParam`, `fetchPreviousPage`, `hasPreviousPage` 및 `isFetchingPreviousPage` 속성 및 함수를 사용하여 구현할 수 있다.

```jsx
useInfiniteQuery('projects', fetchProjects, {
   getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
   getPreviousPageParam: (firstPage, pages) => firstPage.prevCursor,
 })
```

##[페이지를 역순으로 보려면 어떻게 해야할까 ?](https://react-query.tanstack.com/guides/infinite-queries#what-if-i-want-to-show-the-pages-in-reversed-order)

페이지를 역순으로 보길 원한다면 `page` 옵션을 사용할 수 있다.

```jsx
useInfiniteQuery('projects', fetchProjects, {
   select: data => ({
     pages: [...data.pages].reverse(),
     pageParams: [...data.pageParams].reverse(),
   }),
 })
```

##[무한 쿼리를 수동으로 업데이트 하려면 어떻게 해야할까 ?](https://react-query.tanstack.com/guides/infinite-queries#what-if-i-want-to-manually-update-the-infinite-query)

- 수동으로 첫 페이지 제거 :

```jsx
queryClient.setQueryData('projects', data => ({
   pages: data.pages.slice(1),
   pageParams: data.pageParams.slice(1),
 }))
```

- 특정 페이지 제거 : 

```jsx
const newPagesArray = oldPagesArray?.pages.map((page) =>
   page.filter((val) => val.id !== updatedId)
 ) ?? []
 
 queryClient.setQueryData('projects', data => ({
   pages: newPagesArray,
   pageParams: data.pageParams,
 }))
```
