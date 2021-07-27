---
title: React Query：Important Defaults
date: "2021-06-27T00:00:00.000Z"
---

Important Defaults

<!-- more -->

![](https://github.com/tannerlinsley/react-query/raw/master/media/repo-dark.png)

- `useQuery`, `useInfiniteQuery`를 통한 쿼리 인스턴스는 기본적으로 캐시된 데이터를 오래된 데이터로 간주한다.

> 이 동작을 변경하려면 **`staleTime`** 옵션을 변경하여 글로벌 또는 각 쿼리 당 데이터를 refetch 하는 시간 간격을 조정할 수 있다.

- 오래된 쿼리는 다음과 같은 경우 백그라운드에서 자동으로 다시 가져온다.
    - 쿼리의 새 인스턴스가 마운트될 때
    - window 가 다시 포커스될 때
    - 네트워크가 다시 연결될 때
    - 쿼리의 refetch interval이 설정되어 있을 때

> `refetchOnMount`, `refetchOnWindowFocus`, `refetchOnReconnect`, `refetchInterval`의 옵션들을 사용하여 위 기능들의 인터벌을 설정할 수 있다.

- `useQuery`, `useInfiniteQuery`, `query observer`의 활성된 인스턴스가 더이상 없을 경우 `inactive`로 지정되고 나중에 다시 사용할 경우를 대비하여 캐시에 남아 있다.

- 기본적으로 `inactive` 쿼리는 **5분 뒤**에 가비지 콜렉팅 된다.

> 쿼리의 기본 `cacheTime`을 `1000 * 60 * 5` ms가 아닌 다른 값으로 변경할 수 있다.

- 실패한 쿼리를 캡처하여 UI에 에러를 표시하기 전에 **3회** 자동으로 retry 한다.

> 이를 변경하려면 쿼리에 대한 `retry` 및 `retryDelay` 옵션을 다른 값으로 설정해주면 된다.

- 기본적으로 쿼리 결과는 데이터가 실제로 변경되었는지 감지하기 위해 공유되며,
  변경되지 않은 경우 데이터 참조가 변경되지 않은 상태로 유지된다.
  
> **JSON과 호환되지 않는 값만 동작하며, 다른 유형은 항상 변경된 것으로 간주된다.** 

> 예를 들어, 쿼리 응답이 너무 무거워서 성능 문제를 야기할 경우
> **`config.structuralSharing`** 플래그를 사용하여 이 기능을 사용하지 않도록 설정할 수 있다. 

> 쿼리 응답이 JSON과 호환되지 않는데도
> 데이터가 변경되었는지 여부를 확인하려는 경우엔 **`config.isDataEqual`** 을 사용하여 데이터 비교 기능을 커스텀 할 수 있다.
