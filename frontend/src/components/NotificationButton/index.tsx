import axios from 'axios';
import { toast } from 'react-toastify';
import notificationIcon from '../../assets/img/notification-icon.svg'
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
    saleId : number;
    sellerName : string;
}

function handleClick(saleId : number, sellerName : string){
    axios(`${BASE_URL}/sales/${saleId}/notification`)
        .then(response => {
            toast.info(`SMS Id ${saleId} enviado para ${sellerName}.`);
        });
}

function NotificationButton({saleId, sellerName} : Props){
    return(
        <div className="dsmeta-red-btn" onClick= {() => handleClick(saleId, sellerName)}>
            <img src={notificationIcon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;