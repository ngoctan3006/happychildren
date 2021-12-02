

export default function example(req, res, next) {
    console.log('example request')
    res.status(200).send({
        message: 'You request GET /example',
        body: req.body,
        query: req.query
    })
}
