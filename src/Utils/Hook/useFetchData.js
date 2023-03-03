import { useQuery } from "react-query";

const useFetchData = (URL) => {
    const { isLoading, isError, data, error, refetch } = useQuery(
        "dataFetch",
        () =>
            fetch(`http://localhost:3001/api/v1/${URL}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "access-token"
                    )}`,
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((res) => res?.result)
    );

    // const getData = async () => {
    //     const url = `http://localhost:3001/api/v1/${URL}`;
    //     try {
    //         const response = await axios.get(url);
    //         setData(response.data.result);
    //         setLoading(false);
    //         setError({ ...error, status: false });
    //     } catch (error) {
    //         console.log(error.message);
    //         setLoading(false);
    //         setError({ ...error, status: true, message: error.message });
    //     }
    // };

    // useEffect(() => {
    //     getData();
    // }, [URL]);

    return [data, isLoading, isError, refetch];
};

export default useFetchData;
