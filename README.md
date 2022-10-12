# TODOLIST

### 폴더 구조
[ 최상위 ]
- App.js : Router
- App.css : css reset
- index.js : store root

[ pages ]
- TodoList.jsx : 모든 component 포함
- Detail.jsx : 상세보기

[ redux ]
- config > configStore.js : reducer 연결
- modules > todos.js : redux state 저장소

[ components ]
- Layout.jsx : 화면 크기 조정
- Header.jsx : 헤더
- Form.jsx : 양식 제출
- List : Todo를 담은 container
- Todo : 하나의 Todo
