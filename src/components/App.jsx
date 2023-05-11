import { Profile } from './Profile/Profile';
 import user from '../data/user.json';

 
 export const App = () => {
   return (
     <div
       style={{
         height: '100%',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'center',
       }}
     >
       <Profile
         username={user.username}
         tag={user.tag}
         location={user.location}
         avatar={user.avatar}
         stats={user.stats}
       />
       {/* <Statistics stats={data} />
       <FriendsList friends={friends} />
       <TransactionHistory items={transactions} />; */}
     </div>
   );
 };