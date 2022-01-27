# 원티드 프리온보딩 코스

작성 중 입니다.

### <br/>

###

## ✅ Component API

> ### Toggle

#### view

![ezgif com-gif-maker](https://user-images.githubusercontent.com/48751435/151402788-3b44ea37-8717-404d-bf66-2c993f645f60.gif)

#### Usage

```
import Toggle from "./Toggle";

function App() {
  return (
    <Toggle />
  );
}

```

#### props

|     Name      | Type | Default |           Description           |
| :-----------: | :--: | :-----: | :-----------------------------: |
|  `disabled`   | bool |  false  |                                 |
|   `onColor`   | str  |  #309   |  Toggle이 활성화되었을 때 색상  |
|  `offColor`   | str  | #dcdcdc | Toggle이 비활성화되었을 때 색상 |
| `circleColor` | str  |  #fff   |        Toggle 버튼 색상         |

### <br/>

> ### Tab

#### view

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

#### props

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
│   └── hooks/                        -
│
├── App.js                            -
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
