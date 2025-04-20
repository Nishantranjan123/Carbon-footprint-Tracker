const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header

    if (!token) {
        console.log('No token provided, authorization denied.'); // Log for debugging
        return res.status(401).json({ msg: 'No token provided, authorization denied.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err); // Log the error
            return res.status(403).json({ msg: 'Token is not valid.' });
        }
        req.user = decoded; // Attach user info to request
        console.log('Decoded user:', req.user); // Log the decoded user
        next(); // Proceed to the next middleware or route handler
    });
};

module.exports = authenticate; // Export the middleware function