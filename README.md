# 원티드 프리온보딩 코스

###

## 🐯 What is it?

`front-end`에서 자주 사용하는 컴포넌트 중 다음의 6가지 항목들을 구현한 `custom component`입니다.

- Toggle
- Modal
- Tab
- Tag
- AutoComplete
- ClickToEdit

[👉🏻 프리온보딩 프론트엔드 코스 지원 바로가기](https://www.wanted.co.kr/wd/95459)

### <br/>

###

## 🐯 Component API

> ## Toggle

#### View

![toggle_view](https://user-images.githubusercontent.com/48751435/152809631-3d148c6a-c2a7-4fba-be6d-5d341d861f5f.gif)

#### Usage

```
import Toggle from "./Toggle";

function App() {
  return (
    <Toggle circleColor="pink"/>
  );
}
```

#### Props

|     Name      |      Type       | Default |                Description                |
| :-----------: | :-------------: | :-----: | :---------------------------------------: |
|  `onChange`   | function(value) |         | 옵션 또는 입력 값의 변경이 필요할 때 호출 |
|  `disabled`   |      bool       |  false  |             `Toggle` 비활성화             |
| `circleColor` |       str       |  #fff   |            `Toggle` 버튼 색상             |

### <br/>

> ### Modal

#### View

![modal_view](https://user-images.githubusercontent.com/48751435/152809716-11efffbf-6a1f-449a-a45a-994efc784711.gif)

#### Usage

```
import Modal from "./Modal";

function App() {
  return (
    <Modal />
  );
}

```

#### Props

|       Name        |   Type   | Default |       Description       |
| :---------------: | :------: | :-----: | :---------------------: |
|      `title`      |   str    |         |       `tab` 이름        |
|     `onClick`     | function |         |                         |
|   `titleColor`    |   str    |  #309   | Tab이 활성화 될 때 색상 |
| `backgroundColor` |   str    |         |     Tab의 배경 색상     |

### <br/>

> ### Tab

#### View

![tab](https://user-images.githubusercontent.com/48751435/151435244-541ae959-1820-4a6b-b2a3-ffd004a15eaf.gif)

#### Usage

```
import { Tab, Tabs } from "./Tab";

function App() {
  return (
    <Tabs>
        <Tab />
        <Tab />
    </Tabs>
  );
}

```

#### Props

|       Name        |   Type   | Default |       Description       |
| :---------------: | :------: | :-----: | :---------------------: |
|      `title`      |   str    |         |       `tab` 이름        |
|     `onClick`     | function |         |                         |
| `backgroundColor` |   str    |         |     Tab의 배경 색상     |
|   `activeColor`   |   str    |  #309   | Tab이 활성화 될 때 색상 |

### <br/>

###

## ✅ Directory

```
├── src/
│   ├── components/                   -
│   └── hooks/                        - custom hook(toggle
│
├── App.js                            - 6가지 컴포넌트들을 렌더링
├── index.js                          - entry point
├── README.md                         - 리드미(배포링크, 프리뷰, 코드컨벤션)
└── package.json                      - 사용 package 목록
```

### <br/>

###

## ✅ Code Convention

### Getting Started

1. `clone` the repository,

```
$ git clone "https://github.com/HeeYeonKim98/wanted_pre_onboarding.git"
```

2. `Install` dependencies,

```
$ npm install
```

3. VScode prettier

```
$ touch .prettierrc
```

4. `start` the project,

```
$ npm start
```

### Commit Emoji

|     emoji      |                   when to use it                   |
| :------------: | :------------------------------------------------: |
|     :tada:     |                   프로젝트 시작                    |
|   :sparkles:   |                  새로운 기능 추가                  |
|    :wrench:    |             구성 파일 추가 및 업데이트             |
|     :bug:      |                     버그 수정                      |
| :construction: |                 작업 진행 중 커밋                  |
|   :pencil2:    |               간단한 코드/오타 수정                |
|   :recycle:    |                   코드 리팩터링                    |
|    :truck:     |               파일 이동 및 이름 변경               |
|   :package:    |              패키지 추가 및 업데이트               |
|    :books:     | 문서 추가 및 업데이트 (e.g. README, Code comments) |

### <br/>

###
