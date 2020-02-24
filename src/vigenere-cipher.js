class VigenereCipheringMachine {
    encrypt(message, key) {
        if ((message === undefined) || (key === undefined)) throw new Error();
        let mes = message.toUpperCase(),
            clef = key.toUpperCase();
        let irer = -1;
        function getKeyChar(){
            if (irer+1 >= clef.length) {
                irer = 0;
            }
            else{
                irer++;
            }
            return irer;
        }
        let out = mes.split('').map((v,i,a)=>{
            if (!((v.charCodeAt(0) > 64) && (v.charCodeAt(0) < 91))) return v;
            return String.fromCharCode( ( v.charCodeAt(0) + clef.charCodeAt(getKeyChar()) - 130 ) % 26 +   65);
        });
        out = out.join('')
        return (this.direct) ? out : out.split('').reverse().join('');
    }

    decrypt(encryptedMessage, key, i) {
        if ((encryptedMessage === undefined) || (key === undefined)) throw new Error();
        let mes = encryptedMessage.toUpperCase(),
            clef = key.toUpperCase();
        let irer = -1;
        function getKeyChar(){
            if (irer+1 >= clef.length) {
                 irer = 0;
            }
            else{
                irer++;
            }
            return irer;
        }
        let out = mes.split('').map((v,i,a)=>{ 
            if (!((v.charCodeAt(0) > 64) && (v.charCodeAt(0) < 91))) return v;
            return String.fromCharCode(  ((v.charCodeAt(0) - clef.charCodeAt(getKeyChar())) + 26) % 26 +   65);
        })
        out = out.join('');
        return (this.direct) ? out : out.split('').reverse().join('');
    }
    constructor(dir = true){
        let a = arguments[0];
        if ((a!== true) && (a!== false) && (arguments.length === 1)) throw new Error();
        this.direct = dir;
    }
}

module.exports = VigenereCipheringMachine;
