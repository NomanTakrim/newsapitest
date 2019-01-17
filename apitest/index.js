function myNews() {
    var newspaper = document.getElementById('newspaper').value;
    var heading = document.getElementById('heading');
    heading.innerHTML = newspaper;
    //alert(newspaper);
    const url =
        'https://newsapi.org/v2/top-headlines?sources=' + newspaper + '&apiKey=e081a5f22dec41069f547bb0d77d7e19';

    const box = document.getElementById('box');
    box.innerHTML = "";

    function createNode(element) {
        return document.createElement(element);
    }

    function append(parent, el) {
        return parent.appendChild(el);
    }

    fetch(url)
        .then((resp) => resp.json())

        .then(function (data) {
            let newsall = data.articles;
            //console.log(newsall);

            return newsall.map(function (news) {
                let col4 = createNode('div');
                col4.className = "col-md-4";
                let card = createNode('div');
                card.className = "card";
                //console.log(card);

                let body = createNode('p');
                let img = createNode('img');
                img.className = "card-img-top";

                let cardbody = createNode('div');
                cardbody.className = "card-body";

                let cardtitle = createNode('h5');
                cardtitle.className = "card-title";

                let cardtext = createNode('p');
                cardtext.className = "card-text";

                cardtitle.innerHTML = `${news.title}`;
                cardtext.innerHTML = `${news.description}`;
                img.src = `${news.urlToImage}`;

                let link = createNode('a');
                link.className = "btn btn-primary";
                link.href = `${news.url}`;
                link.innerHTML = "Read More";
                link.target = "_blank";

                append(box, col4);
                append(col4, card);
                append(card, img);
                append(card, cardbody);
                append(cardbody, cardtitle);
                append(cardbody, cardtext);
                append(cardbody, link);

            })
        })
        .catch(function (error) {
            console.log(error);
        });

}