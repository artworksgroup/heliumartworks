<template>
    <header>
        <nav>
            <h1><img src="../assets/images/logo_hellium.png" alt="Logo d'helium"><a class="sr-only" href="#">Helium Artworks</a></h1>
            <form action="">
                <button class="stock dropdown">Stock Media <img src="../assets/images/arrow-down.svg" alt=""></button>
                <div class="search"><label for="search"></label><input type="search" name="search" id="search" placeholder="Rechercher"></div>
                <button type="submit"><span class="sr-only">Rechercher</span><img src="../assets/images/search-normal.svg" alt=""></button>
            </form>
            <ul>
                <li><a href="#">Gratuit</a></li>
                <li class="dropdown"><a href="#">Buisiness<img src="../assets/images/arrow-down-alt.svg" alt=""></a></li>
            </ul>
            <div class="avatar"><img src="../assets/images/avatar.jpg" alt=""></div>
        </nav>
    </header>
    
    <main>
        <aside>
            <h2 class="profile">
                <div class="user-infos">
                    <img src="../assets/images/avatar.jpg" alt="">
                    <a href="#"><span class="user-fullname">Jacob Jones</span><br><span class="username">@jacobjones24</span></a>
                </div>
                <button><span class="sr-only">Modifier</span><img src="../assets/images/edit-2.svg" alt=""></button>
            </h2>
            <nav>
                <ul>
                    <li><NuxtLink class="dashboard" to="/dashboard">Tableau de bord</NuxtLink></li>
                    <li><NuxtLink class="medias" to="/dashboard/media">Medias</NuxtLink></li>
                    <li><NuxtLink class="sales" to="/dashboard/sales">Ventes</NuxtLink></li>
                    <li><a class="downloads" href="#">Mes téléchargements</a></li>
                    <li><a class="profils" href="#">Profils</a></li>
                    <li><a class="settings" href="#">Paramètres</a></li>
                    <li><a class="users" href="#">Utilisateurs</a></li>
                    <li><a class="moderations" href="#">Modérations</a></li>
                    <li><a class="tickets" href="#">Ticket</a></li>
                    <li><a class="administration" href="#">Administration</a></li>
                </ul>
            </nav>
        </aside>
        <div class="main">
            <slot />
        </div>
    </main>
    <footer>
        <div>
            <ul class="links">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Service Client</a></li>
                <li><a href="#">Cagnotte Artworks</a></li>
            </ul>
        </div>
        <div class="social-media">
            <a href="#"><img src="../assets/images/helium_logo.svg" alt="Logo d'Helium Artworks"><span>HeliumArtworks</span></a>
            <ul>
                <li><a href="#"><img src="../assets/images/001-facebook-logo-button.svg" alt="Facebook icon"></a></li>
                <li><a href="#"><img src="../assets/images/002-twitter.svg" alt="Twitter icon"></a></li>
                <li><a href="#"><img src="../assets/images/linkedin.svg" alt="Linkedin logo icon"></a></li>
                <li><a href="#"><img src="../assets/images/004-vimeo-social-logo.svg" alt="Vimeo logo icon"></a></li>
                <li><a href="#"><img src="../assets/images/tiktok.svg" alt="Tiktok logo icon"></a></li>
                <li><a href=""><img src="../assets/images/Whatsapp.svg" alt="Whatsapp logo icon"></a></li>
            </ul>
        </div>
        <div>© Helium Artworks | 2022 - 2023. Tous droits réservés.</div>
    </footer>
</template>

