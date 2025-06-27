const jwt = require('jsonwebtoken');

type GenerateTokenParams = {
    id: string;
    email: string;
}

export const generateToken = ({id, email} : GenerateTokenParams ) => {

    const token = jwt.sign(
        {id, email},
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
    );

    return token;
}