

const menuLoader = () => {    
    const dynContent = document.querySelector('.changing');

    //***MENU ITEMS AND IMAGES***
    //ADD MENU ITEMS HERE, EACH IN AN ARRAY
    let menuItems = [
        [
            'BOLTS',
            'Here is bolts. Cold. Metal. They\'re bolts.',
            '3 ETH',
        ],
        [
            'COLLEGE KIDS',
            'What better way to squash any potential uprising than by feasting on the group most likely to stand up to authority figures? Organized, slightly educated, and eager to explain why you\'re wrong by misquoting Aristotle.',
            '1 RENEWABLE ENERGY SOURCE',
        ],
        [
            'BRUSCHETTA',
            'Bruschetta.',
            'Market Price',
        ],
    ];
    
    let menuImgs = [
        './imgs/bolts.jpg',
        './imgs/collegestudents.jpg',
        './imgs/bruschetta1.jpg',
    ]

    //create parent menu container

    const menuContainer = document.createElement('div');
    menuContainer.className = 'menu-container';

    for (let i = 0; i < menuItems.length; ++i) {

        //create menu text div for item title, descript, price, in <ul>
        const menuText = document.createElement('div');
        menuText.className = 'menu-text' + i;
        
        const menuList = document.createElement('ul'); 

        const itemTitle = document.createElement('h3');
        itemTitle.textContent = menuItems[i][0];
        const itemDescription = document.createElement('p');
        itemDescription.textContent = menuItems[i][1];
        const itemPrice = document.createElement('h4');
        itemPrice.textContent = menuItems[i][2];

        //create menu img div for item picture
        const menuImg = document.createElement('div');
        menuImg.className = 'menu-img' + i;

        const itemImg = document.createElement('img');
        itemImg.src = menuImgs[i];
        
        //append children to associated parents all appended to menuContainer
        menuImg.appendChild(itemImg);
        menuList.appendChild(itemTitle);
        menuList.appendChild(itemDescription);
        menuList.appendChild(itemPrice);
        menuText.appendChild(menuList);

        menuContainer.appendChild(menuImg);
        menuContainer.appendChild(menuText);
   };
   //append menuContainer to the dynamic div
   dynContent.appendChild(menuContainer);
};

export { menuLoader };