// http://localhost:3000/redirect/payment?success=true&cancel=false

import { useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { pathNames } from '~/routes';

function NotifyOrder() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const success = searchParams.get('success') === 'true';
    const cancel = searchParams.get('cancel') === 'true';

    console.log(typeof cancel);

    Swal.fire({
        icon: success ? 'success' : 'error',
        title: `Thanh toán ${success ? 'thành công' : 'thất bại'}`,
        confirmButtonText: cancel ? 'Về giỏ hàng' : 'Về trang chủ',
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            let endPoint = 'cart';

            if (success) {
                endPoint = 'home';
            }
            navigate(pathNames[endPoint]);
        }
    });

    return <div style={{ width: '100vw', height: '100vh' }}></div>;
}

export default NotifyOrder;
