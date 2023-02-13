import { categories } from '../constants';
import fetchNews from '../utils/fetchNews';
import NewsList from './NewsList';

async function Homepage() {
    const news: NewsResponse = await fetchNews(categories.join(','));

    console.log(news);
    return (
        <div>
            <NewsList news={news} />
        </div>
    );
}

export default Homepage;
