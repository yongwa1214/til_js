# JavaScript 기초

- 반드시 스스로 개념을 정리하셔야 합니다.
- 타인에게 특히, 초등학생에게 설명할 정도로 쉽게 개념을 정리하시면 좋습니다.

## 1. 기초상식

- HTML5 : 웹브라우저에 데이터를 보여주는 형식을 지정한 뭄ㄴ법구조
- CSS3 : 데이터를 잘보여주기 위해서 꾸며주는 용도의 문법
- JS : html/css 제어

```text

1. css 제어 : 레이아웃 변경 하도록 지시
1. html 제어 : 데이터의 결과를 CRUD 하도록 지시
3. Server, DB 를 제어 : Node.js 로 가능함.

```

## 2. JS 의 종류는 2가지

### 2.1. 웹브라우저용 JS (Web API)

- Web API 는 웹브라우저에 미리 기능이 만들어져 있는 JS 기능
- 주로 직접 코딩하는 것이 아니고 미리 만들어진 기능을 사용

### 2.2. 데이터 관리 JS (ES6)

- 이전에 JS 는 웹브라우저 마다 모두 달랐다.
- 이에 대한 불편함을 해소하기 위해서 JS 의 문법을 통일하였다.
- 기준이 ECMAScript 라고하며 ES6 가 가장 기준이 된다.

## 3. 실습

### 3.1. 웹브라우저에서 JS 실행하기

- `F12` 실행 > `Consloe` 탭을 선택 : console 탭은 js 의 `결과, 오류`를 보는 곳

```js
console.log("안녕");
```

```js
console.clear();
```

```js
alert("안녕");
```

- 1 줄 이상 작성하는 경우는 `Shift + Enter` 키를 입력하여야 함.
<!-- 콘솔은 내용확인 용도로 사용할 것을 권장합니다. -->

### 3.2. html에서 JS 실행하기

- index.html 파일을 생성합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <!-- en >> ko로 고치도록-->
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <!-- 타이틀 이름 고치도록-->
  </head>
  <body></body>
</html>
<!-- 단축키 ! + tab -->
```

## 4. `JS 작성 위치` 고민하기

- `<script></script>` 태그를 지원합니다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <script>
      console.log("1. 안녕");
    </script>
  </head>
  <body>
    <script>
      console.log("2. body 입니다");
    </script>
  </body>
</html>

<script>
  console.log("3. html 끝 입니다");
</script>
```

<!-- 1번도 좋은자리라고는 함 그러나 3이 좋다.  -->

### 4.1. 3번 자리 즉 html 의 끝이 좋다

- 일반적으로 css 와 html 을 제어하는 것이 js 의 목적이다.
- `웹브라우저가 css와 html 을 모두 읽고 난 후의 자리`
<!-- 웹브라우저는 한 줄 씩읽음 html과 css를 모두 읽은 후 js를 실행하는게
오류가 안난다  -->

### 4.2. 1번 자리 즉 head 자리는 `기능`의 정의

<!-- 기능을 만들어놓기 좋은 자리  -->

- 내가 즉, 개발자가 만든 많은 `기능`들을 코딩하기 좋은 자리
- 다른 개발자가 만든 많은 `기능들`을 불러와서 사용하기 좋은 자리
<!-- 이해함 기계를 위에 배치해놓고 재료는 밑에서 넣는거네요? ㅇㅋㅇㅋ
    기능을 준비 해놓는 자리 . 웹은 위에서부터 아래로 읽으니까 기능을 밑에 두면 이상해짐
      -->

## 5. js 도 외부에 파일로 만들어서 관리하자

- js 폴더 생성
- js 폴더에 `lib.js` 파일 생성
- js/lib.js 내용

```js
// 커피를 출력하는  기능 / 커피머신은 띄워쓰면 안됨 function :기능을 묶어놓음 기계라고 보면 된다.
function 커피머신(_msg) {
  console.log(_msg);
}

console.log("1. 안녕");
```

```html
<!DOCTYPE html>
<html lang="ko">
  <!-- en >> ko로 고치도록-->
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>자바스크립트</title>
    <!-- 타이틀 이름 고치도록-->
    <script src="js/lib.js"></script>
    <!-- js여기 있어!!-->
  </head>
  <body>
    <script>
      console.log("2. body 입니다");
    </script>
  </body>
</html>
<script>
  console.log("3. html 끝 입니다");
  커피머신("아이스아메리카노");
  // 위에(head) function에 아이스아메리카노를 집어넣은거다.
</script>
```

# JavaScript 문법

## 1. 변수(Variables)

- 웹브라우저에 `값 보관시 사용할 공간`

### 1.1. 필요로 한 항목들을 파악하기(설계 단계)

#### 1.1.1. 단계 1 (필요로 한 기능에 대해서 서술 - 피그마, UI 다이어그램 )

- 나는 `사용자 정보`를 입력 받아서 `DB 에 보관`하고 싶다.
- 사용자가 로그인을 하고 나면 사용자 정보를 화면에 출력하고 싶다.

#### 1.1.2. 단계 2 (어떤 정보를 보관할지 결정한다. - 요구사항명세서)

```text
이름, 주민번호, 전화번호, 주소(우편번호, 상세주소), 이메일, 아이디,비밀번호, 동의체크
```

### 1.1.3. 단계 3 (각각의 정보를 보관할 공간을 마련)

```text
이름 : 글자 20자 제한
주민번호 : 글자 13자 제한
전화번호 : 글자 11자 제한
우편번호 : 글자 5자 제한
상세주소 : 글자 50자 제한
이메일 : 글자 20자 제한
아이디 : 글자 16자 제한
비밀번호 : 글자 16자 제한
동의체크 : 참/거짓  숫자 1자 제한

```

