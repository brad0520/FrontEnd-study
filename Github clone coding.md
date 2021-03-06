클론 코딩을 활용한 html, css 코딩 연습

<HEAD TAG>

[meta tag]
	• viewport : 기본 뷰 및 반응형 웹을 위한 설정
	• property : 트위터, 페이스북, 카카오톡 등 링크가 공유될 때 노출되는 정보를 저장
[favicon]
	• favorite icon의 약자로 사이트를 대표하는 아이콘
	• <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	• 익스플로러는 ico 파일이 폴더에 있으면 우선 적용하기에 위 코드는 생략 가능

[css 초기화]
	• main.css 보다 먼저 선언하여 사용할 서식에 덮어씌여지지 않게 함
	• css 초기화 파일을 직접 링크 혹은 cdn 파일 링크를 사용하여 설정



<BODY TAG>

[body__container]
	• 문서 전체에 기본 적용이 될 서식을 지정하는 클래스로 지정하고 css 서식 작성
	• 기본 서식(버튼, 입력창 등)을 설정하는 부분은 코드펜(code pen)을 통해서 확인한 후 복사해서 main.css 파일에 저장

[BEM]
	• CSS작명 규칙
		○ ~의 일부분 : __  예시) body__container
		○ ~의 상태 : --  예시) btn--success, btn--danger, btn--warnig
		○ 일반적인 작명 : -  예시) toggle-btn

[common]
	• 버튼, 입력창 등 자주 사용되는 요소들의 경우 미리 css코드를 작성해두고 class, id를 활용해서 사용하면 효율적임

[box-shadow]
	• ,(콤마) 를 활용해서 2개 이상의 그림자를 동시에 활용할 수 있음

[placrholder 색상변경]
	• 표준지원되는 기능이 아닐 경우 
		▪ Vender Prefix (브라우저 업체별 접두사)
		▪ -webkit-
		▪ -ms-
		▪ -moz-
		▪ -o-

<Header Section>
[Header]
	• Header 태그로 작성하며, 내부는 inner, container, wrapper 등의 class로 나누어 서식을 작성
	• 내부 태그의 가로길이 속성을 지정한 후 margin: 0, auto; 로 설정하면 header 태그 내부의 가운데 정렬이 가능함
	• 메뉴의 각 항목들을 가로로 정렬하기 위해서 dispay: flex; 를 사용
	• list 태그 내의 a태그는 기본적으로 inline 속성을 갖기 때문에 padding을 주려면 display: block 을 설정해야 함
	• a태그에 padding을 주면 클릭할 수 있는 범위가 늘어나게 됨 
	• logo 입력의 경우 div태그 내에 a태그의 background 이미지로 첨부할 경우 div태그에 입력한 텍스트 내용이 겹쳐 보이게 됨. 이런 경우 텍스트를 삭제하지 않고 text-indent: -9999px 을 사용하여 텍스트의 내용은 문서 상에 남고 화면에 출력이 되지 않게 하면 img태그의 alt속성을 남기는 것과 같은 효과를 갖게 됨.
	• float 속성을 사용해서 좌우로 요소를 배치할 경우 부모 요소가 배제되는 것을 보정하는 수단으로 ::after 속성을 활용하여 clearfix 클래스에 서식을 지정
		.clearfix::after {
		  content: "";
		  clear: both;
		  display: block;
		}
	• 배경이미지의 경우 cover 로 가급적 설정해두는 것이 좋음
	• 가운데 정렬이 안되는 경우 상위 요소의 dispaly 설정을 확인하고 적절한 코드를 사용
	• flex 박스 안의 flex item에 아래와 같은 속성은 
	  flex-grow: 1;
	  flex-basis: 0;
	=> flex: 1; 과 같은 단축속성으로 사용이 가능
	• &nbsp; 로 단어를 연결하면 화면에는 스페이스와 같은 간격을 두고 있는 것으로 보이지만 연결되어 있어 함께 같은 줄에 위치하게 할 수 있음
	• 아래와 같은 그리드의 경우 최신 기술로 사용이 편리하지만 구버전의 브라우저를 사용하는 사용자를 배려하면 다른 코드로 대체가 필요한 경우도 있음
		.section--feature .tiles ul {
		  display: grid;
		  grid-template-columns: repeat(4, 1fr);
		}
	• 위 코드 대신 부모 요소에 clearfix 후 
	float: left;
	width: 25%;
	코드 사용하는 예전 방식도 가능


<FOOTER TAG>
	• 가운데 정렬 방법
	footer .logo {
	  position: absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  margin: auto;
	  width: 24px;
	  height: 24px;
	}
	위와 같은 코드로 가운데 정렬이 가능함. (부모요소에 display: relative 설정 확인 필요)
	

<MEDIA QUERY>
	• 미디어쿼리에 사용하는 속성 점수가 낮으면 덮어씌워지지 않는 문제가 발생함 => 적용하는 우선순위가 있음에 주의해야 함
	• 우선순위가 꼬여 미디어쿼리 적용시 선택자 재설정이 힘든 경우 !important 를 사용해 최우선 순위로 만들어 필요한 서식을 적용
	
