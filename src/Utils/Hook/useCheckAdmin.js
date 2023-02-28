const { useState, useEffect } = require("react");
const { toast } = require("react-toastify");

const useCheckAdmin = (user) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:3001/api/v1/user/check-admin/${email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "access-token"
                    )}`,
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.status) {
                        setAdminLoading(false);
                        setIsAdmin(data?.status);
                    } else {
                        setAdminLoading(false);
                        setIsAdmin(false);
                    }
                })
                .catch((err) => {
                    setAdminLoading(false);
                    setIsAdmin(false);
                    toast.error("Something went wrong");
                    console.log(err);
                });
        }
    }, []);

    return [isAdmin, adminLoading];
};

export default useCheckAdmin;
