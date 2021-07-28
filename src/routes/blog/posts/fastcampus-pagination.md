---
title: 「패스트캠퍼스：가장 보통의 UI」 - Pagination
date: "2021-07-21T00:00:00.000Z"
---

Pagination Component

<!-- more -->

## 페이지네이션(Pagination) 컴포넌트란 ? ◁ ▷

![](https://i0.wp.com/blog.fossasia.org/wp-content/uploads/2019/08/image6.png?w=1429&ssl=1)

API 를 통해서 많은 양의 데이터를 가져와 화면에 렌더링해야 하는 경우 성능 문제를 야기할 수 있다.

이 때 성능을 최적화하기 위한 다양한 방법 중 전통적인 방법으로 **페이지네이션(Pagination)** 이 있다.

페이지네이션은 데이터의 크기를 미리 알고 있고, 데이터의 추가나 삭제가 자주 일어나지 않을 때 유용하다.

---

## Good Practices 👍🏻👍🏼👍🏽👍🏾👍🏿

- 클릭 가능 요소의 크기를 크게 제공한다.
- 현재 페이지를 표시한다.
- '이전' 과 '다음' 페이지 링크를 제공한다.
- 페이지 링크 컴포넌트 간 간격을 넓힌다.

---


## Use Cases 🚸

- `이전`, `다음` 버튼을 눌러서 이전, 다음 페이지로 이동한다.
- 특정 페이지 버튼을 눌러서 특정 페이지로 이동한다.
- `처음`, `마지막` 버튼을 눌러서 처음, 마지막 페이지로 이동한다.
- 한 번에 표시하는 페이지 갯수가 제한된다 (표시하지 않는 페이지는 `ellipsis` 로 표기한다)
- 한 번에 표시하는 항목의 갯수가 고정된다.

---

## 구현하기 👨🏻‍💻

<br />

<iframe src="https://codesandbox.io/embed/purple-cookies-8f93i?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="purple-cookies-8f93i" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

- 한 번에 표시하는 페이지 갯수를 제한하기 위해 `siblingCount`, `boundaryCount` 를 prop 으로 전달한다.
    - `siblingCount` : 현재 페이지를 기준으로 앞, 뒤로 표시되는 페이지의 갯수. 예를 들어, siblingCount = 2, 현재 페이지가 23 이라면 1 ... 21 22 **23** 24 25 ... 999 로 표시된다.
    - `boundaryCount` : 처음과 끝에 항상 표시되는 페이지의 갯수. 예를 들어, boundaryCount = 4 이면 1 2 3 4 ... 22 **23** 24 ... 996 997 998 999 로 표시된다.
- API 응답으로 받은 총 페이지 갯수를 prop 으로 전달받아 페이지를 표시한다. 혹시, 총 페이지 갯수가 제공되지 않으면 `Math.floor(pageSize / totalItems)` 로 계산한다.
- `처음`, `마지막`, `이전`, `다음`, `특정` 페이지를 파라미터로 전달해서 현재 페이지를 갱신한다.

---

## 참고 📃

- https://blog.fossasia.org/implementing-pagination-with-retrofit-in-eventyay-attendee/
- https://www.smashingmagazine.com/2007/11/pagination-gallery-examples-and-good-practices/
- https://gist.github.com/mislav/622561
