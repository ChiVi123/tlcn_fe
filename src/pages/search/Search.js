import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ProductCard, Title } from '~/components';
import * as services from '~/services/services';
import { cx, context } from './constant';

function Search() {
    const [searchParams] = useSearchParams();
    const [searchResult, setSearchResult] = useState({});

    useEffect(() => {
        const fetchApi = async ({ q, page, size }) => {
            const result = await services.searchProducts({ q, page, size });

            if (result?.totalQuantity) {
                setSearchResult(result);
            }
        };

        fetchApi({ q: searchParams.get('q'), page: 0, size: 25 });
    }, [searchParams]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid', 'wide')}>
                <Title line center as={'h1'}>
                    {context.title}
                </Title>

                <Title center as={'h2'}>
                    {searchResult.totalQuantity
                        ? context.searchResult(searchResult.totalQuantity)
                        : context.listEmpty}
                </Title>
            </div>

            {/* Products */}
            <div className={cx('section')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        {!!searchResult.totalQuantity &&
                            searchResult.list.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('col', 'l-2-4', 'm-4', 's-6')}
                                >
                                    <ProductCard key={index} product={item} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
