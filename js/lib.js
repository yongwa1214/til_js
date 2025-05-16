// 데이터 서버에 자료를 호출함.

function getData(api = "posts") {
  return new Promise(function (reseolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://jsonplaceholder.typicode.com/${api}`);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        // 성공
        reseolve(xhr.response);
      } else if (xhr.status === 404) {
        // 실패
        reject();
      } else if (xhr.status === 505) {
        // 서버가 죽은건 내탓이 아니잖아요 그래서 reject쓰는 대신에 그냥 console.log(); 찍었습니다
        console.log("서버가 불안정합니다. 잠시 후 재접속해주세요");
      }
    };
  });
}
// 함수 사용
getData("posts")
  .then(function (data) {}) // then 이라는 함수는 resolve와 같다. 반드시 ()에 함수가 들어가야함
  .catch(function (err) {});
getData("comments").then().catch();
getData("albums").then().catch();
getData("photos").then().catch();
getData("todos").then().catch();
getData("users").then().catch();

/*
  // 1. xhr 객체 한개 만듦 
  const xhr = new XMLHttpRequest();
  
  // 2. 주소를 연결함
  xhr.open("GET", `https://jsonplaceholder.typicode.com/${api}`);
  
  // 3. 웹브라우저로 요청을 합니다.
  xhr.send();
  
  // 4. 요청 이후 응답이 오기를 기다린다. 
  xhr.onload = function() {
    //console.log("요청이 되어졌을 때 백엔드 회신정보 : ", xhr);
    if(xhr.status === 200) {
      console.log("정상적인 Response 됨: ", xhr.response);
      // 콜백 함수 자리 - 자료가 오면 자료를 활용하고 싶다 
      // if로 어쩌구 저쩌구 하지 않는다 
      fn(xhr.response);

    } else if (xhr.status === 404) { 
      console.log("주소가 잘못되었네요");
    } else if (xhr.status === 505) {
      console.log ("서버에 오류입니다. 잠시 후 시도해 주세요.");
    }
  };


// 콜백함수 만들기 : 자료가 들어오면 처리함.
const postsParser = function (res) {
  console.log(res);
};
const commentsParser = function (res) {};
const albumsParser = function (res) {};
const todosParser = function (res) {};
const usersParser = function (res) {};
// 함수 사용
getData("posts", postsParser);
getData("comments", commentsParser);
getData("albums", albumsParser);
getData("photos", todosParser);
getData("todos", todosParser);
getData("users", usersParser); 
*/
