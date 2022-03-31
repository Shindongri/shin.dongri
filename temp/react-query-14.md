---
title: React Query：Mutations

date: "2021-07-07T00:00:00.000Z"
---

Mutations

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

쿼리와 달리 뮤테이션은 데이터 CUD 에 사용된다. 이 목적으로 리액트 쿼리는 `useMutation` 훅을 제공한다.

```jsx
 function App() {
   const mutation = useMutation(newTodo => axios.post('/todos', newTodo))
 
   return (
     <div>
       {mutation.isLoading ? (
         'Adding todo...'
       ) : (
         <>
           {mutation.isError ? (
             <div>An error occurred: {mutation.error.message}</div>
           ) : null}
 
           {mutation.isSuccess ? <div>Todo added!</div> : null}
 
           <button
             onClick={() => {
               mutation.mutate({ id: new Date(), title: 'Do Laundry' })
             }}
           >
             Create Todo
           </button>
         </>
       )}
     </div>
   )
 }
```

뮤테이션은 아래의 상태 중 하나를 가지게 된다.

- `isIdle` / `status === 'idle'`
- `isLoading` / `status === 'loading'`
- `isError` / `status === 'error'`
- `isSuccess` / `status === 'success'`

이러한 기본 상태 외에도 뮤테이션 상태에 따라 더 많은 정보들을 사용할 수 있다.

- `error` - 뮤테이션이 `isError` 상태 일 경우, `error` 프로퍼티 사용 가능
- `data` - 뮤테이션이 `success` 상태 일 경우, `data` 프로퍼티 사용 가능

위의 예제를 보면 **단일 변수나 객체 형태로** `mutate` 함수에 전달될 수 있다.

특별해 보이지 않을 수 있지만, `onSuccess` 옵션이 사용될 때, 쿼리 클라이언트의 `invalidateQueries`, `setQueryData` 같은 메소드는 뮤테이션을 강력한 도구로 만든다.

> 중요 : mutate 함수는 비동기 함수이므로 React 16 이전 버전에서는 사용할 수 없다. `onSubmit` 에서 이벤트에 접근할 때 mutate 를 다른 함수로 래핑해야 한다. ([React 이벤트 풀링 때문](https://reactjs.org/docs/legacy-event-pooling.html))

```jsx
 // This will not work in React 16 and earlier
 const CreateTodo = () => {
   const mutation = useMutation(event => {
     event.preventDefault()
     return fetch('/api', new FormData(event.target))
   })
 
   return <form onSubmit={mutation.mutate}>...</form>
 }
 
 // This will work
 const CreateTodo = () => {
   const mutation = useMutation(formData => {
     return fetch('/api', formData)
   })
   const onSubmit = event => {
     event.preventDefault()
     mutation.mutate(new FormData(event.target))
   }
 
   return <form onSubmit={onSubmit}>...</form>
 }
```

## [상태 재설정](https://react-query.tanstack.com/guides/mutations#resetting-mutation-state)

뮤테이션 요청에 대한 `error`, `data` 를 초기화할 필요가 생길 땐 `reset` 함수를 사용한다.

```jsx
 const CreateTodo = () => {
   const [title, setTitle] = useState('')
   const mutation = useMutation(createTodo)
 
   const onCreateTodo = e => {
     e.preventDefault()
     mutation.mutate({ title })
   }
 
   return (
     <form onSubmit={onCreateTodo}>
       {mutation.error && (
         <h5 onClick={() => mutation.reset()}>{mutation.error}</h5>
       )}
       <input
         type="text"
         value={title}
         onChange={e => setTitle(e.target.value)}
       />
       <br />
       <button type="submit">Create Todo</button>
     </form>
   )
 }
```

## [사이드 이펙트](https://react-query.tanstack.com/guides/mutations#mutation-side-effects)

`useMutation` 은 뮤테이션 라이프 사이클에서 쉽고 빠르게 사이드 이펙트를 수행할 수 있게끔 몇 가지 헬퍼 옵션을 갖는다.

```jsx
useMutation(addTodo, {
   onMutate: variables => {
     // A mutation is about to happen!
 
     // Optionally return a context containing data to use when for example rolling back
     return { id: 1 }
   },
   onError: (error, variables, context) => {
     // An error happened!
     console.log(`rolling back optimistic update with id ${context.id}`)
   },
   onSuccess: (data, variables, context) => {
     // Boom baby!
   },
   onSettled: (data, error, variables, context) => {
     // Error or success... doesn't matter!
   },
 })
```

콜백함수에서 프로미스를 반환 할 때 다음 콜백이 호출되기 전까지 먼저 대기한다.

```jsx
useMutation(addTodo, {
   onSuccess: async () => {
     console.log("I'm first!")
   },
   onSettled: async () => {
     console.log("I'm second!")
   },
 })
```

`mutate` 를 호출할 때 `useMutation` 에 **정의된 것 이외의 추가 콜백을 호출** 할 수 있다.

주로 특정 컴포넌트에서 사이드 이펙트를 트리거할 때 사용된다.

이를 위해, 동일한 콜백 옵션을 `mutate` 함수에 제공 할 수 있다.

> 주의 : 뮤테이션이 완료되기 전에 컴포넌트가 언마운트되면 이러한 추가 콜백이 실행되지 않는다.

```jsx
seMutation(addTodo, {
   onSuccess: (data, variables, context) => {
     // I will fire first
   },
   onError: (error, variables, context) => {
     // I will fire first
   },
   onSettled: (data, error, variables, context) => {
     // I will fire first
   },
 })
 
 mutate(todo, {
   onSuccess: (data, variables, context) => {
     // I will fire second!
   },
   onError: (error, variables, context) => {
     // I will fire second!
   },
   onSettled: (data, error, variables, context) => {
     // I will fire second!
   },
 })
```
