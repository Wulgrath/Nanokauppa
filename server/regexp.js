

module.exports = {

        FIRSTNAME: /^[\wäöå-]{2,24}$/,
        LASTNAME: /^[\wäöå-]{2,24}$/,
        EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        WALLET: /^[\w]{64}$/,
        AMOUNT: /^[0-9.]{1,7}$/,
        ACCOUNT: /^[\w ]{18,22}$/
};