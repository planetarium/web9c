# How to play

## Prerequisites

 - [yarn](https://yarnpkg.com/getting-started/install)

## Clone repository

```
$ git clone https://github.com/planetarium/web9c
Cloning into 'web9c'...
remote: Enumerating objects: 714, done.
remote: Counting objects: 100% (188/188), done.
remote: Compressing objects: 100% (129/129), done.
remote: Total 714 (delta 60), reused 128 (delta 52), pack-reused 526
Receiving objects: 100% (714/714), 35.36 MiB | 21.78 MiB/s, done.
Resolving deltas: 100% (318/318), done.
$ cd web9c 
```

You can copy and paste the below one:

```
git clone https://github.com/planetarium/web9c
cd web9c
```

## Install dependencies

```
$ yarn
➤ YN0000: ┌ Resolution step
➤ YN0060: │ web9c@workspace:. provides @planetarium/account (p002d7) with version 1.3.0, which doesn't satisfy what @planetarium/account-web3-secret-storage requests
➤ YN0000: │ Some peer dependencies are incorrectly met; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code
➤ YN0000: └ Completed
➤ YN0000: ┌ Fetch step
➤ YN0013: │ yallist@npm:4.0.0 can't be found in the cache and will be f
➤ YN0013: │ yaml@npm:2.3.0 can't be found in the cache and will be fetc
➤ YN0013: │ yocto-queue@npm:0.1.0 can't be found in the cache and will 
➤ YN0013: │ yocto-queue@npm:1.0.0 can't be found in the cache and will 
➤ YN0013: │ zod@npm:3.21.4 can't be found in the cache and will be fetc
➤ YN0000: └ Completed in 16s 16ms
➤ YN0000: ┌ Link step
➤ YN0007: │ esbuild@npm:0.17.19 must be built because it never has been before or the last one failed
➤ YN0007: │ @swc/core@npm:1.3.59 [a32c0] must be built because it never has been before or the last one failed
➤ YN0000: └ Completed in 4s 693ms
➤ YN0000: Done with warnings in 20s 860ms
```

You can copy and paste the below one:

```
yarn
```

## Run

```
$ yarn dev

  VITE v4.3.8  ready in 834 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

You can copy and paste the below one:

```
yarn dev
```

## Open web9c in your browser [[source](https://github.com/planetarium/web9c/blob/main/src/views/WelcomeView/index.tsx)]

When you ran `yarn dev`, it showed you its link to access (e.g., `http://localhost:5173/`). Open the link in your browser.

<img width="1624" alt="image" src="https://github.com/planetarium/web9c/assets/26626194/b421f5e2-906e-4914-96a9-93e80e3f6096">

## Import your keystore file [[source](https://github.com/planetarium/web9c/blob/main/src/views/ImportView/index.tsx)]

In the view, press the *Import your own key* button. Then you will see the below screen and you need your own keystore file.

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/9217688d-b8f0-49a8-b2b6-5118c1f6919a">

If you have run Nine Chronicles, you may have your own key file in the keystore path. The keystore path is different each platform. (You can see [docs.libplanet.io#Web3KeyStore.DefaultKeyStore](https://docs.libplanet.io/1.4.0/api/Libplanet.KeyStore.Web3KeyStore.html#Libplanet_KeyStore_Web3KeyStore_DefaultKeyStore))

 - Linux/macOS:	`$HOME/.config/planetarium/keystore`
 - Windows: `%AppData%\planetarium\keystore`

Or you can open the directory with Nine Chronicles launcher's feature. Press the *Settings* button and you may see the *Open keystore Folder* button. Press it.

![Image](https://user-images.githubusercontent.com/26626194/245649555-ae523d6f-ff6a-492b-af1f-55e358012ca7.png)

Then it'll show you the keystore folder in your explorer (Finder in macOS).

<img width="1032" alt="image" src="https://github.com/planetarium/9c-launcher/assets/26626194/97781ad9-ffc5-4042-aa1b-fc82bfac79b1">

Drag the keystore file or, press the *Browse* button and select the keystore file.

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/f0473151-0522-4c02-bad7-bfbea0da42ea">

Press the *Import Key* button then you will see the below screen:

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/c18093a9-bebf-4213-b15d-dc29d2fae711">

## Login with your key [[source](https://github.com/planetarium/web9c/blob/main/src/views/LoginView/index.tsx)]

Login is simple. Input your password and press the *Login* button.

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/8ddd63f7-e0fa-48c1-a02f-2fef670d8ee8">

Then it will you navigate to the lobby view.

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/61165fb2-c0c5-4f2f-8d06-aa92108a12b0">

## Transfer Asset [[source](https://github.com/planetarium/web9c/blob/main/src/views/LobbyView/tabs/TransferTab.tsx)]

On the bottom of the lobby view, you can see a form for transfer asset. Fill the form and press the *Transfer* button.

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/82b7f4cf-366c-4947-a33f-c571b9a6a9e9">

Then it will show the 9cscan link.

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/1ba58d63-d6bd-46a0-afaa-0acac0319db7">

You can check the transaction data was built as your input well.

<img width="1358" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/6e450a91-d672-4b40-93c8-3a58401c11d0">

## Hack And Slash [[source](https://github.com/planetarium/web9c/tree/main/src/views/AvatarView)]

In the lobby view, choose avatar to battle and press its *Inventory* button. Then, it will navigate you to the avatar view. In the view, you can see its inventory.

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/e9bf95b6-3856-4c72-9e3f-47bd722b893c">

And you can choose equipment to use in the battle. Click the equipment icons to select. Choose equipment of valid count (e.g., Armor is allowed by only one.).

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/841adb51-c9b9-4c56-afed-1c64605f890e">

Press the *Battle* tab button on the top, then it will show you the form for battle.

<img width="1624" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/62d8e9f1-43f7-4423-9330-6cc363b87c99">

Fill the form. Of course it may be hard to know the world id and stage id correctly but it is not implemented yet 😭. Now, you can use `1` as world id and `1` as stage id.

<img width="1512" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/d112d573-7ade-4037-884a-33fd3deeb4f3">

Wait until it is included in a block. Then it will show the 9cscan link.

<img width="1512" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/1bc487a4-6b92-4c24-ad6d-7c934456d5cd">

My transaction was failed because there is no AP point while writing this document but you will succeed. You can check the transaction data was built with intended world id, stage id, equipment.

<img width="1512" alt="image" src="https://github.com/planetarium/libplanet/assets/26626194/21022992-5401-4018-acaa-0162f2bbd18f">
