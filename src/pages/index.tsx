import { Link } from "gatsby";
import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi from the first page</h1>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
);

export default IndexPage;
