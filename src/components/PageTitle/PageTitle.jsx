import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ title }) => {
    useEffect(() => {
        if (title) {
            document.title = `Bistro Boss | ${title}`;
        }
    }, [title]);

    return (
        <Helmet>
            <title>Bistro Boss | {title}</title>
        </Helmet>
    );
};

export default PageTitle;