const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/login");
});

router.get("/login", (req, res) => {
    res.render("auth/login");
});

router.get("/register", (req, res) => {
    res.render("auth/register");
});

router.get("/forgatePassword", (req, res) => {
    res.render("auth/forgatePassword");
});

router.get("/analytics", (req, res) => {
    res.render("dashboard/Analytics");
});

router.get('/card', (req, res) => {
    res.render('Components/card');
});
router.get('/perfectScrollbar', (req, res) => {
    res.render('Components/perfectScrollbar');
});

router.get('/divider', (req, res) => {
    res.render('Components/divider');
});

router.get('/HorizontalForm', (req, res) => {
    res.render('Forms/HorizontalForm');
});

router.get('/vertical', (req, res) => {
    res.render('Forms/vertical');
});

router.get('/basicInput', (req, res) => {
    res.render('Forms/basicInput');
});

router.get('/groupInput', (req, res) => {
    res.render('Forms/groupInput');
});

router.get('/Container', (req, res) => {
    res.render('layouts/Container');
});

router.get('/fluid', (req, res) => {
    res.render('layouts/fluid');
});

router.get('/withoutmenu', (req, res) => {
    res.render('layouts/withoutmenu');
});

router.get('/withoutNavbar', (req, res) => {
    res.render('layouts/withoutNavbar');
});

router.get('/account', (req, res) => {
    res.render('AccountSettings/account');
});

router.get('/connections', (req, res) => {
    res.render('AccountSettings/connections');
});

router.get('/notifications', (req, res) => {
    res.render('AccountSettings/notifications');
});

router.get('/icon', (req, res) => {
    res.render('components/icon');
});

router.get('/miscError', (req, res) => {
    res.render('Misc/miscError');
});

router.get('/underMaintenance', (req, res) => {
    res.render('Misc/underMaintenance');
});

router.get('/tables', (req, res) => {
    res.render('Forms/tables');
});

router.get('/accordion', (req, res) => {
    res.render('components/accordion');
});

router.get('/alerts', (req, res) => {
    res.render('components/alerts');
});

router.get('/badges', (req, res) => {
    res.render('components/badges');
});

router.get('/buttons', (req, res) => {
    res.render('components/buttons');
});

router.get('/carousel', (req, res) => {
    res.render('components/carousel');
});

router.get('/collapse', (req, res) => {
    res.render('components/collapse');
});

router.get('/breadcrumbs', (req, res) => {
    res.render('components/breadcrumbs');
});

router.get('/listGroups', (req, res) => {
    res.render('components/listGroups');
});

router.get('/modals', (req, res) => {
    res.render('components/modals');
});

router.get('/dropdowns', (req, res) => {
    res.render('components/dropdowns');
});

router.get('/footer', (req, res) => {
    res.render('components/footer');
});

router.get('/navbar', (req, res) => {
    res.render('components/navbar');
});

router.get('/offCanvas', (req, res) => {
    res.render('components/offCanvas');
});

router.get('/tabsPills', (req, res) => {
    res.render('components/tabsPills');
});

router.get('/progress', (req, res) => {
    res.render('components/progress');
});

router.get('/spinners', (req, res) => {
    res.render('components/spinners');
});

router.get('/toasts', (req, res) => {
    res.render('components/toasts');
});

router.get('/tooltipsPopovers', (req, res) => {
    res.render('components/tooltipsPopovers');
});

router.get('/typography', (req, res) => {
    res.render('components/typography');
});

module.exports = router;