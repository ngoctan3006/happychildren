export default function example(req, res, next) {
    res.status(200).send({
        message: 'You request GET /example',
        body: req.body,
        query: req.query
    })
}
