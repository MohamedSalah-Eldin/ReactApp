
import { UserConsumerHooks } from "./ContextHooks";


const CompnentFiveHooks= () => {

    return (
        <UserConsumerHooks>
  
              {(username) => <h1>Welcome From Component Five-----------{username}</h1>}
                </UserConsumerHooks>
      );
    };

  export default CompnentFiveHooks;