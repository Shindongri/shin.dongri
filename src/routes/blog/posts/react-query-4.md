---
title: 「React Query」 04. Parallel Queries & Dependent Queries

date: "2021-06-29T01:00:00.000Z"
---

Parallel Queries & Dependent Queries

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

# Parallel Queries

병렬 쿼리는 동시성을 최대화하기 위해 병렬로 실행 되거나 동시에 실행되는 쿼리이다.

## [수동 병렬 쿼리](https://react-query.tanstack.com/guides/parallel-queries#manual-parallel-queries)

`useQuery` 와 `useInfiniteQuery`를 나란히 선언하면 자동으로 병렬로 쿼리가 실행된다.

```
 function App () {
   // The following queries will execute in parallel
   const usersQuery = useQuery('users', fetchUsers)
   const teamsQuery = useQuery('teams', fetchTeams)
   const projectsQuery = useQuery('projects', fetchProjects)
   ...
 }
```

> 서스펜스 모드에서 리액트 쿼리를 사용할 때 첫번째 쿼리가 내부적으로 프로미스를 던지고 다른 쿼리가 실행되기 전에 컴포넌트를 일시 중단하기 때문에 이러한 병렬 처리 패턴이 동작하지 않는다.
>
> 이 문제를 해결하려면 `useQueries`를 사용(추천)하거나 각 `useQuery` 인스턴스에 대해 별도의 구성을 해야한다.

## [**useQueries** 를 사용하여 동적으로 병렬 쿼리 구성하기](https://react-query.tanstack.com/guides/parallel-queries#dynamic-parallel-queries-with-usequeries)

실행해야 하는 쿼리의 수가 렌더링에서 렌더링으로 변경되는 경우 [react hooks 의 규칙](https://ru.react.js.org/docs/hooks-overview.html#%EF%B8%8F-rules-of-hooks) 을 위반하므로 수동으로 병렬 쿼리를 선언할 수 없다.

대신 React Query는 `useQueries`라는 훅을 제공해서 동적으로 병렬 쿼리를 구성하여 실행할 수 있다.

```
function App({ users }) {
   const userQueries = useQueries(
     users.map(user => {
       return {
         queryKey: ['user', user.id],
         queryFn: () => fetchUserById(user.id),
       }
     })
   )
 } 
```

# Dependent Queries

종속(또는 직렬) 쿼리는 이전 쿼리의 실행이 마무리되어야 실행 될 수 있다.

이 같은 처리를 하려면 아래와 같이 `enabled` 옵션으로 쿼리가 실행될 준비가 되었을 때를 알리면 된다.

```
 // Get the user
 const { data: user } = useQuery(['user', email], getUserByEmail)
 
 const userId = user?.id
 
 // Then get the user's projects
 const { isIdle, data: projects } = useQuery(
   ['projects', userId],
   getProjectsByUser,
   {
     // The query will not execute until the userId exists
     enabled: !!userId,
   }
 )
 
 // isIdle will be `true` until `enabled` is true and the query begins to fetch.
 // It will then go to the `isLoading` stage and hopefully the `isSuccess` stage :) 
```
