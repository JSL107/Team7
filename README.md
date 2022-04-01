# 🏠Seven Stay

## 팀원 구성
  - :bear: 김은혁
  - 🐕 김예지
  - 🐣 반철준
  - 🐹 이준석

## 서비스 소개
- 제주도의 숙소를 예약하는 사이트.


## 프로젝트 기간
- 2022.03.25 ~ 2022.04.01


## 핵심 기능
1. 🔍 일정 선택 - Datepicker를 이용하여 예약 일정을 설정
2. 📖 예약 정보 - (위치) 서귀포시/제주시, (예약일정), (인원)을 입력 받아 DB(MYSQL)로 전송
3. 📷 지도 검색 - KAKAO MAP API를 이용하여 숙소의 위치 확인 및 주변 검색 가능

## 🖥 실행화면 

 ### main page
![image](https://user-images.githubusercontent.com/95362504/161176405-898f80fa-7927-4e49-9131-5c7688f91583.png)


<br>
  
 ### modal page
![image](https://user-images.githubusercontent.com/95362504/161176458-54a32a53-4583-4e22-9b60-69878c3186f7.png)

<br>

## 동작화면
[sevenstay화면](https://user-images.githubusercontent.com/97449025/161179165-79990045-f845-48a8-b205-af14c0812d82.gif)

## Lighthouse
![image](https://user-images.githubusercontent.com/95362504/161176201-fbdbfdde-2a3a-4358-a60f-a7943b8eee0b.png)

## ERD
![image](https://user-images.githubusercontent.com/95362504/161176520-be61bac2-42d4-4f15-bc97-11dd31c6399e.png)

## POSTMAN
[image]

## 트러블 슈팅
1. 카카오MAP API 작성중 코드에  /*global kakao*/ 선언하지 않으면 오류 발생 하는점 
    - 주석이라고만 생각했어서 무시하고 선언 하지 않았는데 이게 오류 원인이였다는걸 발견.

2. 숙소예약 요청을 하면 숙소id가 DB에 안들어갔던 이슈
    - 어디가 문제점인지 확인을 못했다?
