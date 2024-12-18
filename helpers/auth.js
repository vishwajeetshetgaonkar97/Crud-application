function isAuthenticated(req, res, next) {
    if (req.user) {
        console.log('User is authenticated');
        next();
    } else {
        res.redirect('/login');
    }
}

module.exports = { isAuthenticated };