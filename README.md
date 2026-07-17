### ⚡ 관리자 웹페이지 

- Vite + React + TypeScript 기반으로 제작된 프론트엔드 프로젝트입니다.
## <!-- TOC -->
    * Bulid Tool : Vite
    * UI 라이브러리 : React
    * script : TypeScript
    * css framework : Tailwind CSS
    * UI 컴포넌트 : ShadCDN
    * 전역 상태 관리 : zustand 
    
### [zustand](https://github.com/pmndrs/zustand/blob/main/docs/learn/guides/beginner-typescript.md)
  * combine 함수 이용하여 자동 타입 병합
    * creat(combine({count : 0}, set(()=>{increment:(생략){count : state.count +1}
  * devtools 함수 이용하여 디버깅
    * create<T>(devtools((set)=> ...))
  * persist 새로고침 후에도 브라우저 저장소에 자동 백업 
    * create<T>(persist((set)=> ...))
  
### [ShadCDN](https://ui.shadcn.com/docs/components)
    
<!-- TOC -->