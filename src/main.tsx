import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { registerLicense } from '@syncfusion/ej2-base';
import {QueryClient, QueryClientProvider} from 'react-query'


registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1JpQXxbf1xzZFZMZFVbQHZPIiBoS35RdURjWXpfdXBcQmFZVEFx');


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>

)
