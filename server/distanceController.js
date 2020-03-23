require('dotenv').config();
const distance = require('google-distance-matrix');

module.exports = {
    getDistance: (req, res) => {
        const origins = req.body.origins;
        const destinations = req.body.destinations;
        distance.key(process.env.GOOGLE_API_KEY);
        distance.mode('driving');
        distance.units('imperial');
    
        distance.matrix(origins, destinations, function(err, distances) {
            if (err) {
                console.log ('error here', err)
            } else {
                console.log('distances = ', distances);
                res.json(distances.rows);
            }
        })
    }
}