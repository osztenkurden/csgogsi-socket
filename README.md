# CS:GO GSI Digest Socket

## What is it and how does it work?
It's kind of overlay for github.com/osztenkurden/csgogsi package - if you want to connect this package to socket.io server, this will make your life easier, for example - during creation of the HUD. Additionaly, it returnes all types of CSGOGSI package.

## Installing
### For Node and React
```npm install csgogsi-socket```

### For Browser

Not for now

## Example #1
```javascript
import GSISocket from 'csgogsi-socket';

const GSI = GSISocket('localhost:1337', 'update');

GSI.on('roundEnd', team => {
    console.log(`Team  ${team.name} win!`);
});
GSI.on('bombPlant', player => {
    console.log(`${player.name} planted the bomb`);
});
```

GSISocket() function takes two arguments - first, address of socket.io server, and second - name of the event that gives the raw CSGO GSI data.

It returns a CSOGSI object, so all methods from github.com/osztenkurden/csgogsi documentation will apply.