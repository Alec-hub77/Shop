const router = require('express').Router()
const stripe = require('stripe')("sk_test_51K45XLG6iY0QLlkSUJ0xRI0B08LSAnYq8eqe5i1PCIVcXF4ixT4lgorzKkONeRWla9XFiPPR7Se7Sfluxnwxiy6600XgAb3rZF")

router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).json(stripeErr)
        } else {
            res.status(200).json(stripeRes)
        }
    })
})

module.exports = router;