# Security

<!-- ## Web9c가 개인키를 사용하는 방법

블록체인 게임을 포함하여 블록체인 어플리케이션을 사용하는 사람들에게 있어 개인키는 매우 중요한 요소입니다. 블록체인에서는 개인키를 가지고 트랜잭션을 서명하고 어떤 행동을 함에 있어서 본인임을 증명하는 유일한 방법이기 때문입니다. 예를 들면 개인키를 당신 뿐만 아니라 다른 사람도 가지고 있다면 그 사람은 당신처럼 행동할 수 있습니다. 당신이 가진 코인을 자신의 지갑으로 송금하거나 Nine Chronicles를 예로 들면 가지고 있는 아이템을 모두 팔고 자신의 지갑으로 수익을 옮길수도 있을 것입니다. 때문에 개인키를 다루는 것들에 대해서 민감할 수 밖에 없습니다.

Web9c는 [Web3KeyStore](https://ethereum.org/en/developers/docs/data-structures-and-encoding/web3-secret-storage/) 포맷의 암호화된 키 파일을 받아 패스워드를 추가로 입력받아 복호화 개인키를 가지고 직접 서명하는 방식을 취하고 있습니다. 이는 Nine Chronicles가 취하고 있는 방법과 같습니다. Nine Chronicles 또한 런처에서 암호화된 키 파일을 패스워드로 복호화하여 개인키를 얻고 이를 유니티 클라이언트에 전달하여 게임을 플레이하게 되는 것입니다.

## Web9c와 Nine Chronicles는 왜 그런 방식을 사용하는가?

보통의 블록체인 사용자라면 MetaMask라는 웹브라우저 확장 프로그램을 사용할 것입니다. MetaMask는 지갑의 역할을 합니다. 여기서 말하는 지갑은 실제 개인키를 주지 않고 입력으로 받은 값을 개인키로 서명한 뒤 그 서명만을 돌려주는 것을 말합니다. 실제로 당신이 DeFi 등에서 거래를 하고 트랜잭션을 만들어 보았다면 MetaMask가 팝업을 띄워 당신에게 서명할 트랜잭션을 보여주며 확인을 받는 것을 보았을 것입니다.

만약 Web9c나 Nine Chronicles가 그런 지갑을 통해 통신한다면 모든 행동에 지갑 서명 확인을 받아야 했을 것입니다. 예를 들어 아이템을 팔 때 한 번, 전투할 때 한 번 이렇게 말입니다. 이는 꽤나 안 좋은 경험이라고 생각합니다. 물론 저도 개인적으로 이게 안전한 방법이라고 생각하지는 않지만 트레이드라고 생각합니다.

물론 MetaMask 같은 지갑을 사용하는 것이 안전하다고 말하는 것도 아닙니다. MetaMask도 Web9c도 그리고 NineChronicles도, 만약 당신의 브라우저가 해킹 당했다면, key-logger가 설치되어 passphrase 등을 읽히고 있다면, 당신의 PC 자체가 해킹당해 메모리를 읽을 수 있는 상태가 되었다면, 카메라로 당신이 패스워드를 치고 있는 모습을 보고 있다면 당신의 개인키는 언제든 빼앗길수 있습니다. MetaMask가 브라우저 확장 프로그램으로 따로 분리되어 있다는 점에서 현재 Nine Chronicles나 Web9c 보다는 보다 낫다고 생각합니다. 하지만 개인적으로 당신이 진정 콜드 월렛을 만들어 잘 관리하지 않는 이상 모든 경우 위험하다고 생각합니다. 그리고 요즘 처럼 CCTV나 블랙박스 등이 즐비하고 공권력이 확실한 상황에서는 사실상 어려울 것이라고 생각합니다. 를 ChatGPT에게 맡김. -->

## The Methodology Web9c Employs for Private Keys

Private keys are of utmost importance to those utilizing blockchain applications, including blockchain games. In blockchain, these keys are the unique tool to sign transactions and authenticate actions, essentially confirming your identity. For instance, if another individual besides you has access to your private key, they could act on your behalf. They could transfer the coins you own to their wallet, or using Nine Chronicles as an example, sell all items you own and transfer the profits to their wallet. Therefore, handling private keys requires high levels of care and security.

Web9c operates by accepting encrypted key files in the Web3KeyStore format, entering an additional password for decryption, and utilizing the decrypted private key for direct signing. This method mirrors that of Nine Chronicles. The latter also decrypts the encrypted key file through a launcher using a password, obtains the private key, and then relays it to the Unity client for gameplay.

## The Reasons Behind Web9c and Nine Chronicles' Choice of Method

A typical blockchain user will likely use MetaMask, a web browser extension that serves as a wallet. This 'wallet' does not distribute the actual private key. Instead, it receives an input value, signs it with the private key, and returns the signature. For example, if you've made a transaction in DeFi or similar, you'd have seen MetaMask generate a pop-up for you to confirm the transaction signature.

If platforms like Web9c and Nine Chronicles were to communicate via this type of wallet, each action would necessitate a wallet signature confirmation. This could be quite inconvenient. While I personally do not regard this as the safest method, I view it as a trade-off.

This is not to say that using a wallet like MetaMask guarantees safety. Be it MetaMask, Web9c, or Nine Chronicles, if your browser has been hacked, if a key-logger has been installed and can read your passphrase, or if your PC has been compromised to the extent of memory reading, or even if a camera is observing you entering your password, your private key could be stolen at any moment. Given its segregation as a browser extension, MetaMask may seem safer than Nine Chronicles or Web9c. However, unless you have created and effectively managed a cold wallet, all scenarios pose risks. Especially in today's world, where we're surrounded by CCTV cameras, black boxes, and strong law enforcement, achieving absolute safety seems to be a significant challenge.