import { Section, Wrapper } from '~/admin/components';
import { Button, Title } from '~/components';
import { product } from '~/utils/constant';

function Products() {
    return (
        <Wrapper>
            <Section>
                <Title as='h1'>All product</Title>
                <Button>+ Add product</Button>

                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Sale</th>
                            <th>Summary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.imgs[0]}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.sale}</td>
                            <td>{product.summary}</td>
                            <td>
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>{product.imgs[0]}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.sale}</td>
                            <td>{product.summary}</td>
                            <td>
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Section>
        </Wrapper>
    );
}

export default Products;
