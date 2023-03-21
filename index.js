  function validEmail(emailAddress) {
            var atSymbol = emailAddress.indexOf("@");
            var dotSymbol = emailAddress.lastIndexOf(".");
            var spaceSymbol = emailAddress.indexOf(" ");
  
            if ((atSymbol != -1) &&
                (atSymbol != 0) &&
                (dotSymbol != -1) &&
                (dotSymbol != 0) &&
                (dotSymbol > atSymbol + 1) &&
                (emailAddress.length > dotSymbol + 1) &&
                (spaceSymbol == -1)) {
                 return true;
            } else {
                return false;
            }
        }

        module.exports = validEmail