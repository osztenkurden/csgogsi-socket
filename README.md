![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)
![CI](https://img.shields.io/github/workflow/status/osztenkurden/csgogsi-socket/CI)
![Dependencies](https://img.shields.io/david/osztenkurden/csgogsi-socket)
![Downloads](https://img.shields.io/npm/dm/csgogsi-socket)
![Version](https://img.shields.io/npm/v/csgogsi-socket)

# CS:GO GSI Digest Socket

## What is it and how does it work?
It's kind of overlay for github.com/osztenkurden/csgogsi package - if you want to connect this package to socket.io server, this will make your life easier, for example - during creation of the HUD. Additionaly, it returnes all types of CSGOGSI package.

## Installing
```npm install csgogsi-socket```


## Example
```javascript
import { GSISocket } from 'csgogsi-socket';

const GSI = GSISocket('localhost:1337', 'update');

GSI.on('roundEnd', team => {
    console.log(`Team  ${team.name} win!`);
});
GSI.on('bombPlant', player => {
    console.log(`${player.name} planted the bomb`);
});
```

GSISocket() function takes two arguments - first, address of socket.io server, and second - name of the event that gives the raw CSGO GSI data.

It returns socket and CSOGSI object (and all interfaces from CSGOGSI), so all methods from github.com/osztenkurden/csgogsi documentation will apply.