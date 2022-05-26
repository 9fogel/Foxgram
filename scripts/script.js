const iconImageElements = document.querySelectorAll('.js-like');
const likeFilledIconUrl ='https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/posts/like-filled_zurlii.svg';
const likeEmptyIconUrl ='https://res.cloudinary.com/intellectfox/image/upload/v1629752957/fe/foxgram/posts/like_xw2apm.svg';

iconImageElements.forEach((iconImageEl) => {
    iconImageEl.addEventListener('click', (event) => {
        const likeCounterEl = event.target.parentElement.querySelector('.js-likecounter');
        const likeCounter = +likeCounterEl.textContent;
        
        if (event.target.src === likeFilledIconUrl) {
        event.target.src = likeEmptyIconUrl;
        likeCounterEl.textContent = likeCounter - 1;
        } else {
        event.target.src = likeFilledIconUrl;
        likeCounterEl.textContent = likeCounter + 1;
        }
    });
});