const assert = require('assert');
const axios = require('axios');

describe('Users', function () {
  describe('#findOne()', function () {
    it('should return -1', async function () {
      const vResult = await axios.default.get('http://localhost:3000/users/vunb');
      const vUser = vResult.data;
      assert.equal(vUser.phone, '0987654321');
    })

  })
})
