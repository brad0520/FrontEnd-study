//property에 직접 Handler설정
//Element의 "on"+"이벤트" 의 속성에 메소드를 직접 지정

document.getElementById("form1").onsubmit = function eventHandler(){
    console.log("from property");
    return false; // 브라우저의 submit 처리 비활성
}

//addEventListner 메소드
//element의 addEventListener(이벤트, 함수) 메소드를 호출해, eventHandler 등록
//여러개의 이벤트 핸들러를 등록할 수 있음

document.getElementById("form1").addEventListener(
    "submit", 
    function eventHandler(){
        console.log("from addEventListener");
        return false;
    }
);
