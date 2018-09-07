App = {
  web3Provider: null,
  keyParams: { keyBytes: 32, ivBytes: 16 },

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if(typeof web3 != 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    }
    else {
      App.web3Provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/');
      web3 = new Web3(App.web3Provider);
    }

    return App.createList();
  },

  createEntry: function() {
    var privKey = keythereum.create(App.keyParams).privateKey;
    var pubKey = ethereumjs.Util.privateToPublic(privKey);
    var address = ethereumjs.Util.publicToAddress(pubKey);

    return {
      private: '0x' + privKey.toString('hex'),
      public: '0x' + pubKey.toString('hex'),
      address: '0x' + address.toString('hex')
    }
  },

  showEntry: function() {
    var keys = App.createEntry();

    document.querySelector("#entry__priv").textContent = keys.private;
    document.querySelector("#entry__pub").textContent = keys.public;
    document.querySelector("#entry__addr").textContent = keys.address;
    web3.eth.getBalance(keys.address, function(e, result) {
      document.querySelector("#entry__bal").textContent = result;
    });
  },

  createList: function() {
      App.showEntry();
  }

}

App.init();
document.querySelector("#refresh-btn").addEventListener('click', () => {App.showEntry()});