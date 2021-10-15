function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'block';
    document.body.style.owerflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) {
        clearTimeout(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.owerflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach((item) => {
        item.addEventListener('click', () => openModal(modalSelector,modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.style.display === 'block') {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight) {
            openModal(modalSelector,modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export{closeModal};
export {openModal};