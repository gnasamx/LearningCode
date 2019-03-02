### :page_with_curl: Smart Contract

Smart Contracts are what we used to build interesting applications on Ethereum Blockchain. You can imagine a smart contract as being an account just like Metamask account but rather than controlled by human being, it is controlled by some amount of code and this is the code that developer going to authored. This code instructs smart contracts how to behave.

**:pushpin: Properties of Smart Contract Account**

| Field   | Description                        |
| ------- | ---------------------------------- |
| balance | Amount od ether this account owns  |
| storage | Data storage for this contract     |
| code    | Raw machine code for this contract |

**:triangular_ruler: Difference between accounts that created by you or I and contract accounts**

The accounts that you and I created using Metamask, we refer to as an _External Account_. External Accounts are any accounts that you and I or human being or entity owns. Externals accounts live in there own type of universe. They are completely decoupled from any individual network i.e. It can use same account number(External account) to connect to Main Ethereum network or Ropsten or Kovan or Rinkeby Test network. On other hand, these _Contract Accounts_ are specific to one individual network.
So when we create a Smart Contract Account that contain our smart contract, we created on one specific network and they can not be access across network. In short there is no communication between all these networks.

<p align="center">
<img src="../assets/External & Contract Accounts.png" alt="External & Contract Account Diagram"/>
</p>

In our computer/laptop, you and I going to author some amount of code that will as smart contract source. So this is the actual code that instructs contract how to behave and how it should handle money. We will then take that contract code and deploy it a network. When we deploy contract code to the network, it creates instance of the contract(we refer as contract account).

<p align="center">
<img src="../assets/Contract Deployment.png" alt="Contract Deployment Diagram"/>
</p>
