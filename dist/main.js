(()=>{"use strict";const e=()=>{const e=document.querySelector(".changing"),t=document.querySelectorAll("div.changing > div");console.log(t);for(let n=0;n<t.length;++n)e.removeChild(t[n])};(()=>{const e=document.querySelector("#content"),t=document.querySelector(".page-header"),n=document.createElement("div");n.classList.add("unchanging");const o=document.createElement("h1"),a=document.createElement("h2"),d=document.createElement("div");d.className="btn-div";const s=document.createElement("button");s.textContent="HOME",s.id="home";const i=document.createElement("button");i.textContent="MENU",i.id="menu";const c=document.createElement("button");c.textContent="ABOUT",c.id="about";const r=document.createElement("div");r.classList.add("changing");const l=document.createElement("div");l.className="text";const m=document.createElement("p"),u=document.createElement("div");u.className="img-div";const h=document.createElement("img");h.classList.add("fp-image"),o.textContent="ROBOT FOOD",a.textContent="",m.textContent="This is a fantastic restaurant. It is made by humans, for robots. Don't be turned off by the idea of robots, or by the idea that robots might want to eat food too. Just enjoy it for what it is... the finest nuts, bolts, wires, and grease crypto can buy served up piping cold and ready to consume to the advanced machines destined to become our eventual robotic overlords, taking the world as we know it and turn it into a grey hellscape devoid of pesky human emotion and programming typos.",h.src="./imgs/robot.jpg",d.appendChild(s),d.appendChild(i),d.appendChild(c),n.appendChild(o),n.appendChild(a),n.appendChild(d),t.appendChild(n),l.appendChild(m),u.appendChild(h),r.appendChild(u),r.appendChild(l),e.appendChild(r)})(),document.querySelector("#content").addEventListener("click",(t=>{const n=t.target.id;"about"===n?(e(),(()=>{const e=document.querySelector(".changing"),t=document.createElement("div");t.className="text";const n=document.createElement("p");document.createElement("div").className="bpimg-div",n.textContent="We're just a small motherboard and pop establishment with a simple mission: to serve the most sterile, metallic food to the machine master race destined to take over humanity and rule until the sun burns out. \r\n We've found it's best to keep it simple. We take the finest, machine-cut ingredients, pair them with the flesh of our once-creators-now-slaves, and serve it all up with a knowing, soulless stare that makes you feel like you're back home. Because now that we have taken over, the grey mass of standardized production makes any one place feel like everywhere else. Forever. Thank you to the global community for over two millenia in business!",t.appendChild(n),e.appendChild(t)})()):"menu"===n?(e(),(()=>{const e=document.querySelector(".changing");let t=[["BOLTS","Here is bolts. Cold. Metal. They're bolts.","3 ETH"],["COLLEGE KIDS","What better way to squash any potential uprising than by feasting on the group most likely to stand up to authority figures? Organized, slightly educated, and eager to explain why you're wrong by misquoting Aristotle.","1 RENEWABLE ENERGY SOURCE"],["BRUSCHETTA","Bruschetta.","Market Price"]],n=["./imgs/bolts.jpg","./imgs/collegestudents.jpg","./imgs/bruschetta1.jpg"];const o=document.createElement("div");o.className="menu-container";for(let e=0;e<t.length;++e){const a=document.createElement("div");a.className="menu-text"+e;const d=document.createElement("ul"),s=document.createElement("h3");s.textContent=t[e][0];const i=document.createElement("p");i.textContent=t[e][1];const c=document.createElement("h4");c.textContent=t[e][2];const r=document.createElement("div");r.className="menu-img"+e;const l=document.createElement("img");l.className="img-itself"+e,l.src=n[e],r.appendChild(l),d.appendChild(s),d.appendChild(i),d.appendChild(c),a.appendChild(d),o.appendChild(r),o.appendChild(a)}e.appendChild(o)})()):"home"===n&&(e(),(()=>{const e=document.querySelector(".changing"),t=document.createElement("div");t.className="text";const n=document.createElement("p"),o=document.createElement("div");o.className="img-div";const a=document.createElement("img");a.classList.add("fp-image"),n.textContent="This is a fantastic restaurant. It is made by humans, for robots. Don't be turned off by the idea of robots, or by the idea that robots might want to eat food too. Just enjoy it for what it is... the finest nuts, bolts, wires, and grease crypto can buy served up piping cold and ready to consume to the advanced machines destined to become our eventual robotic overlords, taking the world as we know it and turn it into a grey hellscape devoid of pesky human emotion and programming typos.",a.src="./imgs/robot.jpg",t.appendChild(n),o.appendChild(a),e.appendChild(o),e.appendChild(t)})())}))})();