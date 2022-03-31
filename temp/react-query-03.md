---
title: React Query：Query Functions

date: "2021-06-29T00:00:00.000Z"
---

Query Functions

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

쿼리 함수는 문법적으로 **프로미스를 리턴하는 함수**이다.

때문에 아래의 예제는 모두 유효한 쿼리 함수 선언이라고 볼 수 있다.

```jsx
useQuery(['todos'], fetchAllTodos)
useQuery(['todos', todoId], () => fetchTodoById(todoId))
useQuery(['todos', todoId], async () => {
   const data = await fetchTodoById(todoId)
   return data
 })
useQuery(['todos', todoId], ({ queryKey }) => fetchTodoById(queryKey[1]))
```

## [에러 핸들링](https://react-query.tanstack.com/guides/query-functions#handling-and-throwing-errors)

쿼리 함수에서 에러가 발생한다면 쿼리 함수는 **반드시 예외를 던져야 한다.**

쿼리 함수에서 발생한 모든 에러는 쿼리의 `에러 상태`로 유지된다.

```jsx
const { error } = useQuery(['todos', todoId], async () => {
   if (somethingGoesWrong) {
     throw new Error('Oh no!')
   }
 
   return data
 })
```

## [기본적으로 예외를 던지지 않는 fetch 사용하기](https://react-query.tanstack.com/guides/query-functions#usage-with-fetch-and-other-clients-that-do-not-throw-by-default)

`axios` 또는 `graphql-request` 와 같은 대부분의 유틸리티는 실패한 HTTP 요청에 대해 자동으로 오류를 발생시킨다.

반면, fetch 와 같은 일부 유틸리티는 기본적으로 오류를 발생시키지 않는다.

이 경우 아래와 같이 스스로 에러를 던져야한다.

```jsx
useQuery(['todos', todoId], async () => {
   const response = await fetch('/todos/' + todoId)
   if (!response.ok) {
     throw new Error('Network response was not ok')
   }
   return response.json()
 })
```

## [쿼리 함수 변수](https://react-query.tanstack.com/guides/query-functions#query-function-variables)

[쿼리 키(Query Keys)](https://react-query.tanstack.com/guides/query-keys) 는 가져오는 데이터를 고유하게 식별하기 위한 것 뿐만 아니라 **필요한 경우 쿼리 함수를 추출 할 수 있다.**

```jsx
 function Todos({ status, page }) {
   const result = useQuery(['todos', { status, page }], fetchTodoList)
 }
 
 // Access the key, status and page variables in your query function!
 function fetchTodoList({ queryKey }) {
   const [_key, { status, page }] = queryKey
   return new Promise()
 }
 ```

## [파라미터 대신 쿼리 객체 사용](https://react-query.tanstack.com/guides/query-functions#using-a-query-object-instead-of-parameters)

`[queryKey, queryFn, config]` 가 React Query API 가 지원되는 모든 곳에서 같은 설정을 표현 할 수 있다.

```jsx
 import { useQuery } from 'react-query'
 
 useQuery({
   queryKey: ['todo', 7],
   queryFn: fetchTodo,
   ...config,
 })

```
