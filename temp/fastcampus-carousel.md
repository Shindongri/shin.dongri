---
title: 「패스트캠퍼스：가장 보통의 UI」 - Carousel
date: "2021-07-23T00:00:00.000Z"
---

Carousel Component

<!-- more -->

## Carousel 이란 ? 🦄

![](http://res.heraldm.com/content/image/2017/06/26/20170626000699_0.jpg)

[Carousel](https://en.wikipedia.org/wiki/Carousel?fbclid=IwAR3BUhpM4JBbcxiUKbqVEDFyRLoX0u6v9Jvcjc5zqddJQyKnsQMBP9BY6m8) 은 사전적 의미로 **회전목마** 를 뜻하고
웹에서는 슬라이드 형태로 순환하며 이미지, 영상 등의 콘텐츠를 노출하는 UI 를 의미한다.

---

## Good Practices 👍🏻👍🏼👍🏽👍🏾👍🏿

- `autoplay` 를 사용하지 않는다.
- 사용자가 직접 슬라이더를 컨트롤 하게끔 한다. 
> 대부분의 사용자들에게 캐러셀은 일반적인 UI 이고 이를 인터페이스하는데 이미 익숙해져 있다.
- 간결하고 명확한 카피를 작성한다.
- `h1` 태그를 복제하지 않는다.
> 페이지 상단 영역에 캐러셀을 사용하는 경우 슬라이드에 헤드라인(`h1` 태그)이 표시될 수 있다. 이는 좋지 않다. 
> 
> 검색 엔진이 `h1` 태그를 제목처럼 취급하기 때문에 슬라이드가 여럿일 경우 한 페이지의 여러개의 제목을 부여하는 것과 같기 때문이다.
- 캐러셀이 *[터치-친화적(Touch-Friendly)](https://brunch.co.kr/@monodream/42)* 인지 확인한다.
> 모바일에서 캐러셀을 보고 좌우의 작은 화살표 버튼을 누르는 것보다 좌우로 스와이프를 하여 콘텐츠를 넘기는 것은 너무나 익숙한 사용자 경험이다. 

---

## Use Cases 🚸

- n 초 간격으로 다음 배너로 이동한다. 
- 마지막 배너일 경우 다시 처음 배너로 이동한다.
- 배너 각각의 링크가 존재하여 클릭하면 해당 페이지로 이동한다.
- 하단에 indicator 가 배너 갯수만큼 존재하고 클릭하면 해당 배너로 이동한다.

---

## 구현하기 👨🏻‍💻

<br />

<iframe src="https://codesandbox.io/embed/mystifying-lichterman-ub826?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="mystifying-lichterman-ub826" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" ></iframe>

--- 

## 참고 📃

- https://webflow.com/blog/carousel-slider-design-best-practices
- https://brunch.co.kr/@monodream/42
