

export function ValidateProducts(req, res, next) {

    const { name, description, price } = req.body;

    if(!name | !description | !price) {
        return res.status(422).json({ "message":"The fields must be filled in." })
    }

    next();
}

