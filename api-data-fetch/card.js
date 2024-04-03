document.addEventListener('DOMContentLoaded', ()=>{
    const cardContainer = document.querySelector('#cardContainer');
    // const showMore = document.querySelector('.showMore');
    const datas = [];
     
    // filter data base on what the user type in
    const filteredData = (searchItems) =>{
        const newData = datas.filter(data=> 
                data.title.toLowerCase().includes(searchItems.toLowerCase())
            )
       renderCountry(newData)
    }

    // function to map and render cardlists of blog post
    const renderCountry = (countries) =>{
        showMore.style.display='block'
        cardContainer.innerHTML = ''
        countries.forEach(country => {
            const card = createCard(country)
            cardContainer.appendChild(card)
        });
        hide()
    }   

    // display some amout to the UI and hide the rest 
    let initialCard = 12;
    let visibleCard = initialCard;
    const hide = () => {
        getDataList().forEach((card, index) =>{
            if (index > initialCard) {
                card.style.display = 'None';
            }
        })
        
    }

    function getDataList() {
        let dataList = document.querySelectorAll('.cardList');
        return dataList
    }

    // show more of the blog post button when clicked
    const showMore = document.querySelector('.showMore')
    showMore.addEventListener('click', function() {
         const totalCardList = getDataList().length;
         for (let i = visibleCard; i < Math.min(visibleCard + initialCard, totalCardList); i++) {
            getDataList()[i].style.display = 'block';
         }
         visibleCard += initialCard
         
    // hide the showmore if there is no more blg post avialable
         if (visibleCard >= totalCardList) {
            showMore.style.display = 'none'
        }
    })  

    // function that create a new cardlist container
    const createCard = (cardData)=>{
        // create the detalis container 
        const detalis = document.createElement('div');
        detalis.classList.add('cardList')

        // create blog id
        const cId = document.createElement('p')
        cId.textContent = `Blog ${cardData.id}`;
        cId.classList.add('cId');
        detalis.appendChild(cId);

        // create country name 
        const cName = document.createElement('h2')
        cName.textContent = cardData.title;
        cName.classList.add('cName');
        detalis.appendChild(cName);

        // create country porpulation 
        const blog = document.createElement('p')
        blog.textContent = cardData.body;
        blog.classList.add('blog');
        detalis.appendChild(blog);

        return detalis;
    }

     // input functionaty
     const search = document.getElementById('src');
    
     search.addEventListener("input", function (e) {
         const searchTerm = e.target.value
         filteredData(searchTerm)
         if (searchTerm != '') {
            clear.style.display = 'block'
         }else{
            clear.style.display = 'none'
         }
     })

    // function clear search but not done because the ui is not being updated
        const clear = document.querySelector(`.clear`);
        clear.addEventListener('click',()=>{
            search.value='';
        }) 

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
        Array.prototype.push.apply(datas, data)
       renderCountry(data);
    //    cardContainer.removeChild(loading); // Remove loading message after fetching
    })
    .catch(error=>{
        const errors = document.createElement('p')
        errors.classList.add('errors');
        errors.textContent = 'check your internet connection and try again'
        cardContainer.appendChild(errors)
        console.log(error);
    }) 

    const loading = document.createElement('p')
    if (datas.length == 0) {
        loading.classList.add('loading');
        loading.textContent = 'Loading........'
        cardContainer.appendChild(loading)
        return false
    }

   
});    
