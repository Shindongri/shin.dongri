---
title: 「React Query」 02. Queries & Query Keys
date: "2021-06-28T00:00:00.000Z"
---

Queries & Query Keys

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

## [쿼리의 기본사항](https://react-query.tanstack.com/guides/queries#query-basics)

쿼리는 기본적으로 **고유한 키(unique key)** 로 구분되며, 프로미스 기반 메서드(GET, POST 등)로
서버에서 데이터를 가져올 수 있다.

서버의 데이터를 수정해야하는 경우는 [`Mutations`](https://react-query.tanstack.com/guides/mutations) 를 사용하는 것이 적절하다.

컴포넌트나 커스텀 훅에서 쿼리를 구독하려면 다음과 같이 `useQuery`를 호출해야 한다.

- 쿼리의 **고유한 키(unique key)** 를 가져야 한다.
- 다음과 같은 프로미스를 반환하는 함수
    - Promise.resolve()
    - 오류 발생 (Throws an error)

```
 import { useQuery } from 'react-query'
 
 function App() {
   const info = useQuery('todos', fetchTodoList)
 }
```

**고유한 키(unique key)** 는 어플리케이션 전체에서 쿼리를 다시 가져오고(refetching), 캐싱하고(caching), 공유하기(sharing) 위해 내부적으로 사용된다.

<hr />

`useQuery`에서 반환 된 **쿼리 결과(result)** 엔 템플릿 및 기타 데이터 사용에 필요한 모든 정보가 포함된다.

``` 
const result = useQuery('todos', fetchTodoList);
```

`result` 객체에는 생산성을 높이기 위해 알아야 할 몇 가지 중요한 상태가 포함되어 있다. 쿼리의 상태는 항상 아래의 상태들 중 하나가 된다.

- `isLoading` 또는 `status === 'loading'` - 데이터를 가져오는 중
- `isError` 또는 `status === 'error'` - 에러 발생
- `isSuccess` 또는 `status === 'success'` - 쿼링 성공
- `isIdel` 또는 `status === 'idle'` - 쿼링 불가능

<hr />

## 쿼리 키(Query Keys)

React Query는 쿼리의 **고유한 키(unique key)** 를 기반으로 쿼리 캐싱을 관리한다.

쿼리 키는 문자열이 될 수도 있고 문자 배열이 될 수도 있다.

### [쿼리 키 - 문자열](https://react-query.tanstack.com/guides/query-keys#string-only-query-keys)

가장 단순한 형태의 쿼리 키는 문자열이다. 쿼리 키로 문자열이 전달되면 문자열을 사용하여 내부적으로 배열로 변환한다.

```
// A list of todos
 useQuery('todos', ...) // queryKey === ['todos']
 
 // Something else, whatever!
 useQuery('somethingSpecial', ...) // queryKey === ['somethingSpecial']
```

<hr />

### [쿼리 키 - 문자 배열](https://react-query.tanstack.com/guides/query-keys#array-keys)

쿼리에서 고유한 데이터를 표현하기 위해 아래와 같은 경우 문자 배열로 키를 선언할 수 있다.

- 계층 혹은 중첩 구조의 자원
    - 항목을 고유하게 식별하기 위해 ID, index 또는 다른 요소를 전달하는 것이 일반적이다.
- 추가적인 파라미터가 있는 쿼리
    - 일반적으로 추가 옵션을 포함하는 객체를 전달한다.
    
``` 
 // An individual todo
 useQuery(['todo', 5], ...)
 // queryKey === ['todo', 5]
 
 // And individual todo in a "preview" format
 useQuery(['todo', 5, { preview: true }], ...)
 // queryKey === ['todo', 5, { preview: true }]
 
 // A list of todos that are "done"
 useQuery(['todos', { type: 'done' }], ...)
 // queryKey === ['todos', { type: 'done' }]

```

<hr />

### [쿼리 키는 해시된다](https://react-query.tanstack.com/guides/query-keys#query-keys-are-hashed-deterministically)

객체의 키 순서에 상관없이 아래의 쿼리는 모두 동일하게 간주 된다.

```
 useQuery(['todos', { status, page }], ...)
 useQuery(['todos', { page, status }], ...)
 useQuery(['todos', { page, status, other: undefined }], ...)
```

<hr />

### [쿼리 함수가 변수에 의존된다면 쿼리 키에 변수를 포함시켜야 한다](https://react-query.tanstack.com/guides/query-keys#if-your-query-function-depends-on-a-variable-include-it-in-your-query-key)

쿼리 키는 가져오는 데이터를 고유하게 설명하므로 **변경되는** 쿼리 함수에서 사용하는 모든 변수를 포함해야 한다.

```
function Todos({ todoId }) {
   const result = useQuery(['todos', todoId], () => fetchTodoById(todoId))
 }
```
