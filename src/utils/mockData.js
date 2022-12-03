import { useEffect, useState } from "react";
import accounts from "../mockData/accounts.json";
import categories from "../mockData/categories.json";
import transactions from "../mockData/transaction.json";
import httpService from "../services/http.service";

const useMockData = () => {
    const statusConsts = {
        idle: "Not Started",
        pending: "In Process",
        successed: "Ready",
        error: "Error occured",
    };
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summuryCount = [...accounts, ...categories, ...transactions].length;

    const incCount = () => {
        setCount((prevState) => prevState + 1);
    };

    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summuryCount) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.successed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const account of accounts) {
                await httpService.put("account/" + account._id, account);
                incCount();
            }
            for (const category of categories) {
                await httpService.put("category/" + category._id, category);
                incCount();
            }
            for (const transaction of transactions) {
                await httpService.put(
                    "transaction/" + transaction._id,
                    transaction
                );
                incCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    }

    return { error, initialize, progress, status };
};

export default useMockData;
