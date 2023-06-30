# Get Started

## Prerequisite

 - Git
 - JavaScript Runtime / Package Manager
   - [Node.js]([https://nodejs.org/en](https://nodejs.org/en))
   - [yarn](https://yarnpkg.com/getting-started/install)
   - [pnpm](https://pnpm.io/)

## Clone repository

```bash
# Clone web9c repository.
git clone git@github.com:planetarium/web9c.git
cd web9c
```

## Install dependencies

```
# Use Your Prefered package manager to install dependencies.
# our project uses Yarn by default, But other managers are also usuable.

# for yarn :
yarn
yarn dev

# for npm : 
npm install
npm run dev

# for pnpm :
pnpm
pnpm dev
```

This should print :
```

  VITE v4.3.8  ready in 834 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

## Open web9c in your browser ~~link source~~

After you boot Vite in development mode, access to `http://localhost:3000/` or else port you modified on browser.

<img width="1512" alt="image" src="https://github.com/planetarium/web9c/assets/26626194/6c422adf-917c-4f38-9af9-a5881378cec4">


## Import your keystore file ~~link source~~

> **Note**  
> This application **NEVER** uploads your keystore file to network, whole decryption, signing, encryption happends on client-side, and only send requests to RPC Nodes to get *NextTxNonce* (Required to create *Tx* offline) and *Staging Tx*. I recommend you to not run following stage on publically used computer or network.

In the view, press the *Import your own key* button. Then you will see the below screen and you need your own keystore file.

If you have run Nine Chronicles, you may have your own key file in the keystore path. The keystore path is different each platform. (You can see [docs.libplanet.io#Web3KeyStore.DefaultKeyStore](https://docs.libplanet.io/1.4.0/api/Libplanet.KeyStore.Web3KeyStore.html#Libplanet_KeyStore_Web3KeyStore_DefaultKeyStore))

 - Linux/macOS:	`$HOME/.config/planetarium/keystore`
 - Windows: `%AppData%\planetarium\keystore`

After finishing booting Lib9c WASM, you will see the below screen:

<img width="1512" alt="image" src="https://github.com/planetarium/web9c/assets/26626194/93234674-3f19-44c7-a4d2-299c146c2561">

Click the `Select a keyfile...` and choose your keyfile:

<img width="1512" alt="image" src="https://github.com/planetarium/web9c/assets/26626194/10dc5332-36c9-4b4d-aaab-d9afae115414">

Type its password:

<img width="1512" alt="image" src="https://github.com/planetarium/web9c/assets/26626194/aa5194ca-935c-42d7-93d8-97a9bd5f7d48">

Click the `Authenticate` button then it will navigate to main page.

[SCREENSHOT: UNDER THE CONSTRUCTION]

## Choose endpoint

When entering the main page, you may see the list of endpoints on the left seciton. You can choose an endpoint to use for staging transaction.

[SCREENSHOT: UNDER THE CONSTRUCTION]

## Choose avatar to use

You can probably see the Avatar part in the middle. There are your avatars, created while playing Nine Chronicles. And you can choose the specific avatar to be used in transactions.

[SCREENSHOT: UNDER THE CONSTRUCTION]

If you select the avatar you want, it will have a colored background, and if you press again to cancel, it will return to a white background.

[SCREENSHOT: UNDER THE CONSTRUCTION]

## Fill out the *Action* form

We call them actions, like fighting a battle or selling something, and we provide them in the form of a form to fill in the appropriate fields for the action. Simply select the desired behavior from the Select box and fill in the form that is provided.
 
Consider the case of a Transfer Asset, an action that sends money. We have Recipient, Amount, and Memo, which are the address to send money to, the amount to send, and a memo. For example, let's fill them with "0x0000000000000000000000000000000000000000", 100, and "MEMO".

You'll then see a "Get Bencodex" button, which when pressed will get the hex string value of the action to the clipboard in a serialization format called Bencodex.

## Customize and build transaction

Now let's move on to the Transaction part on the right. This is where you can customize the details of the transaction. You may want to refer to https://docs.libplanet.io/2.3.0/api/Libplanet.Tx.Transaction.html를 for more information about the fields in a Transaction. Add and modify as needed to finalize your desired transaction.

Pressing the "Bencodex" button will get the transaction serialized to Bencodex, and pressing the "Stage" button will send the created transaction to the endpoint selected in the Endpoint view to be included in the block. Finally, we can do the action we want.

[SCREENSHOT: UNDER THE CONSTRUCTION]

## See the transaction's status

After staging a transaction, you can see if the transaction is staged, successful, or failed in the "Transaction Status" section in the lower right corner. You can also click to jump to the 9cscan to see more detailed values.

[SCREENSHOT: UNDER THE CONSTRUCTION]