<style>

    header, main {
        padding: 10px 40px;
    }

    header nav {
        display: flex;
        column-gap: 60px;
        justify-content: space-between;
    }

    nav .dropdown img {
        display: inline-block;
        width: 16px;
        margin-left: 5px;
        color: #0E0E2C99
    }
    /* header nav h1 {
        display: flex;
        align-items: center;
        column-gap: 5px;
    } */

    header nav form {
        display: flex;
        align-items: center;
        flex: 3 1 auto;
    }

    nav form .stock {
        display: flex;
        align-items: center;
        background-color: #0E0E2C;
        border-radius: 8px 0 0 8px;
        color: #fff;
        padding: 6px 12px;
    }

    nav form .search {
        height: 100%;
        width: calc(100% - 180px);
    }

    nav form .search input {
        background-color: #ECF1F4;
        width: 100%;
        height: 100%;
        min-width: 250px;
        padding: 6px
    }

    header nav form button[type="submit"] {
        background-color: #FF0051;
        border-radius: 0 8px 8px 0;
        height: 100%;
        padding: 0 10px;
    }

    header nav ul {
        display: flex;
        align-items: center;
        column-gap: 30px;
    }

    header nav .avatar, nav .avatar img {
        height: 35px;
    }

    main {
        margin-top: 20px;
        display: flex;
        column-gap: 20px;
    }

    main aside {
        flex: 0 0 280px;
        padding: 30px 15px;
        box-shadow: 0px 0px 0px 0px #0000001A, 0px 5px 10px 0px #0000001A, -2px 19px 19px 0px #00000017, -4px 42px 25px 0px #0000000D, -7px 75px 30px 0px #00000003, -11px 117px 33px 0px #00000000;
    }

    aside .profile {
        display: flex;
        column-gap: 5px;
        align-items: center;
        justify-content: space-between;
    }

    .profile .user-infos img, .profile .user-infos a {
        display: inline-block;
        vertical-align: middle;
    }

    .profile .user-infos a {
        margin-left: 5px;
    }

    .profile .user-fullname {
        font-size: 20px;
        font-weight: 700;
        color: #0E0E2C;
    }

    .profile .username {
        color: #0E0E2C99;
        font-size: 14px;
    }

    aside nav {
        margin-top: 40px;
        color: #0E0E2C;
        font-size: 18px;
    }

    aside nav a {
        display: inline-block;
        width: 100%;
        padding: 4px 8px 4px 40px;
        border-radius: 8px;
        position: relative;
    }

    aside nav a::before {
        content: "";
        width: 24px;
        height: 24px;
        display: inline-block;
        padding: 4px 8px;
        border-radius: 8px;
        background-repeat: no-repeat;
        position: absolute;
        left: 8px;
        top: 15%;
    }

    aside nav a.dashboard::before {
        background-image: url("../assets/images/category.svg");
    }

    aside nav a.medias::before {
        background-image: url("../assets/images/gallery.svg");
    }

    aside nav a.sales::before {
        background-image: url("../assets/images/dollar-circle.svg");
    }

    aside nav a.downloads::before {
        background-image: url("../assets/images/gallery-import.svg");
    }

    aside nav a.profils::before {
        background-image: url("../assets/images/profile.svg");
    }

    aside nav a.settings::before {
        background-image: url("../assets/images/setting-2.svg");
    }

    aside nav a.users::before {
        background-image: url("../assets/images/profile-2user.svg");
    }

    aside nav a.moderations::before {
        background-image: url("../assets/images/tick-square.svg");
    }

    aside nav a.tickets::before {
        background-image: url("../assets/images/messages-2.svg");
    }

    aside nav a.administration::before {
        background-image: url("../assets/images/profile-add.svg");
    }



    aside nav ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 10px;
    }

    aside nav ul li {
        padding: 5px;
        border-radius: 8px;
    }

    aside nav .router-link-active,
    aside nav .router-link-active:hover,
    aside nav .router-link-active:active,
    aside nav .router-link-active:focus {
        background-color: #FF0051;
        color: #FFF;
    }

    div.main {
        width: 100%;
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
        margin-top: 30px;
    }

    section.history h3 {
        font-size: 24px;
    }

    section.history table {
        margin-top: 20px;
        width: 100%;
    }

    table thead {
        background-color: #ECF1F4;
    }

    section.history button {
        margin: 20px auto;
        padding: 10px 30px;
        background-color: #0E0E2C;
        color: #fff;
        border-radius: 8px;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;
        padding: 30px 20px;
        background-color: #0E0E2C;
        color: #fff;
    }

    footer .links {
        display: flex;
        column-gap: 10px;
    }

    footer .social-media {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    footer .social-media ul  {
        display: flex;
        column-gap: 20px;
        align-items: center;
        margin-top: 10px;
    }

    footer .social-media > a {
        display: flex;
        column-gap: 10px;
    }
</style>