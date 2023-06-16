const homeLoader = () => {    
    const dynContent = document.querySelector('.changing');

    //DYNAMIC CONTENT
    const textContent = document.createElement('div');
    textContent.className = 'text';
    const copy = document.createElement('p');
    const imgContent = document.createElement('div');
    imgContent.className = 'img-div';
    const fpImg = document.createElement('img');
    fpImg.classList.add('fp-image');

    //edit below to change page content
    copy.textContent = 'This is a fantastic restaurant. It is made by humans, for robots. Don\'t be turned off by the idea of robots, or by the idea that robots might want to eat food too. Just enjoy it for what it is... the finest nuts, bolts, wires, and grease crypto can buy served up piping cold and ready to consume to the advanced machines destined to become our eventual robotic overlords, taking the world as we know it and turn it into a grey hellscape devoid of pesky human emotion and programming typos.';
    fpImg.src = './imgs/robot.jpg';

    //don't edit beyond this line
    textContent.appendChild(copy);
    imgContent.appendChild(fpImg);
    dynContent.appendChild(imgContent);
    dynContent.appendChild(textContent);
};

export { homeLoader };