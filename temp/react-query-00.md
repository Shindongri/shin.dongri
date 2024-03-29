---
title: React Query：Overview
date: "2021-06-26T00:00:00.000Z"
---

React Query 개요

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

## React Query 란 ?

[React Query](https://react-query.tanstack.com/) 는 리액트 어플리케이션에서 **서버 상태를 가져오고(fetching), 캐싱하고(caching), 동기화하고(synchronizing), 업데이트(updating) 하는 작업** 을 한다.

<hr/>

## [Motivation](https://react-query.tanstack.com/overview#motivation)

기본적으로 리액트 어플리케이션에서는 서버로부터 데이터를 가져오거나 업데이트하는 방법을 제공하지 않는다. 

때문에 개발자는 이 방법을 자체적으로 구축해야 하는데 일반적으로는 react hooks 를 사용하여 컴포넌트 state 및 effect 를 조합하거나 글로벌 상태 머신을 사용하여 어플리케이션 전체의 비동기 처리를 다룬다.

대부분의 전통적인 상태 관리 라이브러리는 비동기처리나 서버 상태 작업 보다는 클라이언트 상태 관리에 적합한데

여기서 **서버 상태**란 아래의 특징을 갖게된다.

- 유저가 제어하지 못하는 위치에서 원격으로 유지된다.
- 비동기 APIs를 통해 서버 상태를 가져오거나 업데이트 한다.
- 소유권이 다른 사람과 공유된다.
- 주의하지 않으면 어플리케이션에서 잠재적으로 **out of date** 상태가 될 수 있다.

어플리케이션에서 서버 상태를 처리할 때 여러가지 문제가 마주하게 된다.

- **캐싱**
- 동일한 데이터를 요청하는 여러 요청을 단일 요청으로 **중복 제거(Deduping)**
- 백그라운드에서 **out of date** 된 데이터 갱신
- 데이터가 **out of date** 될 때를 파악
- 가능한 빠르게 데이터 업데이트를 반영
- 페이지네이션이나 lazy loading 데이터를 **최적화**
- 메모리 가비지 컬렉션을 운영
- 쿼리 결과를 **메모이제이션(Memoization)**

React Query는 서버 상태를 관리하기 위한 라이브러리로 위와 같은 문제를 다루는데 큰 도움을 준다.
