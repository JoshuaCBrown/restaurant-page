const pageLoader = () => {    
    const content = document.querySelector('#content');
    const header = document.createElement('h1');
    const subheader = document.createElement('h2');
    const copy = document.createElement('p');
    const bgImg = document.createElement('img');

    //edit below to change page content

    header.textContent = 'ROBOT FOOD';
    subheader.textContent = 'food for robots';
    copy.textContent = 'This is a fantastic restaurant. It is made by humans, for robots. Don\'t be turned off by the idea of robots, or by the idea that robots might want to eat food too. Just enjoy it for what it is... the finest nuts, bolts, wires, and grease crypto can buy served up piping cold and ready to consume to the advanced machines destined to become our eventual robotic overlords, taking the world as we know it and turn it into a grey hellscape devoid of pesky human emotion and programming typos.';
    bgImg.src = './imgs/robot.jpg';

    //don't edit beyond this line

    content.appendChild(header);
    content.appendChild(subheader);
    content.appendChild(copy);
    // content.appendChild(bgImg);
    document.body.style.backgroundImage = "url('./imgs/robot.jpg')";
    document.body.classList.add('bg');
};

export { pageLoader };