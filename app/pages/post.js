import React from 'react';
import Markdown from 'react-markdown';
import Layout from '../components/layout/Layout';

export default props => (
    <Layout>
        <h1>{props.url.query.title}</h1>
        <Markdown
            source="Yes. We can have a [https://github.com/jefftham/Reminder](https://github.com/jefftham/Reminder)."
        />
    </Layout>
);
