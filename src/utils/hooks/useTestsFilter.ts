import { useEffect, useState } from 'react';
import { ITest } from '../api/apiDataTypes';

export const useTestsFilter = (tests: ITest[], searchText: string) => {
    const [filteredTests, setFilteredTests] = useState(tests);

    useEffect(() => {
        const filtered = tests.filter((test) =>
            test.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredTests(filtered);
    }, [searchText, tests]);

    return filteredTests;
};
