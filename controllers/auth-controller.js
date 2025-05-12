import * as db from '../database/database-instance.js';

export function signUpUser(request, response) {
    response.json({
        'status': 'success',
        'message': 'User has successfully registered, updated my response now'
    });
}