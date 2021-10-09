exports.createPostValidator = (req, res, next) => {
    // title
    req.check('title', 'A title is required.').notEmpty();
    req.check('title', 'Title must be between 4-150 characters.').isLength({
        min: 4,
        max: 150
    });

    // body
    req.check('body', 'A post body is required.').notEmpty();
    req.check('body', 'Body must be between 4-2000 characters.').isLength({
        min: 4,
        max: 2000
    });

    // error handling
    // check for errors
    const errors = req.validationErrors();

    // if error show the first error as they occur
    if (errors) {
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    // proceed to next middleware
    next();
};

exports.userSignupValidator = (req, res, next) => {
    // name is not null and between 4 - 10 characters
    req.check('name', 'Name is required').notEmpty();
    req.check

    // email is not null, it is valid and normalized
    req.check('email', 'Email must between 3-32 characters.')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 2000
        });

    // check for password
    req.check('password', 'Password is required.').notEmpty();
    req.check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least six characters.')
        .matches(/\d/)
        .withMessage('Password must contain at least one number.');

    // check for errors
    const errors = req.validationErrors();

    // if error show the first error as they occur
    if (errors) {
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    // proceed to next middleware
    next();
};

exports.passwordResetValidator = (req, res, next) => {
    // check for password
    req.check('newPassword', 'Password is required').notEmpty();
    req.check('newPassword')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long.')
        .matches(/\d/)
        .withMessage('Must contain a number.')
        .withMessage('Password must contain a number.')

    // check for errors
    const errors = req.validationErrors();

    // if error, show first one as they happen
    if (errors) {
        const firstError = errors.map(error => error.msg[0]);
        return res.status(400).json({ error: firstError });
    }

    // proceed to next middleware
    next();
};