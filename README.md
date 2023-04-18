<h1 align="center">
  <img src="assets/thumbnail.png" alt="BaekjoonHub - Automatically sync your code to GitHub." width="400">
  <br>
  BaekjoonHub - Automatically sync your code to GitHub.
  <br>
  <br>
</h1>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license"/></a>
  <a href="https://chrome.google.com/webstore/detail/ccammcjdkpgjmcpijpahlehmapgmphmk"><img src="https://img.shields.io/chrome-web-store/v/ccammcjdkpgjmcpijpahlehmapgmphmk.svg" alt="chrome-webstore"/></a>
  <a href="https://chrome.google.com/webstore/detail/ccammcjdkpgjmcpijpahlehmapgmphmk"><img src="https://img.shields.io/chrome-web-store/d/ccammcjdkpgjmcpijpahlehmapgmphmk.svg" alt="users"></a>
    
</a>
</p>

</br>

## Original Gihub Repository
  [Repository로 이동하기](https://github.com/BaekjoonHub/BaekjoonHub "BaekjoonHub Original Gihub Repository")

<br/>
<br/>

## 목차


1. [백준허브란?](#백준허브란what-is-baekjoonhub)
1. [Custom 내용](#Custom-내용)
3. [설치 및 연동](#설치-및-연동how-to-set-it-up)
4. [작동 원리](#작동원리how-it-works)
   1. [동작 화면](#1-동작-화면)
   2. [업로드 시점](#2-업로드-시점)
   3. [저장되는 정보](#3-저장되는-정보)


   <br />


<!--- 소개 --->

## 백준허브란?(What is BaekjoonHub?)

<p>
  백준 허브는 LeetCode의 개인 풀이를 github에 자동 푸시해주는 <a href="https://github.com/QasimWani/LeetHub">LeetHub</a>에서 영감을 받아 만든 프로젝트입니다. <a href="https://www.acmicpc.net/">백준</a>, <a href="https://programmers.co.kr/">프로그래머스</a>를 통해 알고리즘 공부를 하시는 분들이 더욱 쉽게 코드를 저장하고 관리할 수 있게 하도록 만들었으며, 오픈소스 프로젝트로 여러분의 조언과 참여를 환영합니다.<br/>
</p>
<p>
  BaekjoonHub is a chrome extension that automatically pushes your code to GitHub when you pass all tests on a <a href="https://www.acmicpc.net/">Baekjoon Online Judge</a> problem. This project was based off of <a href="https://github.com/QasimWani/LeetHub">LeetHub</a>, a similar extension for Leetcode.
</p>
👉 <a href="https://github.com/flaxinger/BOJAutoPush"> 예시 Repository</a> 보러 가기<br/>

<br />
<br />

## Custom 내용
scripts / baekjoon OR programmenrs OR swexpertacademy / parsing.js <br>
업로드될 폴더명, commit 컨벤션 수정

```JavaScript
function makeDetailMessageAndReadme(data) {
  const { problemId, submissionId, title, level, problem_tags,
    problem_description, problem_input, problem_output,
    code, language, memory, runtime } = data;


  // directory 수정
  const directory = `BOJ/${level.replace(/ .*/, '')}/${problemId}. ${convertSingleCharToDoubleChar(title)}`;
  const category_message = problem_tags.slice(0, 2).join(', ');

  // commit message 수정
  const message = `[${level}] ${category_message || "None"} - ${title}`;

  const fileName = `${problemId}_${convertSingleCharToDoubleChar(title)}.${languages[language]}`;
  const category = problem_tags.join(', ');

  const readme = `# [${level}] ${title} - ${problemId} \n\n`
    + `[문제 링크](https://www.acmicpc.net/problem/${problemId}) \n\n`
    + `### 성능 요약\n\n`
    + `메모리: ${memory} KB, `
    + `시간: ${runtime} ms\n\n`
    + `### 분류\n\n`
    + `${category || "Empty"}\n\n` + (!!problem_description ? ''
      + `### 문제 설명\n\n${problem_description}\n\n`
      + `### 입력 \n\n ${problem_input}\n\n`
      + `### 출력 \n\n ${problem_output}\n\n` : '');

  return {
    directory,
    fileName,
    message,
    readme,
    code
  };
}
```






<br />
<br />

<!--- 설치 및 연동 --->

## 설치 및 연동(How to set it up)

<ol>
  <li>크롬에서 설치 후 우측 상단의 popup 버튼을 클릭합니다.</li>
  <li>"Authorize with GitHub" 버튼을 누르면 Repository 연동 화면이 표시됩니다.</li>
  <li>신규 혹은 기존의 Repository를 선택하면 BaekjoonHub과 연동이 완료됩니다
    (기본값은 private으로 되어있습니다).</li>
  <li>이후 제출화면이 감지되면 자동으로 업로드됩니다</li>
</ol>
👉 보다 구체적인 사용 방법을 알고 싶다면 다음 <a href="https://velog.io/@flaxinger/백준허브-사용-방법">사용자 매뉴얼</a>을 확인해주세요.
<br />
<br />

<!--- 작동 원리 --->

## 작동원리(How it works)

### 1. 동작 화면

![](assets/extension/Baekjoon.gif)

<div align="center">백준 동작 화면</div>
<br/>

![](assets/extension/Programmers.gif)

<div align="center">프로그래머스 동작 화면</div>
<br/>

![](assets/extension/SWExpertAcademy.gif)

<div align="center">SW Expert Academy 동작 화면</div>

### 2. 업로드 시점

<p> 백준허브는 풀이 제출 직후에 작동합니다. 백준은 신규 탭이 일시적으로 사용되고 업로드 후 자동 종료되며 프로그래머스는 제출 화면에서 바로 업로드가 진행됩니다.</p>

### 3. 저장되는 정보

<p>플랫폼 별로 문제 해결 시 파싱 후 저장되는 정보는 다음과 같습니다.</p>

<table>
  <tbody>
    <tr>
      <th>플랫폼</th>
      <th align="center">문제 메타 정보</th>
      <th align="center">사용자 제출 정보</th>
    </tr>
    <tr>
      <td>백준</td>
      <td align="left">
        <li>문제 제목</li>
        <li>문제 아이디</li>
        <li>문제 링크</li>
        <li>문제 등급</li>
        <li>문제 설명</li>
        <li>사용 언어</li>
        <li>문제 분류</li>
      </td>
      <td align="left">
        <li>코드</li>
        <li>사용한 메모리</li>
        <li>실행 시간</li>
      </td>
    </tr>
    <tr>
      <td>프로그래머스</td>
      <td align="left">
        <li>문제 제목</li>
        <li>문제 아이디</li>
        <li>문제 링크</li>
        <li>문제 등급</li>
        <li>문제 설명</li>
        <li>사용 언어</li>
      </td>
      <td align="left">
        <li>코드</li>
        <li>사용한 메모리</li>
        <li>실행 시간</li>
      </td>
    </tr>
    <tr>
      <td>SW Expert Academy</td>
      <td align="left">
        <li>문제 제목</li>
        <li>문제 아이디</li>
        <li>문제 링크</li>
        <li>문제 등급</li>
        <li>사용 언어</li>
      </td>
      <td align="left">
        <li>코드</li>
        <li>사용한 메모리</li>
        <li>실행 시간</li>
        <li>코드 길이</li>
      </td>
    </tr>
  </tbody>
</table>

<br />
<br />

