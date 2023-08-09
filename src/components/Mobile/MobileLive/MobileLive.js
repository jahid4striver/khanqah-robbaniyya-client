import JoinRoom from './JoinRoom'
import Room from './Room';
import './styles.css'
// import { useHMSStore, selectIsConnectedToRoom } from '@100mslive/react-sdk';

const MobileLive = () => {
    //style="color:;display:block;font-family:Helvetica,sans-serif;font-size:11px;text-align:left;padding: 4px 0;"
    // const isConnected = useHMSStore(selectIsConnectedToRoom)
    return (
        <div className='my-40 flex  justify-center items-center'>
            <iframe src="https://khanqaherumi.mixlr.com/embed" frameborder="0" scrolling="no" height="300px" width="300px"></iframe>
            {/* {isConnected
                ? <Room />
                : <JoinRoom />
            } */}
        </div>
    );
}

export default MobileLive;