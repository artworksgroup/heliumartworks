<template>
    <h3>Ventes</h3>
    <ul class="cards">
        <!-- Changer les images par des pseudo-element ::after -->
        <li class="card medias"><span class="card-content"><span class="card-title">Media vendus</span><span class="card-value">0</span></span><img src="../../assets/images/gallery.svg" alt=""></li>
        <li class="card sold"><span class="card-content"><span class="card-title">Ventes totales</span><span class="card-value">0 CFA</span></span><img src="../../assets/images/card-pos.svg" alt=""></li>
        <li class="card credits"><span class="card-content"><span class="card-title">Montant déjà récupérer</span><span class="card-value">11</span></span><img src="../../assets/images/add.svg" alt=""></li>
    </ul>
    <section class="history">
        <div class="empty">
            <img src="../../assets/images/EmptyState.svg" alt="">
            <p><span>Pas de medias vendus</span><br>Les medias vendus apparaîtrons ici</p>
        </div>
        <!-- <h3>Historique des téléchargements</h3>
        <table>
            <thead>
                <tr>
                    <th>Media</th>
                    <th class="filter-order">Type<img src="../../assets/images/arrow-3.svg" alt=""></th>
                    <th class="filter-order">Nom<img src="../../assets/images/arrow-3.svg" alt=""></th>
                    <th class="filter-order">Licence<img src="../../assets/images/arrow-3.svg" alt=""></th>
                    <th class="filter-order">Prix<img src="../../assets/images/arrow-3.svg" alt=""></th>
                    <th class="filter-order">Date<img src="../../assets/images/arrow-3.svg" alt=""></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="../../assets/images/image1.jpg" alt=""></td>
                    <td>images</td>
                    <td>alexander-shatov-_qsuER...</td>
                    <td>classique</td>
                    <td>1000</td>
                    <td>01/01/23</td>
                </tr>
                <tr>
                    <td><img src="../../assets/images/image2.jpg" alt=""></td>
                    <td>images</td>
                    <td>alexander-shatov-_qsuER...</td>
                    <td>classique</td>
                    <td>1000</td>
                    <td>01/01/23</td>
                </tr>
                <tr>
                    <td><img src="../../assets/images/image3.jpg" alt=""></td>
                    <td>images</td>
                    <td>alexander-shatov-_qsuER...</td>
                    <td>classique</td>
                    <td>1000</td>
                    <td>01/01/23</td>
                </tr>
                <tr>
                    <td><img src="../../assets/images/image4.jpg" alt=""></td>
                    <td>images</td>
                    <td>alexander-shatov-_qsuER...</td>
                    <td>classique</td>
                    <td>1000</td>
                    <td>01/01/23</td>
                </tr>
            </tbody>
        </table>
        <button>Voir toute l'historique</button> -->
    </section>
</template>

<style>

h3 {
    font-size: 32px;
    color: #0E0E2C;
}

h3 span {
    font-weight: 700;
}


div.main ul.cards {
    display: flex;
    column-gap: 30px;
    margin-top: 20px;
}

div.main ul .card {
    display: flex;
    width: 250px;
    height: 110px;
    justify-content: space-between;
    padding: 10px;
    font-size: 22px;
    border-radius: 8px;
}

div.main ul .card:first-child {
    background-color: #F5C183;
}

div.main ul .card.sold {
    background-color: #A2E3F8;
}

div.main ul .card.credits {
    background-color: #FABD9D;
}

.card .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 1;
}

.card .card-title {
    display: block;
    font-size: 20px;
}

.card .card-value {
    font-size: 35px;
}

.card img {
    width: 24px;
    height: 24px;
}

section.history {
    margin: 30px 0;
    position: relative;
}

section.history h3 {
    font-size: 24px;
}

section > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    text-align: center;
}

section > div p span {
    color: #0E0E2C;
    font-weight: 600;
}

/* section.history table {
    margin-top: 20px;
    width: 100%;
}

table thead {
    background-color: #ECF1F4;
}

thead th {
    padding: 15px 0; 
}

thead th.filter-order img {
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
}

table tr {
    text-align: left;
}

tbody tr:last-child {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 72.4%);
}

section.history button {
    margin: 20px auto;
    padding: 10px 30px;
    background-color: #0E0E2C;
    color: #fff;
    border-radius: 8px;
    position: absolute;
    left: 40%;
} */

</style>