import { UserConsumerHooks } from "./ContextHooks";


const CompnentThreeHooks = () => {
  
    return (
      <UserConsumerHooks>
 
            {(username) => <h1>Welcome From Component Three-----------{username}</h1>}
              </UserConsumerHooks>
    );
  };

  export default CompnentThreeHooks;