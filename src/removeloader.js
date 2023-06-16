const removeContent = () => {
    const dynContent = document.querySelector('.changing');

    //get rid of old dynamic content

    const dynWithin = document.querySelectorAll("div.changing > div");
    console.log(dynWithin);
    for (let i = 0; i < dynWithin.length; ++i) {
        dynContent.removeChild(dynWithin[i]);
    };
};

export { removeContent };