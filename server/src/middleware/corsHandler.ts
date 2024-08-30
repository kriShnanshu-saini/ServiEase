// import { type Request, type Response, type NextFunction } from 'express';

// export function corsHandler(req: Request, res: Response, next: NextFunction) {
//     res.header('Access-Control-Allow-Origin', req.header('origin'));
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     );
//     res.header('Access-Control-Allow-Credentials', 'true');

//     if (req.method === 'OPTIONS') {
//         res.header(
//             'Access-Control-Allow-Methods',
//             'PUT, POST, PATCH, DELETE, GET'
//         );
//         return res.status(200).json({});
//     }

//     next();
// }

import { type Request, type Response, type NextFunction } from 'express';

export function corsHandler(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', req.header('origin') || '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('Access-Control-Allow-Credentials', 'true');

    if (req.method === 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
        );
        // Return a response for preflight requests
        return res.status(200).json({});
    }

    // Call next() for other requests to continue to the next middleware
    return next();
}
