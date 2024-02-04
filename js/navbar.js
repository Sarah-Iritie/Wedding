const nav = ` <header>
<nav>
    <div class="logo">
        <a href="index.html"><img src="../public/images/logo.png" alt="" id="wedding__logo"></a>
    </div>
        <div class="nav__links">
            <a href="index.html" class="nav__links__item nav__links__item--active">Home</a>
            <a href="events.html" class="nav__links__item">Events</a>
            <a href="accommodation.html" class="nav__links__item">Accommodation</a>
            <a href="travel.html" class="nav__links__item">Travel</a>
            <a href="dresscode.html" class="nav__links__item">Dress Code</a>
    </div>
</nav>
</header>
`
document.body.insertAdjacentHTML("afterbegin", nav);

const footer = ` <footer>
<small class="footer__copyright">&copy; 2024 WedAgency • All Rights Reserved</small>
</footer>`
document.body.insertAdjacentHTML("afterend", footer);