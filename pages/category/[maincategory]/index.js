import App from '@/components/Layout/App.js';
import NewsBlock from '@/components/NewsBlock/NewsBlock';

function CategoryData({ articles }) {
    console.log("data",articles);
    return (
        <App>

            <NewsBlock value={{ unique: false, data: articles }} />

        </App>

    )
}

export default CategoryData

export async function getServerSideProps(context) {
    const { params } = context
    const { maincategory } = params
    // console.log(params);

    // const response = await fetch('http://localhost:5000/call/allNewsData',{data: "Entertainment"} )
    // console.log(response.data);

    // const data = await response.json

    return {
        props: {
            articles: maincategory
        }
    }

}