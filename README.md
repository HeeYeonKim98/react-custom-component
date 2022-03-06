# custom component

`front-end`에서 자주 사용하는 컴포넌트 중 다음의 6가지 항목들을 구현한 `custom component`입니다.

- Toggle
- Modal
- Tab
- Tag
- AutoComplete
- ClickToEdit

### <br/>

###

## 🐯 Component API

> ## Toggle

#### View

![toggle_view](https://user-images.githubusercontent.com/48751435/152809631-3d148c6a-c2a7-4fba-be6d-5d341d861f5f.gif)

#### Usage

```
import Toggle from "./component/Toggle";

function App() {
  return (
    <Toggle circleColor = "pink"/>
  );
}
```

#### Props

|     Name      |      Type       | Default |                Description                |
| :-----------: | :-------------: | :-----: | :---------------------------------------: |
|  `onChange`   | function(value) |    -    | 옵션 또는 입력 값의 변경이 필요할 때 호출 |
|  `disabled`   |      bool       |  false  |             `Toggle` 비활성화             |
| `circleColor` |      color      |  #fff   |            `Toggle` 버튼 색상             |

### <br/>

> ## Modal

#### View

![modal_view](https://user-images.githubusercontent.com/48751435/152809716-11efffbf-6a1f-449a-a45a-994efc784711.gif)

#### Usage

```
import Modal from "./component/Modal";

function App() {
  return (
    <Modal title = "Open Modal!">
      안녕하세요:)
    </Modal>
  );
}
```

#### Props

|       Name        | Type  | Default |    Description    |
| :---------------: | :---: | :-----: | :---------------: |
|      `title`      |  str  |    -    |   `Modal` 제목    |
|    `textColor`    | color |  #fff   | `Modal` 제목 색상 |
| `backgroundColor` | color |  #309   | `Modal` 배경 색상 |

### <br/>

> ## Tab

#### View

![tab_view](https://user-images.githubusercontent.com/48751435/153879599-e37e7b1f-2955-4b7b-9ddc-fac5ca63164c.gif)

#### Usage

```
import Tab from "./component/Tab";

function App() {
  return (
    <Tab tabs = {[{name:"home"}, {name:"mypage"}]} />
  );
}

```

#### Props

|       Name        | Type  | Default |         Description          |
| :---------------: | :---: | :-----: | :--------------------------: |
|      `tabs`       |  arr  |    -    | `Tab` 요소들을 반환하는 배열 |
| `backgroundColor` | color | #dcdcdc |       Tab의 배경 색상        |
|   `activeColor`   | color |  #309   |   Tab이 활성화 될 때 색상    |

### <br/>

###

> ## Tag

#### View

![tag_view](https://user-images.githubusercontent.com/48751435/152916849-613a15da-f819-4a3d-9cc5-34e84b0fffea.gif)

#### Usage

```
import Tag from "./component/Tag";

function App() {
  return (
    <Tag tags = {["CodeStates", "Kim"]} />
  );
}

```

#### Props

|       Name        | Type  | Default |     Description     |
| :---------------: | :---: | :-----: | :-----------------: |
|      `tags`       | list  |    -    |     `Tag` 목록      |
| `backgroundColor` | color |  #309   |   `Tag` 배경 색상   |
|   `borderColor`   | color |  #309   | `Tag` 컨테이너 색상 |

### <br/>

###

> ## AutoComplete

#### View

![autocomplete_view](https://user-images.githubusercontent.com/48751435/153879755-7c6021c1-9d31-4263-ba55-e5bbd5c16004.gif)

#### Usage

```
import AutoComplete from "./component/AutoComplete";

function App() {
  return (
    <AutoComplete data = {["apple", "banana"]} />
  );
}

```

#### Props

|  Name  | Type | Default |     Description     |
| :----: | :--: | :-----: | :-----------------: |
| `data` | arr  |    -    | `AutoComplete` 목록 |

### <br/>

###

> ## ClickToEdit

#### View

![clicktoedit_view](https://user-images.githubusercontent.com/48751435/152916906-ea1b9e21-e534-4550-b3b5-cc69e7c75c57.gif)

#### Usage

```
import ClickToEdit from "./component/ClickToEdit";

function App() {
  return (
    <ClickToEdit
        label = "이름"
        type = "text"
        name = "name"
    />
  );
}

```

#### Props

|     Name      |      Type       | Default |                Description                |
| :-----------: | :-------------: | :-----: | :---------------------------------------: |
|    `label`    |       str       |    -    |            edit input의 label             |
|    `type`     |       str       |    -    |             input의 type 속성             |
|  `onChange`   | function(value) |    -    | 옵션 또는 입력 값의 변경이 필요할 때 호출 |
|    `value`    |      value      |    -    |            edit input의 value             |
|    `name`     |       str       |    -    |             edit input의 name             |
| `placeholder` |      value      |    -    |         편집된 input에 있는 text          |
|   `onBlur`    |    function     |    -    |     focus가 해제될 때 발생하는 이벤트     |

### <br/>

###

## 🐯 Directory

```
├── src/
│   ├── components/                   - 6가지 컴포넌트 파일
│   └── hooks/                        - custom hook(toggle, input)
│
├── App.js                            - 6가지 컴포넌트 렌더링
├── index.js                          - entry point
├── README.md                         - 리드미(배포링크, 프리뷰, 코드컨벤션)
└── package.json                      - 사용 package 목록
```

### <br/>

###

## 🐯 Code Convention

### Getting Started

1. `clone` the repository,

```
$ git clone "https://github.com/HeeYeonKim98/wanted_pre_onboarding.git"
```

2. `Install` dependencies,

```
$ npm install
```

3. `start` the project,

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
