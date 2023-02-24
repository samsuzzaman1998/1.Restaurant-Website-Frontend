import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
// Router Setup
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProviderWrapper } from "./Utils/Context/userContext";
import { OrderContextPorvider } from "./Utils/Context/OrderContext";

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <UserContextProviderWrapper>
                    <OrderContextPorvider>
                        <App />
                    </OrderContextPorvider>
                </UserContextProviderWrapper>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
