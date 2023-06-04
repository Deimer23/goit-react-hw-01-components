import  user  from "../data/to/user.json";
import data from "../data/to/data.json";
import friends from "../data/to/friends.json"
import transaction from "../data/to/transactions.json";

import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "../components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{        
        display: 'flex',      
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: "40px",        
        fontSize: 40,
        color: '#010101',   
        marginBottom: '50px'                                 
      }}
    >    
      <Profile user={user}/>
      <Statistics data={data} tittle="Upload stats"/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transaction}/>
    </div>
  );
};
