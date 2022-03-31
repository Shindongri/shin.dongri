---
title: 「패스트캠퍼스：가장 보통의 UI」 - Infinite Scroll by Scroll
date: "2021-07-24T00:00:00.000Z"
---

Infinite Scroll Component by Scroll

<!-- more -->

## 무한 스크롤이란 ? ∞

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F6xygt%2FbtqDw30ltgZ%2FLP336NHwG67eKNuxaHB9jk%2Fimg.gif)

API 를 통해서 많은 양의 데이터를 가져와 화면에 렌더링해야 할 때 이 때 성능을 최적화하기 위한 방법 중 전통적인 방법인 **[페이지네이션(Pagination)](https://shindongri.dev/blog/fastcampus-pagination)** 을 구현해본 적 있다.

모바일에서는 페이지네이션 방식을 사용하려려면 원하는 페이지로 이동을 하기 위해 숫자 버튼을 일일이 손으로 눌러야 하기 때문에 매우 불편하다. 

이 때, 사용할 수 있는게 **무한 스크롤** 이다.

사용자가 스크롤링을 하다가 미리 로드된 콘텐츠를 다 확인하면 다음 목록을 또 로드해서 별도의 인터랙션 없이 목록을 계속 불러오는 방식이다.

---

## 스크롤이 최하단에 왔는지 판단하기 📏

![](https://i.stack.imgur.com/Cl1IA.png)


- **Element.scrollHeight** : 요소의 총 높이를 나타내며, 바깥으로 넘쳐서 보이지 않는 콘텐츠도 포함
  
![](https://developer.mozilla.org/@api/deki/files/840/=ScrollHeight.png)

- **Element.clientHeight** : 요소의 내부 높이 (padding 포함. scroll bar 높이, margin, border 미포함)

![](https://t1.daumcdn.net/cfile/tistory/273E0D40554DADB32D)  

- **Element.scrollTop** : 스크롤바의 Top 부분이 화면에 내려온 위치

즉, `scrollHeight - clientHeight - scrollTop` 이 미리 정해놓은 `offset` 미만 일 때 
스크롤이 최하단에 왔다고 판단해서 다음 페이지를 fetch 해서 기존 항목들에 append 해주면 된다.

```jsx
  const handleScroll = throttle(500, () => {
    if (scrollRef.current) {
      const { scrollHeight, offsetHeight, scrollTop } = scrollRef.current;
      
      const offset = 50;
            
      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  });

  useEffect(() => {
    if (isScrollBottom) {
      pageRef.current = pageRef.current + 1;
    
      !isLast && fetch();
    }
  }, [isScrollBottom, isLast]);
```

---

## 스크롤 방식의 한계 😭️

스크롤을 움직일 때마다 이벤트가 발생하기 때문에 **성능 문제** 가 발생할 수 있다. 

이를 해결하기 위해 보통 스크롤 이벤트에 **throttling** 을 적용하여 이벤트를 제한한다.

---

## debounce & throttle ⏯

주로 DOM 이벤트를 기반으로 실행하는 자바스크립트를 성능상의 이유로 이벤트를 제한할 때 debounce 와 throttle 을 적용한다.

그럼 이 둘의 차이는 뭘까 ?

- **debounce** : 이벤트를 그룹핑해서 특정시간이 지난 후 하나의 이벤트만 발생하도록 하는 기술. 연달아 호출되는 함수들 중 마지막 함수만 호출하도록 하는 것.

![](https://i0.wp.com/css-tricks.com/wp-content/uploads/2016/04/debounce.png)  

- **throttle** : 이벤트를 일정한 주기마다 발생하는 기술. 마지막 함수가 호출된 후 일정 시간이 지나기 전엔 다시 호출되지 않도록 하는 것.

![](https://llu.is/wp-content/uploads/2020/07/debounce-demo-1.png)
  
---

## 구현하기 👨🏻‍💻

<br />

<iframe src="https://codesandbox.io/embed/proud-violet-qcych?fontsize=14&hidenavigation=1&theme=dark" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" title="infinite-scroll" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" ></iframe>

---

## 참고 📃

- https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively
- http://brianyang.com/infinite-scroll-techniques-in-react/
- https://css-tricks.com/debouncing-throttling-explained-examples/
- https://developer.mozilla.org/ko/docs/Web/API/Element/scrollHeight
