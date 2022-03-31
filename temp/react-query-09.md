---
title: React Query：Paginated / Lagged Queries

date: "2021-06-30T03:00:00.000Z"
---

Paginated / Lagged Queries

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

페이징 처리된 데이터를 렌더링하는 것은 매우 일반적인 UI 패턴이며 React Query에서는 쿼리 키에 페이지 정보를 포함해서 동작한다.

```jsx
const result = useQuery(['projects', page], fetchProjects)
```

그러나 이 간단한 예제를 실행하면 이상한 점을 눈치챌 수 있다.

**UI는 각각 새 페이지가 완전히 새로운 쿼리처럼 취급되기 때문에 `success`, `loading` 상태가 된다.**

이 경험은 최적화되지 않아 많은 작업이 요구한다. 하지만 이 이 문제를 해결하기 위해 React Query엔 `keepPreviousData`라는 기능이 있다.

## [`keepPreviousData`로 더 나은 페이징 처리하기](https://react-query.tanstack.com/guides/paginated-queries#better-paginated-queries-with-keeppreviousdata)

`pageIndex(or cursor)`를 증가시키는 다음 예제를 고려하면 된다.

useQuery를 사용하는 경우 **기술적으로는 잘 동작하지만** 각 페이지 또는 커서에 서로 다른 쿼리가 생성 및 삭제되면서 UI가 `success` 또는 `loading` 상태에서 벗어날 수 있다.

`keepPreviousData`를 `true`로 설정하면 몇 가지 새로운 사항을 얻을 수 있다.

- **쿼리 키가 변경된 경우에도 새 데이터를 요청하는 동안 마지막으로 성공한 요청의 데이터를 사용할 수 있다.**
- 새로운 데이터를 받으면 이전 데이터가 교체된다.
- `isPreviousData`는 쿼리가 현재 제공하는 데이터를 파악할 수 있게끔 한다.

```jsx
function Todos() {
   const [page, setPage] = React.useState(0)
 
   const fetchProjects = (page = 0) => fetch('/api/projects?page=' + page).then((res) => res.json())
 
   const {
     isLoading,
     isError,
     error,
     data,
     isFetching,
     isPreviousData,
   } = useQuery(['projects', page], () => fetchProjects(page), { keepPreviousData : true })
 
   return (
     <div>
       {isLoading ? (
         <div>Loading...</div>
       ) : isError ? (
         <div>Error: {error.message}</div>
       ) : (
         <div>
           {data.projects.map(project => (
             <p key={project.id}>{project.name}</p>
           ))}
         </div>
       )}
       <span>Current Page: {page + 1}</span>
       <button
         onClick={() => setPage(old => Math.max(old - 1, 0))}
         disabled={page === 0}
       >
         Previous Page
       </button>{' '}
       <button
         onClick={() => {
           if (!isPreviousData && data.hasMore) {
             setPage(old => old + 1)
           }
         }}
         // Disable the Next Page button until we know a next page is available
         disabled={isPreviousData || !data?.hasMore}
       >
         Next Page
       </button>
       {isFetching ? <span> Loading...</span> : null}{' '}
     </div>
   )
 }
```

## [`keepPreviousData`로 `useInfiniteQuery`결과 지연시키기](https://react-query.tanstack.com/guides/paginated-queries#lagging-infinite-query-results-with-keeppreviousdata)

흔하진 않지만 `keepPreviousData` 옵션은 `useInfiniteQuery` 훅과도 동작한다. 

따라서 무한 쿼리 키가 변경되는 동안 사용자가 캐시된 데이터를 계속 볼 수 있도록 한다.
