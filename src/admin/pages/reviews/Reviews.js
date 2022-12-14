import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HTMLReactParser from 'html-react-parser';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { ButtonCustomize } from '~/admin/components';
import { Title } from '~/components';
import { reviewServices } from '~/services';
import { cx, context } from './constant';

const reactSwal = withReactContent(Swal);

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const fetchApi = async () => {
        const result = await reviewServices.adminGetReviews();

        if (result?.length) {
            setReviews(result);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const handleReadContent = (content) => {
        reactSwal.fire({
            title: 'Nội dung đánh giá',
            html: (
                <div className={cx('wrapper-content')}>
                    {HTMLReactParser(content)}
                </div>
            ),
        });
    };
    const handleToggeBlock = async ({ id, state }) => {
        switch (state) {
            case 'enable':
                const expectMessageBlock = 'Block comment successfully ';
                const resultBlock = await reviewServices.blockReview({ id });

                if (resultBlock?.message === expectMessageBlock) {
                    toast.success('Khóa đánh giá thành công');
                    fetchApi();
                } else {
                    toast.error('Không thể khóa đánh giá này');
                }
                break;
            case 'block':
                const expectMessageEnable = ' Comment successfully ';
                const resultEnable = await reviewServices.unblockReview({ id });

                if (resultEnable?.message === expectMessageEnable) {
                    toast.success('Mở khóa đánh giá thành công');
                    fetchApi();
                } else {
                    toast.error('Không thể mở khóa đánh giá này');
                }
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Title as='h1'>{context.title}</Title>

            {/* <div className={cx('search')}>
                <input type='text' className={cx('input-search')} />
                <Button className={cx('button-search')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </div> */}

            <table className={cx('table')}>
                <thead>
                    <tr>
                        <th>{context.idReviewCol}</th>
                        <th>{context.userNameCol}</th>
                        <th>{context.productNameCol}</th>
                        <th>{context.lastUpdateCol}</th>
                        <th>{context.stateCol}</th>
                        <th>{context.actionsCol}</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((item, index) => (
                        <tr key={index}>
                            <td className={cx('td-review-id')} title={item.id}>
                                {item.id}
                            </td>
                            <td
                                className={cx('td-user')}
                                title={item.reviewedBy}
                            >
                                {item.reviewedBy}
                            </td>
                            <td
                                className={cx('td-product')}
                                title={item.productname}
                            >
                                {item.productname}
                            </td>
                            <td>{item.lastupdateDate || item.createdDate}</td>
                            <td>{item.state}</td>
                            <td>
                                <ButtonCustomize
                                    isRead={true}
                                    onClick={() =>
                                        handleReadContent(item.content)
                                    }
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </ButtonCustomize>
                                <ButtonCustomize
                                    isEdit={item.state === 'block'}
                                    isDelete={item.state === 'enable'}
                                    onClick={() =>
                                        handleToggeBlock({
                                            id: item.id,
                                            state: item.state,
                                        })
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={
                                            item.state === 'enable'
                                                ? faLock
                                                : faLockOpen
                                        }
                                    />
                                </ButtonCustomize>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Reviews;
