const page = document.querySelectorAll('.page');

//Hides and shows pages
page.forEach( link => {
    link.addEventListener('click', () => {

        //Hides and Shows page titles 
        const pageTitle = document.querySelectorAll('.page-title');
        pageTitle.forEach( title => {
            title.classList.add('hide');
            title.classList.remove('show');
            if (title.getAttribute("data-page-type") === link.getAttribute("data-page-type")) {
                title.classList.remove('hide');
                title.classList.add('show');
            }
        })

        // Hides and shows page content
        const content = document.querySelectorAll('[data-content]');
        content.forEach( content => {
            if (link.getAttribute("data-page-type") === 'dashboard') {
                content.classList.remove('inactive');
                content.classList.remove('active');
            } else {
                content.classList.add('inactive');
                content.classList.remove('active');
                if (content.getAttribute("data-content") === link.getAttribute("data-page-type")) {
                    content.classList.remove('inactive');
                    content.classList.add('active');
                }
            }
        })

    })
})