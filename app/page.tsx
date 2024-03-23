import Layout  from '@/components/Layout';
import DiscussionFourm from '@/components/DiscussionFourm'
import Shoping from '../ApiForDummy/shoping';
 import UserApi from '../ApiForDummy/UserApi'
//import UserStory from '../components/UserStory';
export default function Home() {
  return (
    <div className='flex flex-row'>  
    <Layout/>
     <Shoping/>
     <UserApi/>
    </div>
    
  );
}
