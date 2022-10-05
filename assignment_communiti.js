const EncryptRsa = require('encrypt-rsa').default;
const encryptRsa = new EncryptRsa();

const { privateKey: privateKeyA, publicKey: publicKeyA } = encryptRsa.createPrivateAndPublicKeys();
const { privateKey: privateKeyB, publicKey: publicKeyB } = encryptRsa.createPrivateAndPublicKeys();

// userB send message to userA in encrypted form 
// by using publickey of userA- publicKeyA

const encryptedText1 = encryptRsa.encryptStringWithRsaPublicKey({ 
    text: "Hi, I'm userB using your publickey: publickeyA",   
    publicKey: publicKeyA,
});
console.log("publicKeyA: ",encryptedTextA);

// userA received encrypted text from userB and 
// able to decrypt this text using their privatekey- privateKeyA


const decryptedTextA = encryptRsa.decryptStringWithRsaPrivateKey({ 
    text: encryptedTextA,
    privateKey: privateKeyA
  });
console.log("privateKeyA: ",decryptedTextA);

// user1 send text to userB in encrypted form 
// by using publicKey of userB- publicKeyB

const encryptedTextB = encryptRsa.encryptStringWithRsaPublicKey({ 
    text: "Hello, I'm userA using your publickey: publickeyB",   
    publicKey: publicKeyB,
});
console.log("publicKeyB: ",encryptedTextB);

// userB received encrypted text from userA and 
// able to decrypt this text using their privatekey- privatekeyB


const decryptedTextB = encryptRsa.decryptStringWithRsaPrivateKey({ 
    text: encryptedTextB,
    privateKey: privateKeyB
  });
console.log("privateKeyB: ",decryptedTextB);