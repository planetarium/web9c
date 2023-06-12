<p align="center">
  <img style="width: 512px" alt="Web9c Logo" src="https://github.com/planetarium/web9c/assets/6278999/fcbd020d-3ec4-49f8-8ed9-01763b287024">
</p>

# Web9c

Web9c is a JS/TS testbed repository for presenting how can we interact with Nine Chronicles from various JS runtime. (Browser / Node.js / Deno) using our latest JS/TS library support.

## Features
 - Generate, Import private/public key pair, address from [Web3 Secret Storage](https://ethereum.org/en/developers/docs/data-structures-and-encoding/web3-secret-storage/)
 - GENERATE ACTIONS **WITHOUT ACTIONTX QUERY!**
    - You still have to query out the NextTxNonce,
      but action can be generated 100% locally with the help of lib9c-wasm.
 - SIGN AND STAGE YOUR ACTION ON WEB BROWSER!
    - Currently Supported Actions:
      - Transfer NCG
      - Staking
 - Get data about your address.
    - NCG Balance, Next Tx Nonce, 
    - Avatar Data: Nickname, Level, AP
    - Inventories! : Equipment, Costumes, Consumable, Materials.
 

## @planetarium libraries
With a bit of exception, source code of our JS/TS Libraries are resides mostly in 
[libplanet/@planetarium,](https://github.com/planetarium/libplanet/tree/main/%40planetarium) so you can take a look about how these libraries are made, even contribute! if you need custom build for your needs, you can modify them and build just for you.

In case of installing dependancies for your project, [you can search on npm with `@planetarium`](https://www.npmjs.com/search?q=%40planetarium)


### [@planetarium/lib9c-wasm](https://github.com/planetarium/lib9c-wasm)

Used for Action Generation.

We interoped original C# lib9c source code into WASM. so we can call native action builder from JS/TS. with the right parameters (i.e. PlainValue) given, we can get same **bencodex** encoded action without handling C#.

### [@planetarium/bencodex](https://github.com/planetarium/bencodex.js)

Data Serialization/Deserialization

If you have ever interacted with our chain directly using GraphQL, you probably have encountered this format. we recently re-wrote bencodex javascript implementation, with much more robust and comprehensive code, less hassle for handling bencodex on JS/TS environment.

> **Warning**  
> when you try to install bencodex library, we recommend '@planetarium/bencodex' instead of just 'bencodex'. 'bencodex' support has been deprecated. 

WIP
