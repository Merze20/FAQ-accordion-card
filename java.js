document.querySelectorAll('.acc_question').forEach((item) =>{
    item.addEventListener('click', (event) => {
        console.log('click!');
        let accCollapse = item.nextElementSibling;

        if(!item.classList.contains('collapsing')){

            if (!item.classList.contains('open')){
                console.log('toggle acc button');
                accCollapse.style.display = 'block';
                let accHeight = accCollapse.clientHeight;
                console.log(accHeight);

                setTimeout(() => {
                    accCollapse.style.height = accHeight + 'px';
                    accCollapse.style.display = '';
                }, 1);

                accCollapse.classList = 'acc_collapse collapsing';
                
                setTimeout(() =>{
                    console.log('open acc content');
                    accCollapse.classList = 'acc_collapse collapse open';
                }, 300);
            }

            else {
                accCollapse.classList = 'acc_collapse collapsing';

                setTimeout(() => {
                    accCollapse.style.height = '0px';
                }, 1);

                setTimeout(() => {
                    console.log('close acc content');
                    accCollapse.classList = 'acc_collapse collapse';
                    accCollapse.style.height = '';
                }, 300);
            }
            item.classList.toggle('open');
        }
    });
});