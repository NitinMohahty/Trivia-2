(this["webpackJsonpmcq-react"]=this["webpackJsonpmcq-react"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),o=n(27),a=n.n(o),r=(n(36),n(2)),c=(n(37),n(4)),u=n(63),l=n(64),h=n(65),d=(n(38),n(1));function f(){var e=Object(s.useState)(""),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(r.f)();return Object(d.jsx)("div",{class:"contentmain",children:Object(d.jsxs)("div",{style:{paddingTop:"20%",paddingLeft:"40%",paddingBottom:"23%"},children:[Object(d.jsx)(u.a,{className:"mb-3",style:{width:"30%"},children:Object(d.jsx)(l.a,{value:n,onChange:function(e){return i(e.target.value)},placeholder:"Enter Your Team Name"})}),Object(d.jsx)(h.a,{variant:"primary",style:{width:"30%"},disabled:!n,onClick:function(){return function(){var e=new URLSearchParams;n?e.append("name",n):e.delete("name"),o({pathname:"/question",search:e.toString()})}()},children:"Start Game"})]})})}var m=n(28),b=n.n(m);function g(e){var t=e.name,n=e.score;return Object(s.useEffect)((function(){sessionStorage.getItem("submitted")||b.a.post("https://sheet.best/api/sheets/f31b1449-a291-42e1-9613-4151d9f922e9",{name:t,score:n,timestamp:(new Date).toString()}).then((function(){sessionStorage.setItem("submitted","true")}))}),[]),Object(d.jsxs)("div",{style:{color:"Green",fontSize:"30px",fontWeight:"bold"},children:["Your Final Score is ",n,". Thank you ",t,"!!!"]})}var p=function(e){return Object(d.jsx)(d.Fragment,{children:e.options[e.id].map((function(t){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"radio",value:t[0],onChange:e.onChange,name:"".concat(e.name,"-").concat(e.id+1)}),t]})}))})};function j(e){var t=e.type,n=e.question,i=e.option,o=e.onOptionSelection,a=e.onAnswerSubmit,r=e.id,u=e.timerCount,l=e.onTimerEnd,f=Object(s.useState)(0),m=Object(c.a)(f,2),b=m[0],g=m[1];return Object(s.useEffect)((function(){console.log("called",t,u),g(u)}),[]),Object(s.useEffect)((function(){var e=setInterval((function(){b>0?g(b-1):(l(),g(u))}),1e3);return function(){clearInterval(e)}})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:["Timer: ",b]}),Object(d.jsxs)("div",{className:"col-12 my-4",children:[r+1,". ",n.question]}),Object(d.jsx)(p,{options:i,name:t,onChange:function(e){return o(e)},id:r}),Object(d.jsx)(h.a,{style:{width:"20%"},onClick:function(){return a(n.answer)},children:"Submit"})]})}function A(){var e=Object(r.e)().search,t=new URLSearchParams(e).get("name"),n=Object(s.useState)(0),i=Object(c.a)(n,2),o=i[0],a=i[1],u=Object(s.useState)(""),l=Object(c.a)(u,2),h=l[0],f=l[1],m=Object(s.useState)(""),b=Object(c.a)(m,2),p=b[0],A=b[1],C=Object(s.useState)(!1),y=Object(c.a)(C,2),S=y[0],x=y[1],I=Object(s.useState)(0),D=Object(c.a)(I,2),q=D[0],k=D[1],T=Object(s.useState)(0),E=Object(c.a)(T,2),F=E[0],N=E[1],P=Object(s.useState)(""),L=Object(c.a)(P,2),W=L[0],J=L[1];Object(s.useEffect)((function(){var e=+sessionStorage.getItem("currentQuestionIndex")||0,t=+sessionStorage.getItem("currentSetbackIndex")||0,n=+sessionStorage.getItem("score")||0;a(e),k(t),N(n)}),[]),Object(s.useEffect)((function(){sessionStorage.setItem("currentQuestionIndex",o)}),[o]),Object(s.useEffect)((function(){sessionStorage.setItem("currentSetbackIndex",q)}),[q]),Object(s.useEffect)((function(){sessionStorage.setItem("score",F)}),[F]);var R=function(e){p===e&&N(F+5),x(!1),k(q+1)};return Object(d.jsx)("div",{className:"container-fluid p-4 content",children:o===w.length?Object(d.jsx)(g,{score:F,name:t}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:["Hello ",t,". Welcome to the Flagship Event of DOT Club. All the Best...!!!"]}),Object(d.jsxs)("div",{children:["Score: ",F]}),!!W&&Object(d.jsxs)("div",{style:{color:"green",fontSize:"20px",fontWeight:"bold"},children:["Clue: ",W]}),Object(d.jsxs)("div",{className:"row no-gutters",children:[S&&O.map((function(e,t){return t===q&&Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:{color:"red",fontSize:"20px",fontWeight:"bold"},children:"Setback Question"}),Object(d.jsx)(j,{type:"setback",question:e,id:t,option:B,timerCount:20,onOptionSelection:function(e){return function(e){A(e.target.value)}(e)},onAnswerSubmit:function(){return R(e.answer)},onTimerEnd:function(){return R(null)}})]})})),!S&&w.map((function(e,t){return t===o&&Object(d.jsx)(j,{type:"question",question:e,id:t,option:v,timerCount:90,onOptionSelection:function(e){return function(e){f(e.target.value)}(e)},onAnswerSubmit:function(){return function(e,t){h===e?(N(F+10),J(t)):(x(!0),J("")),a(o+1)}(e.answer,e.clue)},onTimerEnd:function(){return a(o+1)}})}))]})]})})}var w=[{question:"If 2048 people entered a statewide singles tennis tournament,how many total matches would be played, including the championship match? ",answer:"D",clue:"C"},{question:"If you have a two-in-five chance of winning something,what are your odds? ",answer:"A",clue:"A"},{question:"Safe : Secure :: Protect : ? ",answer:"B",clue:"D"},{question:"Solving this code will provide energy to your friend - \n If \u2018-\u2019 means \u2018+\u2019, \n \u2018+\u2019 means \u2018-\u2019, \n \u2018*\u2019 means \u2018\xf7\u2019 and \n \u2018\xf7\u2019 means \u2018*\u2019 then which of the following will be the correct equation? ",answer:"D",clue:"B"},{question:"PARAJUMBLE \n A. Even if the Court is not motivated by an anti-African agenda, it is no less concerning that it acts, without fail, in concert with its North Atlantic backers. \n B. It simply reproduces a Western narrative of Russian aggression that justifies NATO\u2019s largest build-up of military forces in eastern Europe since the Cold War. \n C. That military intervention in Africa by former colonial powers has been followed, almost without exception, by the International Criminal Court\u2019s juridical intervention, leaves Africans understandably suspicious. \n D. And the Court\u2019s recent decision to launch an investigation into South Ossetia\u2014its first extra-African investigation\u2014is but of a piece with its earlier interventions, doing little to assuage that concern.",answer:"A",clue:""},{question:"Statements: A > B, B \u2265 C, C < D \n Conclusions: \n I. A > C \n II. A = C ",answer:"A",clue:"D"},{question:"A train moving at a speed of 80 km/hr crosses a pole in 7 seconds. Find the length of the train. ",answer:"C",clue:"A"},{question:"What is the probability of getting an even number when a dice is rolled ?",answer:"B",clue:"C"},{question:"Complete the series 2, 5, 9, 19, 37....... ",answer:"C",clue:"B"},{question:"PARAJUMBLE \n A. It conceived of the gods as blissful and immortal, yet material, beings made of atoms, inhabiting the empty spaces between worlds in the vastness of infinite space, too far away from the earth to have any interest in what man was doing. \n B. In modern popular usage, an epicure is a connoisseur of the arts of life and the refinements of sensual pleasures, especially of good food and drink, attributable to a misunderstanding of the Epicurean doctrine, as promulgated by Christian polemicists. \n C. It can be argued that the philosophy is atheistic on a practical level, but avoids the charge of Atheism on the theoretical level, thus avoiding the fate of Socrates, who was tried and executed for the Atheism of his beliefs. \n D. Epicureanism emphasizes the neutrality of the gods and their non-interference with human lives, although it does not deny the existence of gods, despite some tendencies towards Atheism.",answer:"C",clue:""},{question:"Pointing towards a person, Sita told her son that the person was the only son of his maternal grandmother. Who is that person to Sita\u2019s husband?",answer:"B",clue:"B"},{question:"What is the average of the first five multiples of 12 ?",answer:"A",clue:"C"},{question:"If January 1, 1996, was Monday, what day of the week was January 1, 1997 ?",answer:"B",clue:"A"},{question:"How many times do the hands of a clock coincide in a day ?",answer:"B",clue:"D"},{question:"PARAJUMBLE \n A. Interestingly, most creatures, including humans, vocalise using softer organs and membranes that tend to decompose instead of entering into the fossil record. \n B. The family of duck-billed dinosaurs known as Parasaurolophus had been at the centre of the paleo-acoustic conversation. \n C. They are herbivorous creatures named for the shape of their mouths, but better known for the large, bony crests arching over the back of their heads like a single blunted horn. \n D. Parasaurolophus is a rarity in this regard, as no other animal has been known to dedicate so much hard, fossil-friendly tissue to making noise.",answer:"",clue:""}],v=[["A. 2049","B. 2050","C. 2045","D. 2047"],["A. 2/3","B. 4/3","C. 3/2","D. 3/4"],["A. Lock","B. Guard","C. Sure","D. Conserve"],["A. 10 + 5 - 14 \xf7 10 * 15 = 158","B. 30 + 5 + 14 - 10 * 15 = 122","C. 30 - 5 + 14 \xf7 10 * 15 = 162","D. 30 * 5 - 4 \xf7 10 + 15 = 31"],["A. CADB","B. CBDA","C. ABDC","D. ABCD"],["A. Only I is true","B. Only II is true","C. Either I or II true","D. Neither I nor II is true","E. Both I and II are true"],["A. 150 m","B. 165 m","C. 175 m","D. 170 m"],["A. 1/5","B. 1/2","C. 1/3","D. 1/4"],["A. 76","B. 74","C. 75","D. None of these"],["A. DCBA","B. CBDA","C. DACB","D. BACD"],["A. Father-in-law","B. Brother-in-law","C. Brother","D. Father"],["A. 36","B. 38","C. 40","D. 42"],["A. Thursday","B. Wednesday","C. Friday","D. Sunday"],["A. 24","B. 22","C. 23","D. 21"],["A. DBCA","B. BCAD","C. BDAC","D. DCBA"]],O=[{question:"The following is not a NASA space shuttle ?",answer:"B"},{question:"The first flight of the space shuttle program by NASA was launched in ?",answer:"B"},{question:"First human to travel into space ?",answer:"A"},{question:"The observation of objects in space, known as ?",answer:"A"},{question:"First spacewalk by living being ?",answer:"B"},{question:"The first animal sent in orbit ?",answer:"A"},{question:"The first successful human spaceflight was ?",answer:"B"},{question:"The first American person launched into space ?",answer:"A"},{question:"The first human-made object to orbit ?",answer:"B"},{question:"First moon landing mission was launched by ?",answer:"A"},{question:"First space station ?",answer:"B"},{question:"First moon landing mission ?",answer:"A"}],B=[["A. Challenger","B. Fortuner"],["A. 1980","B. 1981"],["A. Yuri Gagarin","B. Vladimir Komarov"],["A. Astronomy","B. Telescopy"],["A. Yuri Gagarin","B. Aleksei Leonov"],["A. Dog","B. Cat"],["A. Apollo 1","B. Vostok 1"],["A. Alan Shepard","B. Neil Armstrong"],["A. Apollo 1","B. Sputnik 1"],["A. USA","B. USSR"],["A. Sputnik 1","B. Salyut 1"],["A. Apollo 11","B. Sputnik 1"]];var C=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",element:Object(d.jsx)(f,{})}),Object(d.jsx)(r.a,{path:"/question",element:Object(d.jsx)(A,{})})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),s(e),i(e),o(e),a(e)}))},S=(n(61),n(29));a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(S.a,{children:Object(d.jsx)(C,{})})}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.70584060.chunk.js.map