
# guedesCrypt

## Library for string encryption in nodejs

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

guedesCrypt is a lightweight library for encryping strings in nodejs

##  Features

- Encrypt your strings with a secret salt defined by you(Do not share this salt as it is the key to decrypt the string)

- Decrypt your encrypted strings with the same salt. (Using a different salt from the encryption one will result in erronous strings)

##  Installation

guedesCrypt requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh

cd [yourproject]

npm i guedes-crypt

```
##  Usage
To encrypt a String you need a secret salt to use in the guedesEncrypt function

```sh

let string = "This is the string I want to encrypt"
let salt = "THIS IS MY SECRET SALT"

let encryptedString = guedesEncrypt(salt,string);
// This will result in '407c7d67347d6734607c71346760667d7a73345d3463757a6034607b34717a77666d6460'

```

To decrypt a String you need the same secret salt used in its encryption as well as the encrypted string

```sh

let decryptedString= guedesDecrypt(salt,encryptedString );
// This will result in 'This is the string I want to encrypt'

```

##  License

MIT

**Fuck you Rui**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[dill]: <https://github.com/joemccann/dillinger>

[git-repo-url]: <https://github.com/joemccann/dillinger.git>

[john gruber]: <http://daringfireball.net>

[df1]: <http://daringfireball.net/projects/markdown/>

[markdown-it]: <https://github.com/markdown-it/markdown-it>

[Ace Editor]: <http://ace.ajax.org>

[node.js]: <http://nodejs.org>

[Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>

[jQuery]: <http://jquery.com>

[@tjholowaychuk]: <http://twitter.com/tjholowaychuk>

[express]: <http://expressjs.com>

[AngularJS]: <http://angularjs.org>

[Gulp]: <http://gulpjs.com>

[PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>

[PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>

[PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>

[PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>

[PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>

[PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

-   [](https://github.com/ "GitHub")© 2021 GitHub, Inc.

-   [Terms](https://docs.github.com/en/github/site-policy/github-terms-of-service)
-   [Privacy](https://docs.github.com/en/github/site-policy/github-privacy-statement)
-   [Security](https://github.com/security)
-   [Status](https://www.githubstatus.com/)
-   [Docs](https://docs.github.com/)
-   [Contact GitHub](https://support.github.com/?tags=dotcom-footer)
-   [Pricing](https://github.com/pricing)
-   [API](https://docs.github.com/)
-   [Training](https://services.github.com/)
-   [Blog](https://github.blog/)
-   [About](https://github.com/about)
