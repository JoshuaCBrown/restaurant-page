const pageLoader = () => {    
    const content = document.querySelector('#content');

    //STATIC CONTENT
    const statContent = document.createElement('div');
    statContent.classList.add('unchanging');
    const header = document.createElement('h1');
    const subheader = document.createElement('h2');
    const btnDiv = document.createElement('div');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'HOME';
    homeBtn.id = 'home';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENU';
    menuBtn.id = 'menu'
    const navBtn = document.createElement('button');
    navBtn.textContent = 'ABOUT';
    navBtn.id = 'about'

    //DYNAMIC CONTENT
    const dynContent = document.createElement('div');
    dynContent.classList.add('changing');
    const textContent = document.createElement('div');
    textContent.className = 'text';
    const copy = document.createElement('p');
    const imgContent = document.createElement('div');
    imgContent.className = 'img-div';
    const fpImg = document.createElement('img');
    fpImg.classList.add('fp-image');



    //edit below to change page content

    header.textContent = 'ROBOT FOOD';
    subheader.textContent = 'food for robots';
    copy.textContent = 'This is a fantastic restaurant. It is made by humans, for robots. Don\'t be turned off by the idea of robots, or by the idea that robots might want to eat food too. Just enjoy it for what it is... the finest nuts, bolts, wires, and grease crypto can buy served up piping cold and ready to consume to the advanced machines destined to become our eventual robotic overlords, taking the world as we know it and turn it into a grey hellscape devoid of pesky human emotion and programming typos.';
    fpImg.src = './imgs/robot.jpg';

    //don't edit beyond this line

    btnDiv.appendChild(homeBtn);
    btnDiv.appendChild(menuBtn);
    btnDiv.appendChild(navBtn);
    statContent.appendChild(header);
    statContent.appendChild(subheader);
    statContent.appendChild(btnDiv);
    textContent.appendChild(copy);
    imgContent.appendChild(fpImg);
    dynContent.appendChild(imgContent);
    dynContent.appendChild(textContent);
    content.appendChild(statContent);
    content.appendChild(dynContent);

};

export { pageLoader };