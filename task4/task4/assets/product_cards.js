class Card {
    constructor(id, name, provider, src, desc) {
        this.id = id;
        this.name = name;
        this.provider = provider;
        this.src = src;
        this.desc = desc;
    }
}


function creatCards() {
    let cards = JSON.parse(window.localStorage.getItem("cards"));

    if (cards === null)
        return;

    for (let i = 0; i < cards.length; ++i) {
        const divCard = document.createElement("div");
        divCard.id = `card${i}`;
        divCard.setAttribute('class', "card");
        document.getElementsByClassName("card_l")[0].appendChild(divCard);

        const divCardContent = document.createElement("div");
        divCardContent.id = `cardContent${i}`;
        divCardContent.setAttribute('class', "card__content flex__column-start");
        document.getElementById(`card${i}`).appendChild(divCardContent);


        const divCardSubtitle = document.createElement("div");
        divCardSubtitle.id = `cardSubtitle${i}`;
        divCardSubtitle.setAttribute('class', "card__subtitle flex__space-between");
        document.getElementById(`cardContent${i}`).appendChild(divCardSubtitle);

        const divCardId = document.createElement("span");
        divCardId.id = `cardId${i}`;
        divCardId.textContent = `ID: ${cards[i].id}`;
        document.getElementById(`cardSubtitle${i}`).appendChild(divCardId);

        const divCardEdit = document.createElement("a");
        divCardEdit.id = `cardEdit${i}`;
        divCardEdit.textContent = "Изменить";
        divCardEdit.type = "edit";
        divCardEdit.addEventListener('click', onOpenEditForm);
        document.getElementById(`cardSubtitle${i}`).appendChild(divCardEdit);


        const divCardSubcontent = document.createElement("div");
        divCardSubcontent.id = `cardSubcontent${i}`;
        divCardSubcontent.setAttribute('class', "card__subcontent flex__start");
        document.getElementById(`cardContent${i}`).appendChild(divCardSubcontent);

        const divCardImg = document.createElement("img");
        divCardImg.id = `cardImg${i}`;
        divCardImg.src = `${cards[i].src}`;
        divCardImg.alt = `${cards[i].name}`;
        document.getElementById(`cardSubcontent${i}`).appendChild(divCardImg);

        const divCardName = document.createElement("span");
        divCardName.id = `cardName${i}`;
        divCardName.textContent = cards[i].name;
        divCardName.setAttribute('class', "card__name");
        document.getElementById(`cardSubcontent${i}`).appendChild(divCardName);

        const divCardProvider = document.createElement("span");
        divCardProvider.id = `cardDesc${i}`;
        divCardProvider.textContent = `Поставщик: ${cards[i].provider}`;
        divCardProvider.setAttribute('class', "card__provider");
        document.getElementById(`cardContent${i}`).appendChild(divCardProvider);

        const divCardDesc = document.createElement("span");
        divCardDesc.id = `cardDesc${i}`;
        divCardDesc.textContent = `Описание: ${cards[i].desc}`;
        divCardDesc.setAttribute('class', "card__desc");
        document.getElementById(`cardContent${i}`).appendChild(divCardDesc);
    }
}


function setupCards() {
    let dataArr = [
        new Card(1, "Свеча в банке", "Праздники", "https://avatars.mds.yandex.net/get-mpic/7650126/img_id8525734505786780032.jpeg/orig", "Свеча с запахом сданной сессии"),
        new Card(2, "Свеча маленькая", "Сессия", "https://i.pinimg.com/736x/aa/d7/d2/aad7d287094dc92ae8a7bc6174772b70.jpg", "С ароматом последней нервной клетки"),
        new Card(3, "Подсвечник", "Новый год", "//avatars.mds.yandex.net/i?id=6098d7faa8384cad3bb5a75789961425_l-5087196-images-thumbs&n=13", "То самое новогоднего настроения в октябре"),
        new Card(4, "Свеча больша", "Слезы", "//avatars.mds.yandex.net/i?id=89eedfc5b76ac8446b6daf21281af99c_l-5312449-images-thumbs&n=13", "Класический аромат 'А когда можно досдать?'"),
        new Card(5, "Свеча с деревянным фителем", "Боль", "//avatars.mds.yandex.net/i?id=9fc62ba56f52db6c56257b0590487105_sr-9181231-images-thumbs&n=13", "Хит сезона: 'Не ставьте 3, у меня стипендия'"),
    ];
    updateLS(dataArr);
    location.reload();
}

function onOpenEditForm(event) {
    let id = event.target.id.substring(8);
    let cards = JSON.parse(window.localStorage.getItem("cards"));
    let card = cards.at(id);
    document.getElementsByName('idEdit')[0].value = card.id;
    document.getElementsByName('nameEdit')[0].value = card.name;
    document.getElementsByName('providerEdit')[0].value = card.provider;
    document.getElementsByName('srcEdit')[0].value = card.src;
    document.getElementsByName('descEdit')[0].value = card.desc;
    document.getElementById("edit-btn").idx = id;
    document.getElementById("delete-btn").idx = id;
    openForm('editForm');
}


function addCard() {
    let cards = JSON.parse(window.localStorage.getItem("cards"));

    if (cards === null) {
        cards = [];
    }

    let id = document.getElementsByName('idCreate')[0].value;
    let name = document.getElementsByName('nameCreate')[0].value;
    let provider = document.getElementsByName('providerCreate')[0].value;
    let src = document.getElementsByName('srcCreate')[0].value;
    let desc = document.getElementsByName('descCreate')[0].value;

    if (id === "" || provider === "" || name === "" || src === "") {
        closeForm('createForm');
        return;
    }
    let card = new Card(id,
        name,
        provider,
        src,
        desc);

    cards.push(card);

    updateLS(cards);

    closeForm('createForm');
    location.reload();
}



function editC(event) {
    let cards = JSON.parse(window.localStorage.getItem("cards"));

    cards[event.target.idx].id = document.getElementsByName('idEdit')[0].value;
    cards[event.target.idx].name = document.getElementsByName('nameEdit')[0].value;
    cards[event.target.idx].provider = document.getElementsByName('providerEdit')[0].value;
    cards[event.target.idx].src = document.getElementsByName('srcEdit')[0].value;
    cards[event.target.idx].desc = document.getElementsByName('descEdit')[0].value;

    updateLS(cards);

    closeForm('editForm');
    location.reload();
}

function updateLS(cards) {
    window.localStorage.clear();
    window.localStorage.setItem('cards', JSON.stringify(cards));
}

function deleteC(event) {
    let cards = JSON.parse(window.localStorage.getItem("cards"));
    cards.splice(event.target.idx, 1);

    updateLS(cards);

    closeForm('editForm');
    location.reload();
}



const setupBtn = document.getElementById('setup-btn');
setupBtn.addEventListener('click', setupCards);

window.onload = creatCards;