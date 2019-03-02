### :hourglass: Why'd we wait

**Workflow for a application where you can send and receive bitcoins or ethers**

- Enter address & Click on 'Submit' on form
- Address sent to backend server
- Backend server used Web3Js library to create a 'Transaction' object -> **[What is Transaction][1]**
- Backend server send 'Transaction' object to the Rinkeby test network
- Backend sever waited for transaction to be confirmed -> **Wait for confirmation**
- Backend server sent success message back to the browser

Transaction is any object that describes the transfer of funds from one account to another.
After the transaction object is created the same Web3Js library is then use to send the transaction
to the Rinkeby test network. Then we wait for the transaction to confirm.

So the :question: question is why did we wait so long for the transaction to confirm??

:speech*balloon: \_General Answer*: The Ethereum Blockchain stuff is heavy duty, it is complicated. When the people behind Bitcoin and people behind Ethereum sat down and thinking about the financial system that can be used to replace US dollars, Euros or other currencies out there by definition they had to make a system that robust enough to handles million billion trillion of dollars of values being transfer between people every day. So these systems are not complicated for sake of being complicated but the Blockchain is complicated because it has to solve an incredibly difficult problem. The representation in transfer of billion trillion of dollars between people. thats why it is so complicated.

### :zap: Transaction flow

When we send transaction to network (specifically in our case it is Rinkeby test network), to be precise it will go to the one specific node from that network. So our applications are interfacing with one node and that node is then communicating with rest of the nodes from the network.

![Transaction Flow Diagram](https://github.com/gnasamx/LearningCode/raw/master/Ethereum%20%26%20Solidity/Ethereum%20and%20Solidity%20complete%20developers%20guide/assets/Transaction%20Flow%20Diagram.png)

The following is the diagram of one node. Node will have entire copy of blockchain. So let suppose the transaction arrived at this specific node. But we have to keep in mind that you and I are not the only people in the world. There are other people in this world who want to submit transaction as well. So exact same time when you and I submitted the transaction may be two other people did as well. So there are three transaction coming exact same time to this specific node.

![All Trasactions](https://github.com/gnasamx/LearningCode/raw/master/Ethereum%20%26%20Solidity/Ethereum%20and%20Solidity%20complete%20developers%20guide/assets/All%20Transactions.png)

This node is going to take all these transaction('T' is our transaction & 'O' is other transactions)
and assembles all three transaction into one list of transaction which we refer to as a Block. The node then run some :cyclone: _validation logic_ on this Block. That validation logic is what takes long time.

![Mining](https://github.com/gnasamx/LearningCode/raw/master/Ethereum%20%26%20Solidity/Ethereum%20and%20Solidity%20complete%20developers%20guide/assets/Mining.png)

Validation logic is a general term, which we called it as 'Mining' in Blockchain world. So when these transaction are get assemble into the block, the node start running some :gear: calculations on the block and that process is refer to as _Mining_.

[1]: https://github.com/gnasamx/LearningCode/blob/master/Ethereum%20%26%20Solidity/Ethereum%20and%20Solidity%20complete%20developers%20guide/Ethereum%20basics/04%20Transaction.md
