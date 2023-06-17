const aboutLoader = () => {
    const dynContent = document.querySelector('.changing');

    //DYNAMIC CONTENT
    const textContent = document.createElement('div');
    textContent.className = 'text';
    const copy = document.createElement('p');
    const imgContent = document.createElement('div');
    imgContent.className = 'bpimg-div';
    // const bpImg = document.createElement('img');
    // bpImg.classList.add('bp-image');

    //edit below to change page content
    copy.textContent = 'We\'re just a small motherboard and pop establishment with a simple mission: to serve the most sterile, metallic food to the machine master race destined to take over humanity and rule until the sun burns out. \r\n We\'ve found it\'s best to keep it simple. We take the finest, machine-cut ingredients, pair them with the flesh of our once-creators-now-slaves, and serve it all up with a knowing, soulless stare that makes you feel like you\'re back home. Because now that we have taken over, the grey mass of standardized production makes any one place feel like everywhere else. Forever. Thank you to the global community for over two millenia in business!';
    // bpImg.src = './imgs/bpimg.jpg';

    //don't edit beyond this line
    textContent.appendChild(copy);
    // imgContent.appendChild(bpImg);
    // dynContent.appendChild(imgContent);
    dynContent.appendChild(textContent);
};

export { aboutLoader };