### 1.2. 각 항목에 대해서 웹브라우저에서 임시로 보관하는 작업

#### 1.2.1. 단계 1

- 웹브라우저 메모리 `빈 공간` 요청

```js
var
let
const
```

#### 1.2.2.`var` 라고 작성을 하면 `변수` 로 인정

- `hoisting`으로 오류가 발생할 소지가 높음
- 미리 만들지 않고 사용해도 되는 문제
- 이건 옛날 JS버전에서만 씁니다.
  <!-- 빈 공간 선점도 안하고 항목을 냅다 집어넣었는데
  밑에 var를 적었다고 어어 ㅇㅋ 인정해줌 이러는 사태임  -->
  <!-- 오류 안 나고 실행되는데 이게 언제 오류가 될지 모르니까 문제임 권장하지 않음  -->

```text
무조건 공간에다가 undefined 라는 값을 넣어버린다.
호이스팅의 대상이 된다.
<!-- 호이스팅이란, 인터프리터가 변수(공간)와 함수(function)의
메모리 공간을 선언 전에 미리 할당하는것을 의미한다-->
<!-- 인터프리터 : 코드를 한 줄씩 읽어들이면서 실행하는 프로그램 -->
```

#### 1.2.3. `let` 라고 작성 하면 `변수` 로 인정

- `hoisting`의 문제를 사전에 차단한다.
- `let`으로 작성시 미리 사용하면 오류로 알려준다.
- 수시로 내용이 바뀐다.(변수)

#### 1.2.4. `const` 라고 작성 하면 `상수` 로 인정

- `hoisting`의 문제를 사전에 차단한다.
- `const`으로 작성시 미리 사용하면 오류로 알려준다.
- 절대로 내용이 변하지 않는다.(상수)

### 1.2.5. 실제로 var, let, const 중에 선택합니다

- 값이 사용자 마다 변할 것이다. 그래서 `let` 선택했어요.

```js
let 이름 : 글자 20자 제한
let 주민번호 : 글자 13자 제한
let 전화번호 : 글자 11자 제한
let 우편번호 : 글자 5자 제한
let 상세주소 : 글자 50자 제한
let 이메일 : 글자 20자 제한
let 아이디 : 글자 16자 제한
let 비밀번호 : 글자 16자 제한
let 동의체크 : 참/거짓 숫자 1자 제한
```

### 1.3. 메모리 공간에 이름 짓는 법(변수 명명법)

- 정말 중요합니다. 이름을 잘못 지으면 다른 개발자에게 혼란을 줌.
- 개발자들은 코딩 컨벤션이 있습니다.
- 변수의 철자는 `명사+명사` `영어`로 하셔야 합니다.
- 숫자, 공백, 특수기호는 절대 안됩니다
- 허용되는 특수기호는 오로지 `_`, `$`

#### 1.3.1. Camel Case

- 반드시 소문자로 시작하고 새로운 명사는 대문자로 시작함.
- 많은 프로그래머들이 변수라고 생각합니다.
<!-- 변수 이름 지정 시 가장 추천하는 방법입니다. -->

#### 1.3.2 Snake Case

- 변수를 모두 소문자로 작성하고 `_`로 연결한 이름

#### 1.3.3. Kebab Case

- 이름을 소문자로 작성하고 `-` 로 연결한 것
- 파일 또는 css 파일에서는 사용합니다.
- 예) Next.js 의 파일명은 Kebab 이 표준입니다.

#### 1.3.4. Pascal Case

- 이름을 대문자로 작성하고 새로운 단어는 대문자로 시작
- 혹시 객체 변수 아닌가?
- 혹시 클래스 정의 아닌가?

#### 1.3.5. 대문자(전부다)

- 상수명으로 판단함
- 예) console.log(USERNAME) >> 상수구나

#### 1.3.6. 적용하기

```js
let userName : 글자 20자 제한
let userNum : 글자 13자 제한
let userPhone : 글자 11자 제한
let userPost : 글자 5자 제한
let userAddress : 글자 50자 제한
let userEmail : 글자 20자 제한
let userId : 글자 16자 제한
let uesrPassword : 글자 16자 제한
let userAgree : 참/거짓 숫자 1자 제한
```

### 1.4. 기본 데이터 종류 (원시데이터 : Primitive Date Type)

- number : 숫자
- string : 글자(문자, 문자열로 구분)
- boolean : true/false (나중에 falshy 한 것 알아야함)
- undefined : 값이 없어요. (변수 초기값으로 자동 셋팅)
- null : 개발자가 값이 없다고 지정함.(갑이 비었다로 셋팅하라)
- symbol : 지구가 망해도 절ㄹ대로 겹치지 않는 변수이다.

#### 1.4.1 . 적용하기

```js
let userName = ""; // 20자 제한
let userNum = ""; //13자 제한
let userPhone = ""; //11자 제한
let userPost = ""; //5자 제한
let userAddress = ""; //50자 제한
let userEmail = ""; //20자 제한
let userId = ""; //16자 제한
let uesrPassword = ""; //16자 제한
let userAgree = false; //1자 제한
//무조건 =을 기준으로 오른쪽부터 봐야함
// 여기선 제한 처리를 못함 코딩으로 해결해야함
// 자바스크립트에서는 타입을 못 적어...(userName string<<이거) 적어주려면 타입스크립트 써야해
// ==이 같다임
```

#### var, let, const 정확히 제약사항 파악하기

### 1.5. 참조형 데이터 종류(Reference Data Type)
