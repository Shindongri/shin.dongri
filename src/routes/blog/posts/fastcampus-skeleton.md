---
title: 「패스트캠퍼스：가장 보통의 UI」 - Skeleton
date: "2021-07-20T00:00:00.000Z"
---

Skeleton Component

<!-- more -->

## 스켈레톤 컴포넌트란 ? ☠️ 

웹에서 페이지 로드 시간이 짧은 것처럼 보이게 하는 몇 가지 방법들이 있다.

스켈레톤 컴포넌트는 그 방법 중에 하나로서 데이터가 로드되기 전에 콘텐츠의 placeholder 를 표시해서 **유저가 기다리는 시간을 덜 지루하게 느끼게끔 하는 UI** 이다.

---

## 스켈레톤 컴포넌트 장/단점 ✨

- 장점 (Pros)

아래의 표는 80명의 참가자들을 대상으로 Skeleton, Spinner, Blank 를 테스트 했을 때 **지각된 로딩 시간** 을 보여준다.

결과적으로 빈 페이지를 보여주는 것보다는 Spinner 나 Skeleton 으로 로딩 상태를 표시해주는 것이 더 빠르다고 느끼게 되고 상대적으로 Spinner 보다 Skeleton 을 사용할 때 더 빠르다고 느끼게 된다.

![](https://miro.medium.com/max/700/0*MCO0MiWury2CfeVP.jpg)

- 단점 (Cons)

아무래도 스켈레톤 컴포넌트를 화면마다 표시해야 되기 때문에 상대적으로 시간, 비용이 많이 든다.

---

## 스켈레톤 컴포넌트 사용 예시 👀

<br />

- #### Facebook

![](https://miro.medium.com/max/700/0*9uxZA3XMHNjJsLT5.png)

<small>페이스북 뉴스피드, 2018</small>

<br />

- #### Linkedin

![](https://miro.medium.com/max/700/0*s7uxK77a0FY43NLe.png)

<small>링크드인 홈 화면, 2018</small>

<br />

- #### Google Drive 

![](https://miro.medium.com/max/700/0*Z47w4-DkaWPY92HO.png)

<small>구글 드라이브 부분 로드된 상태, 2018</small>

<br />

- #### YouTube

![](https://miro.medium.com/max/700/0*ABjKedHjIe8El9RJ.png)

<small>유투브 홈 화면, 2018</small>

<br />

---

## 더 나은 경험을 위한 스켈레톤 컴포넌트 규칙 💡

- **스켈레톤 컴포넌트는 콘텐츠의 로드를 방해하면 안된다.** 당연한 이야기지만 실제 콘텐츠는 데이터를 사용할 수 있는 시점이 되면 즉시 스켈레톤을 대체해야 한다.

- 스켈레톤을 디자인할 때 애니메이션을 사용하는 것이 좋다. 애니메이션은 wave, pulse 중 **wave 를 사용하는 것이 로딩 시간을 더 짧게 느끼게끔 한다.**

- **느리고 안정적인 애니메이션을 사용하는 것이 로딩 시간을 더 짧게 느끼게끔 한다.**

---

## 구현하기 👨🏻‍💻
 
<br />

<iframe src="https://codesandbox.io/embed/brave-payne-n4cir?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="brave-payne-n4cir" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

- `width`, `height` 을 prop 으로 제공할 수 있다. width, height 가 하나라도 포함되면 `display: block;` 을 선언한다.
- `circle` 을 prop 으로 제공하여 `circle = true` 이면 `border-radius: 50%;` 을 선언하여 원형 요소로 표시한다.
- `wave` 애니메이션을 적용한다.
- `count` 을 prop 으로 제공하여 표시할 글자 숫자를 지정할 수 있다.
- 로딩이 끝나면 바로 콘텐츠를 표시한다.

## 참고 📃

- https://betterprogramming.pub/build-a-skeleton-component-in-react-for-better-ux-b1dca9d783e6
- https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a
- https://juneuprising.medium.com/designing-for-the-appearance-of-speed-aaabc7f568c2
