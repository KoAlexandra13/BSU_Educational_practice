class Modals {
    closeModal(modal){
        let closeBtn = document.querySelector('.close');
        modal.classList.toggle('show-modal');
        closeBtn.addEventListener('click', toggleModal);
        window.addEventListener('click', windowOnClick);
    }

    createSingInModal() {
        let modal = document.getElementsByClassName('modal').item(0);
        modal.innerHTML = `
        <div class="modal-content">
            <span class="close">×</span>
            <div class="modal-logo">
                <img class="logo" src="resources/img/logo.png" alt="Logo">
            </div>
            <h1 class="modal-text">Sign in</h1>
            <form>
                <div class="username-input-div">
                    <i class="fa fa-user fa-lg" style="color: black" aria-hidden="true"></i>
                    <input class="username-input"  placeholder=" username">
                </div>
    
                <div class="password-input-div">
                    <i class="fa fa-asterisk fa-lg" style="color: black" aria-hidden="true"></i>
                    <input class="password" type="password" placeholder=" password">
                </div>
            </form>
            <p class="sign-in-warning">There is no such user. Try again.</p>
            <div class="load-more-posts">
                <button class="sign-in-modal-button"><strong>Sign in</strong></button>
            </div>
        </div>`;

        let modalSignInBtn = document.querySelector('.sign-in-modal-button');
        window.modals.closeModal(modal);
        modalSignInBtn.addEventListener('click', readInputFields);
    }

    buildDeleteModal(postId) {
        let modal = document.getElementsByClassName('modal').item(0);
        modal.innerHTML = ` 
         <div class="modal-content">
                <span class="close">×</span>
                <h1 class="modal-text">Are you sure you want to delete this post?</h1>
                <div class="load-more-posts">
                    <button class="sign-in-modal-button"><strong>Yes</strong></button>
                </div>
          </div>`;

        let yesBtn = document.querySelector('.sign-in-modal-button');
        window.modals.closeModal(modal);
        yesBtn.addEventListener('click', () => {
            window.view.removePost(postId);
            let modalContent = document.getElementsByClassName('modal-content').item(0);
            modalContent.remove();
            toggleModal();
        });
    }

    buildEditModal(){

    }

    createLogOutModal(){
        let modal = document.getElementsByClassName('modal').item(0);
        modal.innerHTML = ` 
         <div class="modal-content">
                <span class="close">×</span>
                <h1 class="modal-text">Are you sure you want out?</h1>
                <div class="load-more-posts">
                    <button class="sign-in-modal-button"><strong>Yes</strong></button>
                </div>
          </div>`;

        let yesBtn = document.querySelector('.sign-in-modal-button');
        window.modals.closeModal(modal);
        yesBtn.addEventListener('click', () => {
            window.view.changeUser();
            makePage();
            let modalContent = document.getElementsByClassName('modal-content').item(0);
            modalContent.remove();
            toggleModal();
        });

    }
}


(() => {
    window.modals = new Modals();
})();