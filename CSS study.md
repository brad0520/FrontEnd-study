[드림코딩 학습 정리]

	• Flexbox : 박스들의 위치를 배치하는데 있어 float 등을 활용하는 오래된 방식이 아닌 편리한 방식 사용 가능
	• Position 속성 : static(기본 설정), relative(상위 개체 대비 상대적인 위치), absolute(상위 개체 기준으로 위치 선정), fixed(윈도우 기준으로 위치 선정), sticky(스크롤해도 위치가 고정) 의 차이를 이해하고 활용해야 박스 모델의 배치를 자유롭게 할 수 있음
	• Color tool 사이트 : https://material.io/resources/color/#!/?view.left=0&view.right=0 컬러별 적용 테마를 미리 예상해볼 수 있음
	• Material Design : https://material.io/ 아이콘 등의 디자인 요소 참고 및 무료 사용 가능한 사이트
	• 100vh : 뷰포트 높이로 보이는 화면 기준으로 100%
	• 100% : 부모 객체를 기준으로 100%
아이콘 무료 활용 사이트 :  https://fontawesome.com/

[패스트캠퍼스 학습 정리]

	• 가독성을 위해 위에서 아래로 속성: 값; 을 입력
		예)  
			div {
			  color: red;
			  weight: 100%;
			}
	• <link rel="stylesheet" href="style.css"> 과 같이 링크방식을 활용하는 것을 추천 (병렬방식)
	• @import url("./style.css"); => @import 는 CSS가 CSS를 불러오는 방식 (직렬방식)
	• *, 태그, class, ID 선택자
	• 일치선택자 => 선택자와 선택자를 붙여서 구성하며 동시에 만족하는 태그를 검색
	• 자식선택자 => 예) ul > .class  >가 자식임을 표시
	• 자손(후손, 하위)선택자 => 예) ul .class  띄어쓰기로 연결
	• 인접형제선택자 => 예) .class + li  '+'로 연결하여 다음에 인접한 형제 하나를 선택
	• 일반형제선택자 => 예) .class ~ li  '~'로 연결하여 다음에 인접한 형제를 모두 선택
	• 가상클래스선택자  ':'가 한 개	
	• E : hover => 마우스가 올라가 있는 동안 E 선택, transition 을 사용하여 부드럽게 변환시킬 수 있음
	• E : active => 마우스로 클릭하고 있는 동안 E 선택
	• E : focus => focus된 동안 E 선택, 대화형 콘텐츠에서 사용 가능 예) input, img, tapindex 등 
	• 필요한 모든 요소를 클래스 혹은 아이디로 지정하기에는 현실적으로 무리이기에 first, last, nth-child를 선택하는 방법을 많이 사용
	• nth-child(2n) => 짝수번째 요소만 선택
	• nth-child(n+3) => 3번째 요소부터 선택
	• .class : first-child => class의 후손 중에서 태그에 관계없이 첫번째 자손들을 모두 선택
	• nth of type(number) => 주어진 태그의 number번째 태그에만 적용
	• E : not(S) => 부정선택자
	• :가상클래스,  ::가상요소 => ::before, ::after 사용시 content : "  " 속성이 반드시 작성이 되야함
	• 속성 선택자 [attr] => 매번 클래스나 아이디를 만들지 않고 속성이 있는 요소를 선택하여 서식 적용 가능한 점에서 효율적
		- [attr=value] => 속성이 특정 값을 갖는 요소
		- [attr^=value] => 속성이 특정 값으로 시작하는 요소
		- [attr$=value] => 속성이 특정 값으로 끝나는 요소
	• 글자를 다루는 속성들이 대부분 상속이 되고 다른 속성들은 상속이 되지 않음
	• 강제 상속 : 자동으로 상속이 되지 않는 속성을 상속시킴 => inherit
	• 인라인 선언방식으로 스타일을 준 경우 1000pt로 상대적으로 우선순위가 굉장히 높기 때문에 유지 보수 차원에서 새로운 CSS파일로 덮어 써도 반영이 안되는 문제점이 있음
	• !important : 무한대, 인라인 선언 : 1000pt, 아이디 선택자 : 100pt, 클래스 선택자 : 10pt, 태그 선택자 : 1pt, 전체 선택자 : 0pt, 상속 : 계산하지 않음.
	• reset css가 html 문서에서 사용할 css 파일보다 위에 링크가 되야함
	• 글꼴 정리 
		- serif : 바탕체 계열(글씨 끝이 튀어나온 글꼴)
		- sans-serif : 고딕체 계열
		- monospace : 고정너비(가로폭이 동등한) 글꼴 계열
		- cursive : 필기체 계열
		- fantasy : 장식 계열(재미있는 문자 표현을 포함하는)
	• font-family : 후보1, 후보2, …, 계열 =>후보로 제시한 글꼴들이 모두 클라인언트 컴퓨터에 없을 때 계열의 폰트 중에 설치된 글꼴 사용
	• text-indent : -9999px => 화면에서 글씨를 밀어냈음을 알리는 묵시적인 약속, 글씨가 웹 제작상 필요하지만 화면에 표시될 필요는 없는 경우에 이렇게 처리
	• float : 블록 요소 옆으로 글이 흐르게 표현이 가능, 신문 기사와 같은 배열이 가능, 사용 후 반드시 해제를 해야함
	• clear : both; => float을 해제하는 속성 
	• 부모요소를 만들어서 clearfix를 미리 정의한 후 class로 지정하여 해제하는 방법을 추천
	• float을 사용하면 display속성이 block으로 자동을 바뀜
	• relative : 자기 자신을 기준으로 이동, 주변 요소의 배치가 달라지면 영향을 받음
	• absolute : 위치상의 부모 요소를 기준으로 이동, 위치상 부모 설정을 위해 부모에 position 속성에 relative 를 입력해줌!!!
	• overflow : auto; => 화면의 크기를 넘는 데이터가 있을 때 자동으로 화면 크기에 맞게 출력
	• Position 속성이 있는 요소가 위에 쌓이고, 속성이 똑같이 있는 경우 html의 코드 순서대로 쌓이게 됨. 기본적으로 가장 아래줄의 요소가 가장 위에 쌓임
	• z-index: 숫자; => 쌓는 순서를 정할 수 있는 속성
	• 요소의 배경에 이미지 첨부 가능 => background-image
	• Background-repeat : repeat; => 반복으로 기본 설정이 되어 있음. 반복패턴으로 배경을 채울 경우 유용
	• background-attachment : fixed => Parallax Scrolling
	• 애니매이션 기능 활용으로 액티브한 웹 화면을 구성할 수 있음, 속성들을 잘 활용하기 위해 외우기 보단 기억하고 검색해서 활용하는 방향이 적절함
	• flex-basis의 기본값이 달라질 수 있음을 주지
	• 그리드
		- display : grid
		- grid-area 등의 속성들 활용해서 header, main, aside, footer 등을 배치
		- 빈 공간의 경우 . 을 사용하면 생성 가능
	• align-contents 와 align-items 는 전체에서 정렬인지 그리드 내에서 정렬인지의 차이가 있음
