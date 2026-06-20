import Layout from "./Layout.jsx";

import Landing from "./Landing";

import Benefits from "./Benefits";

import About from "./About";

import Platform from "./Platform";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfService from "./TermsOfService";

import CookiePolicy from "./CookiePolicy";

import DataProcessing from "./DataProcessing";

import Wine from "./industries/Wine";

import Supplements from "./industries/Supplements";

import SpecialtyFood from "./industries/SpecialtyFood";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { isWineHostname } from '@/utils/host';

const PAGES = {
    
    Landing: Landing,
    
    Benefits: Benefits,
    
    About: About,
    
    Platform: Platform,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfService: TermsOfService,
    
    CookiePolicy: CookiePolicy,
    
    DataProcessing: DataProcessing,

    Wine: Wine,

    Supplements: Supplements,

    SpecialtyFood: SpecialtyFood,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

function HomeRoute() {
    if (isWineHostname()) {
        return <Wine />;
    }
    return <Landing />;
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<HomeRoute />} />
                
                
                <Route path="/Landing" element={<Landing />} />
                
                <Route path="/industries/wine" element={<Wine />} />

                <Route path="/industries/supplements" element={<Supplements />} />

                <Route path="/industries/specialty-food" element={<SpecialtyFood />} />
                
                <Route path="/Benefits" element={<Benefits />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Platform" element={<Platform />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfService" element={<TermsOfService />} />
                
                <Route path="/CookiePolicy" element={<CookiePolicy />} />
                
                <Route path="/DataProcessing" element={<DataProcessing />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}
