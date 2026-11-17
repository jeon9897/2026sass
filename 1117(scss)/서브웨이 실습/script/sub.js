
//sub페이지 관련 스크립트
//1. 변수선언
let tab_mnu = document.querySelectorAll('.tab_mnu ul a');
let tab_con = document.querySelector('.tab_con');
const question = document.querySelectorAll('.faq_list > dt');

//2. 클릭시 해당 메뉴 서식 적용하고, .해당 cont보이게 하기
tab_mnu.forEach(function(item, i){
  item.addEventListener('click', function(e){
    //새로고침 안되게 한다.
    e.preventDefault();

    //act서식을 제거하고
    tab_mnu.forEach(function(item){
      item.classList.remove('act');
    });

    //사용자가 클릭한 탭메뉴에 act서식을 적용한다.
    this.classList.add('act');

    //사용자가 클릭한 탭메뉴 a태그의 부모요소 li 변수 생성
    let parent_li = this.parentNode;

    console.log(i); //탭메뉴 n번째값 확인
    console.log(parent_li); //탭메뉴 a요소의 부모확인

    //모든 콘텐츠를 숨기고
    for(let j=0;j<tab_con.children.length;j++){
      tab_con.children[j].style.display='none';
    }

    //해당 j번째 콘텐츠(section) 보이게하기
    tab_con.children[i].style.display='block';

  });
});

//3. faq아코디언 구현
question.forEach(function(dt){
  dt.addEventListener('click', function(){
    const answer = this.nextElementSibling;//바로 다음요소
    const isOpen = answer.style.display === 'block';

    //다른 열려있는 답변 모두 닫기(선택사항)
    document.querySelectorAll('.faq_list dd').forEach(dd=> dd.style.display='none');
    document.querySelectorAll('.faq_list dt').forEach(item=> item.classList.remove('act'));

    //클릭한 항목이 닫혀있었다면 다시 열기
    if(!isOpen){
      answer.style.display='block';
      this.classList.add('act');
    }

  });
});
