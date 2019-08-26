/* eslint-disable linebreak-style */
import jwt from 'jsonwebtoken';

/**
 * @exports
 * @class authorization
 */
class Authorization {
  /**
     * @method getToken
     * @memberof Authorization
     * @param {object} req
     * @returns {string} token
     */
  static getToken(req) {
    const bearerToken = req.headers.authorization;
    const token = bearerToken && bearerToken.replace('Bearer ', '');

    return token;
  }

  /**
     * @method generateToken
     * @memberof Authorization
     * @param {object} user
     * @returns {string} token
     * expires in 24 hours
     */
  static generateToken({ ...user }) {
    const token = jwt.sign({ user }, process.env.SECRET, {
      expiresIn: 86400,
    });

    return token;
  }
}

export default Authorization;
