# Reflecting behvaior on the blockchain

<!-- 나인크로니클은 블록체인 게임입니다. 기타 다른 블록체인 게임들처럼 재화만 블록체인에 올려 계산하지 않고 전투, 아이템 강화, 아이템 강화 등 모든 행동들이 블록체인을 통해 이루어집니다. 당신이 Web9c에서 NCG를 송금하고 전투를 하는 행위들도 마찬가지로 블록체인에 트랜잭션을 포함시킴으로써 이루어집니다. 이 글에서는 액션과 트랜잭션을 만들게 되는 과정과 그 트랜잭션을 헤드리스에 보내는 과정까지만 설명합니다. 실제로 블록체인에 포함되어 어떻게 실행되는지를 이해하려면 docs.libplanet.io의 'Design: Action and State' 문서를 보는것이 더 좋을 것입니다. 그리고 잘 모르는 단어가 나온다면 Binance Academy Glossary에서 찾아보는 것도 좋은 방법이라고 생각합니다. https://academy.binance.com/en/glossary

게임에는 전투, 아이템 강화, 아이템 판매 등의 행동들이 있습니다. 우리는 이것을 "액션" 이라고 부릅니다. 그리고 이 액션을 트랜잭션에 담아 블록에 포함시킴으로써 상태에 우리가 전투나 아이템 강화 같은 행동을 상태에 반영시킵니다.

Libplanet 기반 블록체인에서는 직렬화 포맷으로 Bencodex라고 불리는 포맷을 활용합니다. 때문에 액션들 또한 Bencodex로 직렬화 가능한 물건들이고 트랜잭션, 블록들도 모두 마찬가지 입니다.

> 비대칭키 암호학과 전자서명에 대해서 이해할 필요가 있습니다. <

만약 당신이 액션을 포함한 트랜잭션을 만들었다면 우리는 이것을 "UnsignedTx" 라고 부를 것입니다. 위에서 트랜잭션을 블록에 포함시킴으로써 어떤 행동을 반영한다고 하였는데 아직 이 "UnsignedTx"는 블록에 포함될 수 없습니다. 왜냐하면 이 트랜잭션을 당신이 만들었다는 증거가 없기 때문입니다. 보통의 게임서버에 비유하면 게임을 플레이할 때 당신은 로그인을 하고 세션을 만들어 그 세션을 통해 플레이 할 것 입니다. 당신은 로그인이라는 과정에서 올바른 아이디와 패스워드를 입력함으로써 본인임을 증명한 것입니다. 하지만 블록체인에서는 아이디와 패스워드 대신 개인키와 서명이라는 것이 있습니다. 개인키는 오직 당신만이 갖고 있는 암호학적 키입니다. 그리고 당신은 개인키로 트랜잭션을 서명하고 그 서명을 트랜잭션에 함께 동봉하여 다른 이들에게 제공함으로써 이 트랜잭션을 당신이 서명했다고 증명할 수 있습니다. 우리는 이 상태의 트랜잭션을 "SignedTx" 라고 부릅니다. 이 상태가 되면 비로소 블록에 트랜잭션을 포함 시킬 수 있습니다.

하지만 Web9c에서 플레이 하는 당신은 직접 블록에 당신의 트랜잭션을 포함시킬 수 없습니다. 블록에 트랜잭션을 포함시키기 위해서는 네트워크에 전파하는 등의 여러 일이 필요하지만 이 글에서는 그 부분들은 생략합니다. 당신이 해야하는 일은 "SignedTx"를 블록체인 노드에서 제공하는 GraphQL API를 통해 트랜잭션을 스테이징 해달라고 요청하는 것입니다. 당신이 블록에 포함시키려는 트랜잭션을 Bencodex로 직렬화 시킨 바이너리를 해당 API를 통해 전달하면 됩니다. 그러면 요청받은 블록체인 노드는 트랜잭션을 전파하는 일련의 과정을 대리해줄것입니다. 이후 블록체인의 합의 과정을 통해 당신의 트랜잭션은 블록체인에 포함되고 비로소 당신이 원하던 전투나 아이템 강화 등의 행동을 할 수 있을 것입니다! -->

Nine Chronicles is a blockchain game. Instead of just putting goods on the blockchain to be counted like other blockchain games, all actions, including battles, item upgrades, and item enhancements, are done through the blockchain. The way you transfer NCG from Web9c and fight battles is also done by including transactions on the blockchain. This article only covers the process of creating actions and transactions and sending them to the Headless. To understand how they are actually included in the blockchain and executed, you'd be better off looking at the [Design: Action and State](https://docs.libplanet.io/2.2.0/articles/overview.html#action-and-state) documentation on docs.libplanet.io. And if you come across a word you don't recognize, I think it's a good idea to look it up in the [Binance Academy Glossary](https://academy.binance.com/en/glossary).

In a game, there are actions: fighting, enhancing items, selling items, etc. We call these "action", and by putting them in transactions and embedding them in blocks, the state reflects the actions we take, such as fighting or enhancing items.

The Libplanet-based blockchain utilizes a serialization format called [Bencodex](https://github.com/planetarium/bencodex), so actions are serializable in Bencodex, as are transactions and blocks.

> You need to understand asymmetric key cryptography and electronic signatures.

If you created a transaction with an action, we would call it an "UnsignedTx". We talked about including a transaction in a block to reflect an action, but this "UnsignedTx" can't be included in a block yet, because there's no evidence that you created it. If you think about a typical game server, when you play a game, you'll log in, create a session, and play through that session. In the process of logging in, you prove that you are who you say you are by entering the correct username and password. But in blockchain, instead of usernames and passwords, you have something called a private key and signature. Your private key is a cryptographic key that only you have, and you can prove to others that you signed this transaction by signing the transaction with your private key and enclosing that signature with the transaction. We call a transaction in this state "SignedTx". Only when it is in this state can you include the transaction in a block.

However, if you're playing on Web9c, you can't include your transaction in a block directly. Including a transaction in a block requires a number of things, including propagating it to the network, but we'll skip those for now. What you need to do is ask "SignedTx" to stage your transaction through the GraphQL API provided by the blockchain node. All you need to do is pass a binary serialized into a Bencodex of the transaction you want to include in the block through that API. The requested blockchain node will then take over the process of propagating the transaction. Afterwards, through the blockchain's consensus process, your transaction will be included in the blockchain and you'll be able to do whatever you want to do, like battle or buff an item!
