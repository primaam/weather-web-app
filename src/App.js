import "./App.css";
import { Loader, Layout, Header } from "./component";

function App() {
    return (
        <>
            <Layout>
                <Header />
                <Loader />
            </Layout>
            <Layout>
                <Loader />
            </Layout>
            <Layout>
                <Loader />
            </Layout>
        </>
    );
}

export default App;
