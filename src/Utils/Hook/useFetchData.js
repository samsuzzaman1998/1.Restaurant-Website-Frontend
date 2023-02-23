import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (URL) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ status: false, message: "" });

    const getBlog = async () => {
        const url = `http://localhost:2000/api/v1/blog/${URL}`;
        try {
            const response = await axios.get(url);
            setData(response.data.result);
            setLoading(false);
            setError({ ...error, status: false });
        } catch (error) {
            console.log(error.message);
            setLoading(false);
            setError({ ...error, status: true, message: error.message });
        }
    };

    useEffect(() => {
        getBlog();
    }, [URL]);

    return [data, loading, error];
};

export default useFetchData;
